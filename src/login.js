import { inject, Aurelia } from 'aurelia-framework';

// First, we must inject the Aurelia object. This is the same Aurelia object
// passed into our configure function on main.js.
@inject(Aurelia)
export class Login {

  lock = new Auth0Lock('NGW5BkUSyZSeAoPy0yC8RJMapLG4aXVT', 'weejh.auth0.com');

  constructor(aurelia) {

    // Once we have access to the Aurelia object, we can use it from
    // within our login function to set the new root view model to
    // our main App on succesful login.
    // console.log('login.js');

    window.localStorage.clear();
    window.sessionStorage.clear()

    this.login = () => {
      this.lock.show((err, profile, token) => {

        if(err) {
          console.log(err);
        }
        else {
          localStorage.setItem('profile', JSON.stringify(profile));
          localStorage.setItem('id_token', token);
          aurelia.setRoot('app');
        }
      });
    }
  }

  activate() {
    setInterval(this.upDate = () => {
      this.daTe = new Date()
    }, 500)
  }
}
