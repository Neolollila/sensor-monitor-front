import { UserModel, Users } from '../../models/user.model';
import { createEntityAdapter } from "@ngrx/entity";

export const UserAdapter = createEntityAdapter<Users>();

export const UserState: UserModel = UserAdapter.getInitialState({
  isDuplicate: false,
  roles:[],
  userInfo:{
    id:0,
    username: '',
    email: '',
    role: [],
    status: false
  }
});
