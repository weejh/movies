import { inject, Aurelia } from 'aurelia-framework';

// First, we must inject the Aurelia object. This is the same Aurelia object
// passed into our configure function on main.js.
@inject(Aurelia)
export class Login {

  // username = '';
  // password = '';
  // error = '';
  lock = new Auth0Lock('NGW5BkUSyZSeAoPy0yC8RJMapLG4aXVT', 'weejh.auth0.com');

  constructor(aurelia) {

    // Once we have access to the Aurelia object, we can use it from
    // within our login function to set the new root view model to
    // our main App on succesful login.
    console.log('login.js');

    window.localStorage.clear();

    this.login = () => {
      if (window.localStorage.getItem('profile')) {
        console.log('got user');
        aurelia.setRoot('app');
      } else {
        console.log('no user');
        this.loginAuth0()
        this.error = 'Please enter a username and password.';
        aurelia.setRoot('app');
      }
    }
  }


    loginAuth0() {
        console.log('test login');

        this.lock.show((err, profile, token) => {
          if(err) {
            console.log(err);
          }
          else {
            // console.log('login');
            // console.log('start in login ' + this.isAuthenticated );
            localStorage.setItem('profile', JSON.stringify(profile));
            localStorage.setItem('id_token', token);
          // console.log(JSON.parse(window.localStorage.getItem('profile')).nickname)
            this.username = JSON.parse(window.localStorage.getItem('profile')).nickname
            this.isAuthenticated = true;
          }
        });

      }
}
