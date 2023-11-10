import { createReducer, on } from '@ngrx/store';
import { UserAdapter, UserState } from './user.state';
import {
  getUserByIdSuccess, getUsersSuccess, loginSuccess, logoutSuccess
} from './user.action';

const _userReducer = createReducer(UserState,
  on(logoutSuccess, (state, action) => {
    return { ...UserState }
  }),
  on(loginSuccess, (state, action) => {
    return { ...state }
  }),
  on(getUsersSuccess, (state, action) => {
    return UserAdapter.setAll(action.userList, state)
  }),
  on(getUserByIdSuccess, (state, action) => {
    return { ...state, userInfo: action.userInfo }
  })
)

export function UserReducer(state: any, action: any) {
  return _userReducer(state, action);
}
