import MenuModal from '../create-menu-model';
import { ProTable } from '@ant-design/pro-components';
import { menuColumnsCreate } from './menu-columns-create';

export type Status = {
  color: string;
  text: string;
};

export type TableListItem = {
  id: number;
  parentId: number;
  key: number;
  name: string;
  icon: string;
  containers: number;
  orderNo: number;
  path: string;
  creator: string;
  status: Status;
  createdAt: number;
  updatedAt: number;
  isLink: 0 | 1;
};

type SystemMenuProps = {
  menuRaw: any[];
  menuNotPerm: any[];
  fetcher: () => void;
};

export default function SystemMenu(props: SystemMenuProps) {
  const { menuRaw = [], menuNotPerm = [], fetcher } = props;
  return (
    <ProTable<TableListItem>
      size="small"
      columns={menuColumnsCreate(menuNotPerm) as any}
      scroll={{ x: 1300 }}
      dataSource={menuRaw ?? []}
      rowKey="id"
      pagination={false}
      search={false}
      dateFormatter="string"
      headerTitle="菜单管理"
      rowClassName={record => {
        return record.parentId ? 'bg-yellow-50' : '';
      }}
      toolBarRender={() => [
        <MenuModal
          key="menu-modal"
          fetcher={fetcher}
          menuNotPerm={menuNotPerm}
          record={{}}
        />,
      ]}
    />
  );
}
