import { Component } from '@angular/core';
import { Auth, GoogleAuthProvider, User, signInWithPopup, signOut, user } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  private authProvider = new GoogleAuthProvider();
  // user$: Observable<User | null> = user(this.auth);

  constructor(
    private auth: Auth
  ) {}

  login() {
    signInWithPopup(this.auth, this.authProvider)
    .then((result) => {
      const  credential = GoogleAuthProvider.credentialFromResult(result);
      return  credential;
    });
  }

  logout() {
    signOut(this.auth)
    .then(() => {

    });
  }
}
