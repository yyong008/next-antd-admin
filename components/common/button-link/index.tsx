import * as _icon from '@ant-design/icons';

import { Button } from 'antd';
import type { ButtonType } from 'antd/es/button';
import Link from 'next/link';

const { EditOutlined, PlusOutlined } = _icon;

type ButtonLinkProps = {
  to: string;
  buttonType?: ButtonType;
  icon?: React.ReactNode;
  content?: string;
  type: 'new' | 'edit';
};

export function ButtonLink(props: ButtonLinkProps) {
  if (props.type === 'new') {
    return (
      <Link href={props.to}>
        <Button
          type={props.buttonType || 'primary'}
          icon={props.icon ?? <PlusOutlined />}
        >
          {props.content}
        </Button>
      </Link>
    );
  } else if (props.type === 'edit') {
    return (
      <Link href={props.to}>
        <Button
          type={props.buttonType || 'link'}
          icon={props.icon ?? <EditOutlined />}
        >
          {props.content}
        </Button>
      </Link>
    );
  }
}
