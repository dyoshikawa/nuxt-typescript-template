import vue from 'vue'
import vuex, { StoreOptions } from 'vuex'
import { events } from '~/store/events/index'
import { RootState } from '~/store/types'

vue.use(vuex)

const store: StoreOptions<RootState> = {
  modules: {
    events,
  },
  state: {
    version: '1.0.0', // a simple property
  },
}

const createStore = () => {
  return new vuex.Store<RootState>(store)
}

export default createStore
