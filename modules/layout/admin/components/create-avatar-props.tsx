import { AvatarDropDown } from './avatar-dropdown';
import { prolayoutConfig } from '@/config';

export const createAvatarProps = (userInfo: any) => ({
  src: userInfo?.avatar || prolayoutConfig.avatar.src,
  size: prolayoutConfig.avatar.size as any,
  title: userInfo?.name,
  render: (_: any, dom: any) => {
    return <AvatarDropDown dom={dom} />;
  },
});
