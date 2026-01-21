import { Injectable } from '@angular/core';
import { StoreConfig, EntityState, EntityStore } from '@datorama/akita';

export interface UserState extends EntityState<any> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'user' })
export class UserStore extends EntityStore<UserState> {
  constructor() {
    super();
  }
}
