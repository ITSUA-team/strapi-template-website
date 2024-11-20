import type { StrapiApp } from '@strapi/strapi/admin';
import Logo from "/logo-itsua-white.png";
import { release } from 'os';


export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
    auth : {
      logo: Logo,
    },
    menu: {
      logo: Logo,
    },
    tutorials: false,
    notifications: {
      releases: false
    }
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
