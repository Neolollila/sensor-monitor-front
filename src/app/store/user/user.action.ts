import { createAction, props } from '@ngrx/store';
import { JwtResponse, UserCred, UserInfo, Users, UserSignIn } from '../../models/user.model';

export const BEGIN_REGISTER='[AUTH] begin register'
export const BEGIN_LOGIN='[AUTH] begin login'
export const BEGIN_LOGOUT='[AUTH] begin logout'
export const LOGIN_SUCCESS='[AUTH] success login'
export const LOGOUT_SUCCESS='[AUTH] success logout'
export const GET_USERS='[USER] get users'
export const GET_USER_SUCCESS='[USER] get users success'
export const GET_USER_BY_ID='[USER] get user by id'
export const GET_USER_BY_ID_SUCCESS='[USER] get user by id success'




export const beginRegister=createAction(BEGIN_REGISTER,props<{userData:UserSignIn}>())
export const beginLogin=createAction(BEGIN_LOGIN,props<{userCred: UserCred}>())
export const beginLogout=createAction(BEGIN_LOGOUT)
export const loginSuccess=createAction(LOGIN_SUCCESS,props<{jwtResponse: JwtResponse}>())
export const logoutSuccess=createAction(LOGOUT_SUCCESS)
export const getUsers=createAction(GET_USERS)
export const getUsersSuccess=createAction(GET_USER_SUCCESS,props<{userList:Users[]}>())
export const getUserById=createAction(GET_USER_BY_ID,props<{username:string}>())
export const getUserByIdSuccess=createAction(GET_USER_BY_ID_SUCCESS,props<{userInfo:UserInfo}>())
