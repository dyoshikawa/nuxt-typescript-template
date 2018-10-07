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
import { Getter, Action } from 'vuex-class'

@Component
export default class extends Vue {
  @Getter('getEvents', { namespace: 'events' })
  events: Event[]
  @Action('fetchEvents', { namespace: 'events' })
  fetchEvents: any

  async created() {
    await this.fetchEvents()
  }
}
</script>