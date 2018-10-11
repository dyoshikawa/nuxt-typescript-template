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
