<template>
  <div>
    <h1>Nuxt TypeScript Template</h1>
    <ul>
      <li>Nuxt.js</li>
      <li>TypeScript</li>
      <li>Bootstrap Vue</li>
    </ul>

    <b-card
      :title="authUser.name"
    ></b-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Action, Getter } from 'vuex-class'
import { AuthUser } from '~/store/types/authUser'

@Component({})
export default class extends Vue {
  @Getter('getAuthUser', { namespace: 'authUser' })
  private authUser: AuthUser
  @Action('fetchAuthUser', { namespace: 'authUser' })
  private fetchAuthUser: any

  private async created() {
    await this.fetchAuthUser()
  }
}
</script>
