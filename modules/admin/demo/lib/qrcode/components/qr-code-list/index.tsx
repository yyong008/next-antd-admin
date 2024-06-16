import { Button } from 'antd';
import JSZip from 'jszip';
import QRCode from 'qrcode';
import React from 'react';
import fileSaver from 'file-saver';

const { saveAs } = fileSaver;

export default function QrCodeList({ trigger, list = [] }: any) {
  const gnVisiableCanvas = async () => {
    for (const item of list) {
      const canvas = document.createElement('canvas');
      canvas.style.display = 'none';
      canvas.classList.add('__qrcode');
      canvas.setAttribute('name', item.name);

      await QRCode.toCanvas(canvas, item.url).catch(err => {
        console.error('qr err', err);
      });
      document.body.appendChild(canvas);
    }
  };

  const destoryQrCodeWithURL = () => {
    const qrs = document.querySelectorAll('.__qrcode');
    qrs.forEach((qr: any) => {
      document.body.removeChild(qr);
    });
  };

  const createQrCodeWithURL = async () => {
    const zip = new JSZip();
    const folder = zip.folder('new-fold')!;
    await gnVisiableCanvas();

    const qrs = document.querySelectorAll('.__qrcode');

    qrs.forEach((qr: any) => {
      const data = qr.toDataURL().substring(22);
      folder.file(qr.getAttribute('name') + '.png', data, {
        base64: true,
      });
    });

    const content = await folder
      .generateAsync({ type: 'blob' })
      .then(function (content) {
        return content;
      });
    saveAs(content, 'qrcodes.zip');
    destoryQrCodeWithURL();
  };

  const TriggerNew = () => {
    if (!trigger) {
      return (
        <div className="flex justify-center">
          <Button type="primary" onClick={() => createQrCodeWithURL()}>
            batch generate qr code
          </Button>
        </div>
      );
    }

    return React.cloneElement(
      trigger,
      {
        onClick: () => {
          createQrCodeWithURL();
        },
      },
      trigger.props.children,
    );
  };

  return <TriggerNew />;
}
