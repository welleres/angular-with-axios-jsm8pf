import { Injectable } from '@angular/core';
import getUrl from '../app.utils';
import httpClient from '../infrastructure/http-client';

@Injectable()
export class UserRepository {
  async random() {
    const url = getUrl('/api');
    const resp = await fetch(url);
    const data = await resp.json();
    const {
      results: [user],
    } = data;
    return user;
  }
}
