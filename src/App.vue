<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',

  meta () {
    // get host (ie: example.com)
    const host = process.env.SERVER
      ? this.$ssrContext.req.headers.host
      : window.location.host

    const meta = {
      // fallback metas when not defined in child components.
      // notice also that we removed the 'title' and 'meta description' tags
      // from 'src/index.template.html' to avoid having duplicates
      title: 'Quasarcms',
      meta: {
        description: { name: 'description', content: 'A Quasarcms app' }
      },
      link: {}
    }

    // x-default hreflang
    const xDefaultLang = this.$route.meta.defaultTranslation
    if (xDefaultLang) {
      const xDefaultPath = this.$route.meta.translations[xDefaultLang]

      meta.link.xDefaultHreflang = {
        rel: 'alternate',
        hreflang: 'x-default',
        href: `https://${host}/${xDefaultLang}${xDefaultPath ? '/' + xDefaultPath : ''}`
      }
    }

    // hreflang links
    if (this.$route.meta.translations) {
      Object.entries(this.$route.meta.translations).forEach(([lang, path]) => {
        meta.link[`${lang.replace('-', '')}Hreflang`] = {
          rel: 'alternate',
          hreflang: lang,
          href: `https://${host}/${lang}${path ? '/' + path : ''}`
        }
      })
    }

    return meta
  }
}
</script>
