import { Module } from 'vuex'
import { RootState } from '../types'
import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'
import { EventsState } from './types'

export const state: EventsState = {
  events: [],
}

const namespaced: boolean = true

export const events: Module<EventsState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
}
