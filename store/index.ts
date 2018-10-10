import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { authUser } from '~/store/authUser'

export interface RootState {
  version: string
}

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  modules: {
    authUser,
  },
  state: {
    version: '1.0.0', // a simple property
  },
}

const createStore = () => {
  return new Vuex.Store<RootState>(store)
}

export default createStore
