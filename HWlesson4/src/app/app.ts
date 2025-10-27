import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from './componentas/User';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  userList: User[] = [];

  userName: string = '';
  age: number | null = null;
  email: string = '';
  agreedToTerms: boolean = false;

  submit(): void {
    if (this.userName && this.age && this.email && this.agreedToTerms) {
      const newUser = new User(this.userName, this.age, this.email, this.agreedToTerms);
      this.userList.push(newUser);
      console.log(this.userList);

      // איפוס טופס
      this.userName = '';
      this.age = null;
      this.email = '';
      this.agreedToTerms = false;
    }
  }
}
