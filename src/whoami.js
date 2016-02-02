// import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {Router} from 'aurelia-router';
import { inject, Aurelia } from 'aurelia-framework';


// @inject(Router)
// @inject(Aurelia)
export class Whoami {

lock = new Auth0Lock('NGW5BkUSyZSeAoPy0yC8RJMapLG4aXVT', 'weejh.auth0.com');

  activate() {
    console.log('test login activate');
    window.localStorage.clear();
    if (window.localStorage.getItem('profile')) {
        console.log('got user');
        this.username = JSON.parse(window.localStorage.getItem('profile')).nickname
        this.isAuthenticated = true;


      } else {
        console.log('no user');
        this.username = 'Lim KoPi'
        this.isAuthenticated = false;

      }
  }

  canActivate() {
    console.log('canActivate test login');
  }

  // window.localStorage.clear();

  // if (window.localStorage.getItem('profile')) {
  //     console.log('got user');
  //     this.username = JSON.parse(window.localStorage.getItem('profile')).nickname
  //     this.isAuthenticated = true;
  //
  //
  //   } else {
  //     console.log('no user');
  //     this.username = 'Lim KoPi'
  //     this.isAuthenticated = false;
  //
  //   }
  // lock = new Auth0Lock('NGW5BkUSyZSeAoPy0yC8RJMapLG4aXVT', 'weejh.auth0.com');

  login() {
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


    logout() {
      // console.log('logout');
      // console.log('start in logout  ' + this.isAuthenticated );

      localStorage.removeItem('profile');
      localStorage.removeItem('id_token');
      localStorage.clear()
      this.isAuthenticated = false;
      this.username = 'Lim KoPi'
    }


}
