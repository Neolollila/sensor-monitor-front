import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserModel } from '../../models/user.model';
import { UserAdapter } from './user.state';

const getUserState = createFeatureSelector<UserModel>('user');

const userSelector = UserAdapter.getSelectors();

export const getUserList = createSelector(getUserState, userSelector.selectAll)

export const getUserById = createSelector(getUserState, (state) => {
  return state.userInfo
});
