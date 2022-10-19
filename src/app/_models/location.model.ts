import { User } from './user.model';

interface ILocation {
  id: string;
  position: {
    lat: number;
    lng: number;
  };
  submittedBy: User;
  facilities: string[];
  recommendedBy: User[];
  description?: string;
  // rating: number;
  imageUrl: string;
}

export class Location implements ILocation {
  constructor(
    public id: string,
    public position: { lat: number; lng: number },
    public submittedBy: User,
    public facilities: string[],
    public recommendedBy: User[],
    public imageUrl: string,
    public description = ''
  ) {}
}
