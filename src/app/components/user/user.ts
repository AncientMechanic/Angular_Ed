import { Component, Input } from '@angular/core';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  @Input() users: UserModel[] | undefined;
  @Input() user: UserModel | undefined;
}
