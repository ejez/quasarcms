<template>
  <q-layout
    view="lHh Lpr lFf"
    :style="layoutStyles"
  >
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <qm-lang-selector />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item
          clickable
          :to="`/${$q.lang.isoName}`"
          exact
        >
          <q-item-section avatar>
            <q-icon name="house" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ $t('Home') }}</q-item-label>
            <q-item-label caption>
              {{ $t('Home') }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          :to="`/${$q.lang.isoName}/${aboutPageRoutepaths[$q.lang.isoName]}`"
          exact
        >
          <q-item-section avatar>
            <q-icon name="info" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ $t('About') }}</q-item-label>
            <q-item-label caption>
              {{ $t('About') }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          v-if="$q.lang.isoName === 'en'"
          clickable
          to="/en/docs"
          exact
        >
          <q-item-section avatar>
            <q-icon name="library_books" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Docs</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          v-if="$q.lang.isoName === 'en'"
          clickable
          to="/en/demo"
          exact
        >
          <q-item-section avatar>
            <q-icon name="ondemand_video" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Demo</q-item-label>
          </q-item-section>
        </q-item>

        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'
import QmLangSelector from 'components/QmLangSelector'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink,
    QmLangSelector
  },

  data () {
    return {
      leftDrawerOpen: false,
      aboutPageRoutepaths: {
        ar: 'من_نحن',
        en: 'about-us'
      },
      layoutStyles: {},
      essentialLinks: [
        {
          title: 'Docs',
          caption: 'quasar.dev',
          icon: 'school',
          link: 'https://quasar.dev'
        },
        {
          title: 'Github',
          caption: 'github.com/quasarframework',
          icon: 'code',
          link: 'https://github.com/quasarframework'
        },
        {
          title: 'Discord Chat Channel',
          caption: 'chat.quasar.dev',
          icon: 'chat',
          link: 'https://chat.quasar.dev'
        },
        {
          title: 'Forum',
          caption: 'forum.quasar.dev',
          icon: 'record_voice_over',
          link: 'https://forum.quasar.dev'
        },
        {
          title: 'Twitter',
          caption: '@quasarframework',
          icon: 'rss_feed',
          link: 'https://twitter.quasar.dev'
        },
        {
          title: 'Facebook',
          caption: '@QuasarFramework',
          icon: 'public',
          link: 'https://facebook.quasar.dev'
        }
      ]
    }
  },

  mounted () {
    // get header element
    const header = document.querySelector('header.q-header')
    // define a css variable that contains the header height
    this.layoutStyles['--header-height'] = header
      ? `${header.offsetHeight}px`
      : 0
  }
}
</script>

<style lang="sass">
// When directly navigating to a url with an anchor, for example:
// http://example.com/contact#Email, and to avoid that the anchor element gets
// hidden by the page header we use the header height to set 'scroll-margin-top'
// of the target anchor element.
.q-page-container :target
  scroll-margin-top: var(--header-height)
</style>
