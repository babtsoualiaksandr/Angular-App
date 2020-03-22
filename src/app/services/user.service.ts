import { Injectable } from '@angular/core';
import { IUser } from '../store/models/iuser';
import { of, Observable } from 'rxjs';

const users: IUser[] = [
  {
    id: 1,
    name: 'Sasha',
    cardNumber: '12332',
    cardType: 'dasda',
  },
  {
    id: 2,
    name: 'Masha',
    cardNumber: '12332',
    cardType: 'dasda',
  },
];

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  public getUsers(): Observable<IUser[]> {
    return of(users);
  }
}
