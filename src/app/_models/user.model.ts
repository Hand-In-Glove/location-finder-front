import { Location } from './location.model';

type UserRole = 'user' | 'admin';

export interface IUser {
  id: string;
  firstName?: string;
  lastName?: string;
  userName: string;
  email: string;
  submittedLocations: Location[];
  savedLocations: Location[];
  role: UserRole;
}

export class User implements IUser {
  constructor(
    public email: string,
    public id: string,
    public userName: string,
    public role: UserRole,
    public savedLocations: Location[],
    public submittedLocations: Location[],
    public firstName?: string,
    public lastName?: string
  ) {}
}
