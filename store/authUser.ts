import { AxiosResponse } from 'axios'
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import { RootState } from './index'

export interface AuthUser {
  name: string
  avatarUrl: string
  jwt: string
}

export enum AuthState {
  IsLoading,
  IsLogin,
  IsNotLogin,
}

export interface AuthUserState {
  authUser: AuthUser
  isLogin: AuthState
}

export const state: AuthUserState = {
  authUser: {
    avatarUrl: '',
    jwt: '',
    name: '',
  },
  isLogin: AuthState.IsLoading,
}

const namespaced: boolean = true

export const authUser: Module<AuthUserState, RootState> = {
  namespaced,
  state,
}

export const getters: GetterTree<AuthUserState, RootState> = {
  getAuthUser(state: AuthUserState): AuthUser {
    const { authUser } = state
    return authUser
  },
}

export const actions: ActionTree<AuthUserState, RootState> = {
  async fetchEvents({ commit }): Promise<void> {
    const { data }: AxiosResponse<any> = await this.$axios.get()
    const payload: AuthUser = data.map((d: any) => {
      return {
        avatarUrl: d.photoURL,
        jwt: d.qa,
        name: d.name,
      }
    })

    commit('setAuthUser', payload)
  },
}

export const mutations: MutationTree<AuthUserState> = {
  setAuthUser(state: AuthUserState, payload: AuthUser) {
    state.authUser = payload
  },
  setIsLogin(state: AuthUserState, payload: AuthState) {
    state.isLogin = payload
  },
}
