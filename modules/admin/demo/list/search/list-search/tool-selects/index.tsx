// components:vendor
import { Divider } from 'antd';
import { ProCard } from '@ant-design/pro-components';

// components
import Owner from '../owner';
import Category from '../category';
import OtherOptions from '../other-options';

export default function ToolSelect(props: any) {
  return (
    <ProCard>
      <Category />
      <Divider dashed />
      {!props.showOwner ? <Owner /> : null}
      {!props.showOwner ? <Divider dashed /> : null}
      <OtherOptions />
    </ProCard>
  );
}
