import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faker } from '@faker-js/faker';
import { User } from './components/user/user';
import { UserModel } from './models/user.model';
import { UserService } from './services/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, User, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('angular-sadaev-edu');
  users: UserModel[] | undefined;
  count: number = 5;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers(this.count);
  }

  handleClick(): void {
    this.users = this.userService.getUsers(this.count);
  }
}
