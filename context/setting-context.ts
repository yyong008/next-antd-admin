import { createContext } from 'react';
import { defaultLang } from '@/config/lang';

export const SettingContext = createContext({
  theme: {
    colorPrimary: '',
    // layout: "mix"
  },
  setTheme: (theme: any) => {},
  lang: defaultLang,
  setLang: (v: any) => {},
});
