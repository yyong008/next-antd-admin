import {
  GithubFilled,
  InfoCircleFilled,
  QuestionCircleFilled,
  TranslationOutlined,
} from '@ant-design/icons';

import { Dropdown } from 'antd';
import { useRouter } from 'next/navigation';

const ActionRenderImpl = ({ value }: any) => {
  const router = useRouter();
  const choiceLang = (lang: string) => {
    let p = location.pathname.split('/');
    p[1] = lang || 'en-US';
    value.setLang(lang || 'en-US');
    router.replace(p.join('/').trim());
  };
  return (
    <Dropdown
      key="lang"
      menu={{
        items: [
          {
            key: 'en',
            label: 'EN English',
            onClick: () => {
              choiceLang('en-US');
            },
          },
          {
            key: 'cn',
            label: 'CN 简体中文',
            onClick: () => {
              choiceLang('zh-CN');
            },
          },
        ],
      }}
    >
      <TranslationOutlined />
    </Dropdown>
  );
};

export const createActionRenderWrap =
  ({ value }: any) =>
  (props: any) => {
    const goGithub = () => {
      let aTag: any = document.createElement('a');
      aTag.setAttribute('href', 'https://github.com/yyong008/remix-antd-admin');
      aTag.setAttribute('target', '_blank');
      aTag.click();
      aTag = null;
    };
    if (props.isMobile) return [];
    return [
      <InfoCircleFilled key="InfoCircleFilled" />,
      <QuestionCircleFilled key="QuestionCircleFilled" />,
      <GithubFilled key="GithubFilled" onClick={goGithub} />,
      <ActionRenderImpl key="actionRender" value={value} />,
    ];
  };
