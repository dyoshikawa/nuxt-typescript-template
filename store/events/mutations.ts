import { MutationTree } from 'vuex'
import { Event, EventsState } from './types'

export const mutations: MutationTree<EventsState> = {
  setEvents(state, payload: Event[]) {
    state.events = payload
  },
}
