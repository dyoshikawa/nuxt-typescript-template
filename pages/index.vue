<template>
  <div>
    <h1>Nuxt TypeScript Template</h1>
    <ul>
      <li>Nuxt.js</li>
      <li>TypeScript</li>
      <li>Bootstrap Vue</li>
    </ul>

    <b-card
      v-for="event in events"
      :key="event.id"
      :title="event.title"
    >
      {{ event.content }}
    </b-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Action, Getter } from 'vuex-class'

@Component({})
export default class extends Vue {
  @Getter('getAuthUser', { namespace: 'authUser' })
  private authUser: Event[]
  @Action('fetchAuthUser', { namespace: 'authUser' })
  private fetchAuthUser: any

  private async created() {
    await this.fetchAuthUser()
  }
}
</script>