import { DefaultFooter } from '@ant-design/pro-components';
import { GithubOutlined } from '@ant-design/icons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      data-testid="default-footer"
      copyright={`${currentYear} ${'By Yong-'}`}
      links={[
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/yyong008/next-antd-admin',
          blankTarget: true,
        },
        {
          key: 'Next',
          title: 'Next',
          href: 'https://nextjs.org/',
          blankTarget: true,
        },

        {
          key: 'Ant Design',
          title: 'Ant Design',
          href: 'https://ant.design/index-cn',
          blankTarget: true,
        },
      ]}
    />
  );
};
