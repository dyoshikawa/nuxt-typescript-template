import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from '~/store/types'
import { events } from '~/store/events/index'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  modules: {
    events,
  },
  state: {
    version: '1.0.0', // a simple property
  },
}

const createStore = () => {
  return new Vuex.Store<RootState>(store)
}

export default createStore
