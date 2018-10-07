import { GetterTree } from 'vuex'
import { EventsState, Event } from './types'
import { RootState } from '../types'

export const getters: GetterTree<EventsState, RootState> = {
  getEvents(state): Event[] {
    const { events } = state
    return events
  },
}
