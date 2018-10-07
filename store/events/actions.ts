import { ActionTree } from 'vuex'
import { EventsState, Event } from './types'
import { RootState } from '../types'
import { AxiosResponse } from 'axios'

export const actions: ActionTree<EventsState, RootState> = {
  async fetchEvents({ commit }): Promise<any> {
    const { data } = (await this.$axios.get()) as AxiosResponse<any>

    console.log(data)

    const payload: Event[] = data.map(d => {
      return {
        id: d.id,
        title: d.title,
        content: d.content,
      }
    })

    commit('setEvents', payload)
  },
}
