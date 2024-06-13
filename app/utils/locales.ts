// import 'server-only'

const locales: any = {
  'en-US': () =>
    import('../../public/locales/en-US.json').then(module => module.default),
  'zh-CN': () =>
    import('../../public/locales/zh-CN.json').then(module => module.default),
};

export const getDictionary = async (locale: any) => locales[locale]();
