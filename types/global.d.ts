type APP_INFO = {
  pkg: any;
  lastBuildTime: string;
};

// global variables
declare const __APP_INFO__: APP_INFO;

// modules
declare module 'lax.js';
declare module 'react-copy-to-clipboard';
declare module 'react-wordcloud';
