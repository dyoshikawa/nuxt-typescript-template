import { AxiosResponse } from 'axios'
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import { AuthState, AuthUser, AuthUserState } from '~/store/types/authUser'
import { RootState } from './index'

export const state: AuthUserState = {
  authUser: {
    avatarUrl: '',
    jwt: '',
    name: '',
  },
  isLogin: AuthState.IsLoading,
}

const namespaced: boolean = true

const getters: GetterTree<AuthUserState, RootState> = {
  getAuthUser(state: AuthUserState): AuthUser {
    const { authUser } = state
    return authUser
  },
}

const actions: ActionTree<AuthUserState, RootState> = {
  async fetchAuthUser({ commit }): Promise<void> {
    const { data }: AxiosResponse<any> = await this.$axios.get('/authUser')
    const payload: AuthUser = {
      avatarUrl: data.photoURL,
      jwt: data.qa,
      name: data.name,
    }

    commit('setAuthUser', payload)
  },
}

const mutations: MutationTree<AuthUserState> = {
  setAuthUser(state: AuthUserState, payload: AuthUser) {
    state.authUser = payload
  },
  setIsLogin(state: AuthUserState, payload: AuthState) {
    state.isLogin = payload
  },
}

export const authUser: Module<AuthUserState, RootState> = {
  actions,
  getters,
  mutations,
  namespaced,
  state,
}
