import { Component } from '@angular/core';

import { UserRepository } from './repository/user';

interface User {
  name: { first: string; last: string };
  picture: { large: string };
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user: User | null = null;

  constructor(private userRepo: UserRepository) {}

  ngOnInit() {
    this.fetchUser();
  }

  async changeUser() {
    this.fetchUser();
  }

  private async fetchUser() {
    this.user = await this.userRepo.random();
  }
}
