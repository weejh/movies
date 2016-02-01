// import { inject, Aurelia } from 'aurelia-framework';

// First, we must inject the Aurelia object. This is the same Aurelia object
// passed into our configure function on main.js.
// @inject(Aurelia)
export class Logout {

  logout() {
    // console.log('logout');
    // console.log('start in logout  ' + this.isAuthenticated );

    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
    localStorage.clear()
    this.isAuthenticated = false;
    this.username = 'Lim KoPi'
    window.location.reload(true)
  }


}
