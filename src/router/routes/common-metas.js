// you can define here route metas which are shared between multiple language
// versions of the same page.
// all metas are optional

export default {
  index: {
    translations: {
      ar: '',
      en: ''
    },
    defaultTranslation: 'ar',
    // path to vue-i18n message object file relative to
    // 'src/i18n/vue-i18n-messages/<locale>/'
    i18nMessage: 'pages/index'
  },

  about: {
    // route translations list enables the language selector to find the
    // appropriate route of the target language. It also enables building
    // hreflang links
    translations: {
      ar: 'من_نحن',
      en: 'about-us'
    },
    // used for x-default hreflang
    defaultTranslation: 'ar'
  }
}
