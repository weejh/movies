//import {computedFrom} from 'aurelia-framework';
import {loginStat} from 'login-status'
export class Home {
  heading = 'Home';

  //Getters can't be directly observed, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below
  //as well as the corresponding import above.

  activate() {
    // console.log('welcome =>  ' + loginStat());
    this.isAuthenticated = loginStat()
    console.log(JSON.parse(window.localStorage.getItem('profile')).picture);
    if (loginStat()) this.username = JSON.parse(window.localStorage.getItem('profile')).nickname
    loginStat() ? this.username = JSON.parse(window.localStorage.getItem('profile')).nickname
      : this.username = 'Lim KoPi'
    this.time = new Date(JSON.parse(window.localStorage.getItem('profile')).updated_at)
    this.picture = JSON.parse(window.localStorage.getItem('profile')).picture
  }

}
export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}
