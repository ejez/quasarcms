<template>
  <q-layout view="lHh Lpr lFf">
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
  }
}
</script>
