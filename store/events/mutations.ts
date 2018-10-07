import { MutationTree } from 'vuex'
import { EventsState, Event } from './types'

export const mutations: MutationTree<EventsState> = {
  setEvents(state, payload: Event[]) {
    state.events = payload
  },
}
