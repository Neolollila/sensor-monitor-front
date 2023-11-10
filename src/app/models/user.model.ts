import { EntityState } from '@ngrx/entity';

export interface Users {
  username: string,
  password: string,
  email: string,
  role: string[],
  status:boolean
}

export interface UserCred{
  username: string,
  password: string
}

export interface UserInfo{
  id:number,
  username:string,
  email:string,
  role:string[],
  status: boolean
}

export interface JwtResponse {
  token: string;
  type: string;
  username: string;
  authorities: string[];
}

export interface UserSignIn {
  username: string;
  email: string;
  role: string[];
  password: string;
}

export enum RoleEnum {
  VIEWER = 'VIEWER',
  ADMINISTRATOR = 'ADMINISTRATOR'
}

export interface UserModel extends EntityState<Users>{
  isDuplicate: boolean,
  roles: string[],
  userInfo: UserInfo
}
