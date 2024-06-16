import 'react-advanced-cropper/dist/style.css';

import { Avatar, Button, Modal, message } from 'antd';
import {
  ProCard,
  ProForm,
  ProFormDependency,
  ProFormGroup,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { useRef, useState } from 'react';

import { Cropper } from 'react-advanced-cropper';
import type { CropperRef } from 'react-advanced-cropper';

type BasicSettingProps = {
  provinces: any[];
  cities: any[];
};

export const BasicSetting: React.FC<BasicSettingProps> = ({
  provinces = [],
  cities = [],
}) => {
  const inputRef = useRef<any>();
  const [visible, setVisible] = useState(false);
  const [croppedImage, setCroppedImage] = useState<string>('');
  const [image, setImage] = useState('/images/user.jpg');
  let cvs: any = null;

  const onChange = (cropper: CropperRef) => {
    cvs = cropper.getCanvas();
  };
  const handleModal = () => {
    inputRef.current?.click();
  };

  const handleOk = () => {
    const imgUrl = cvs?.toDataURL('image/png');
    if (!imgUrl) {
      message.error('还没有选择内容');
      return;
    }
    setImage(imgUrl);
    setVisible(false);
    setCroppedImage('');
    // @ts-ignore
    if (inputRef.current && inputRef.current.value) {
      inputRef.current.value = '';
    }
    cvs = null;
  };

  const handleCancel = () => {};

  return (
    <ProCard
      title="基础设置"
      bodyStyle={{ display: 'flex', flexWrap: 'nowrap' }}
    >
      <ProForm submitter={false}>
        <ProFormText label="邮箱" initialValue="123456@email.com" width="md" />
        <ProFormText label="昵称" initialValue="nickname" width="md" />
        <ProFormTextArea label="个人简介" width="md" />
        <ProFormSelect
          width="md"
          label="国家/地区"
          options={[
            {
              label: '中国',
              value: '中国',
            },
          ]}
        />
        <ProForm.Group>
          <ProFormSelect
            width="md"
            label="所在省市"
            name="province"
            options={provinces.map((p: any) => ({
              label: p.name,
              value: p.code,
            }))}
          />
          <ProFormDependency name={['province']}>
            {({ province }) => {
              return (
                <ProFormSelect
                  options={cities
                    .filter((c: any) => c.provinceCode === province)
                    .map((cc: any) => ({
                      label: cc.name,
                      value: cc.code,
                    }))}
                  width="md"
                  name="cities"
                  label="选择城市"
                />
              );
            }}
          </ProFormDependency>
        </ProForm.Group>
        <ProFormText width="md" label="街道地址" initialValue="月亮岛" />
        <ProForm.Item label="联系电话">
          <ProFormGroup>
            <ProFormText width={100} initialValue="0744" />
            <ProFormText width="md" initialValue="1234567" />
          </ProFormGroup>
        </ProForm.Item>
        <ProForm.Item>
          <Button htmlType="submit">提交</Button>
        </ProForm.Item>
      </ProForm>
      <div>
        <div>
          <Avatar
            style={{ width: '200px', height: '200px' }}
            src={image}
            onClick={handleModal}
            alt=""
          />
          <input
            type="file"
            ref={inputRef}
            style={{ display: 'none' }}
            accept="image/*"
            onChange={event => {
              const fileList = event.target.files || [];
              if (fileList.length > 0) {
                const file = fileList[0];
                const reader = new FileReader();
                reader.onload = event => {
                  const base64Url = event.target?.result || '';
                  setCroppedImage(base64Url as string);
                  setVisible(true);
                };
                reader.readAsDataURL(file);
              } else {
                message.error('选择文件长度是 0 ');
              }
            }}
          />
        </div>
        <Modal open={visible} onOk={handleOk} onCancel={handleCancel}>
          <Cropper
            src={croppedImage}
            onChange={onChange}
            className={'cropper'}
          />
        </Modal>
      </div>
    </ProCard>
  );
};
