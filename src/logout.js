export class Logout {

  logout() {
    // console.log('logout');
    // console.log('start in logout  ' + this.isAuthenticated );

    localStorage.removeItem('profile')
    localStorage.removeItem('id_token')
    localStorage.clear()
    window.location.reload(true)
  }


}
