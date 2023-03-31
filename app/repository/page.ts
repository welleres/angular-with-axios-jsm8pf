import { Injectable } from '@angular/core';
import getUrl from '../app.utils';
import httpClient from '../infrastructure/http-client';

@Injectable()
export class PageRepository {
  async header() {
    const url = getUrl('/header-page');
    return {};
  }

  async footer() {
    const url = getUrl('/footer-page');
    return {};
  }
}
