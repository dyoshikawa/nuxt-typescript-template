import { Module } from 'vuex'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'
import { EventsState } from './types'
import { RootState } from '../types'

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
