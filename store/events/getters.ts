import { GetterTree } from 'vuex'
import { RootState } from '../types'
import { Event, EventsState } from './types'

export const getters: GetterTree<EventsState, RootState> = {
  getEvents(state): Event[] {
    const { events } = state
    return events
  },
}
