/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';

import { ProFormText } from '@ant-design/pro-components';

export function RigisterCaptachat() {
  const [imgUrl, setImgUrl] = useState('');
  const getCaptachat = async () => {
    const data = await fetch('/api/captcha', { method: 'GET' });
    if (data.ok) {
      let blob = await data.blob();
      setImgUrl(URL.createObjectURL(blob));
      return;
    } else {
      setImgUrl('');
    }
  };
  useEffect(() => {
    getCaptachat();
  }, []);
  return (
    <div className="flex items-center mb-[20px]">
      <ProFormText
        noStyle
        name="code"
        placeholder={'验证码'}
        fieldProps={{
          size: 'large',
        }}
        rules={[
          {
            required: true,
            message: '请输入用户名!',
          },
        ]}
      />
      {
        <div className="ml-[10px] w-[200px] h-[50px] cursor-pointer overflow-hidden">
          {imgUrl ? (
            <img
              className="w-[100%] h-[100%]"
              src={imgUrl}
              alt=""
              width={200}
              onClick={() => {
                getCaptachat();
              }}
            />
          ) : (
            <></>
          )}
        </div>
      }
    </div>
  );
}
