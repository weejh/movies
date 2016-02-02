import {loginStat} from 'login-status'


export class App {
  configureRouter(config, router) {
    // config.addPipelineStep('authorize', AuthorizeStep);
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'],
        name: 'welcome',
        moduleId: 'welcome',
        nav: true,
        title: 'Welcome' },
      { route: 'users',
        name: 'users',
        moduleId: 'users',
        auth: true,
        nav: true,
        title: 'Github Users' },
      { route: 'child-router',
        name: 'child-router',
        moduleId: 'child-router',
        nav: true,
        auth: true,
        title: 'Child Router' },
      // { route: 'whoami',
      //   name: 'whoami',
      //   moduleId: 'whoami',
      //   nav: true,
      //   title: 'whoami' },
      { route: 'logout',
        name: 'logout',
        moduleId: 'logout',
        nav: true,
        title: 'logout' },
      { route: 'popular-movies',
        name: 'popular-movies',
        moduleId: 'popular-movies',
        nav: true,
        title: 'Popular Movies'},
      { route: 'watchlist',
        name: 'watchlist',
        moduleId: 'watchlist',
        nav: true,
        title: 'Watchlist'}
    ]);
    this.router = router;
  }

}
//
// class AuthorizeStep {
//   run(navigationInstruction, next) {
//     // Check if the route has an "auth" key
//     // The reason for using `getAllInstructions()` is because
//     // this includes child routes.
//     // console.log('in AuthorizeStep');
//
//     // console.log(navigationInstruction.getAllInstructions());
//     // navigationInstruction.getAllInstructions().some(e => {
//     //   e.config.auth
//     //   console.log('in navigationInstruction =>  ', e.config.auth);
//     // })
//     console.log(window.location);
//     if (navigationInstruction.getAllInstructions().some(i => i.config.auth)) {
//       console.log('in navigationInstruction AuthorizeStep');
//       console.log('status => ' + loginStat());
//
//       // window.location = window.location.protocol + '//' + window.location.hostname + 'whoami'
//       // console.log(window.location);
// // console.log(window.location);
// //       console.log('window location => ' + window.location.origin +'/'+'whoami');
//       const logInpage = window.location.origin + '/#/' + 'whoami'
//       console.log(logInpage);
//       if (!loginStat()) return next.cancel(new Redirect(logInpage))
//
//
//       // var isLoggedIn = false;
//       // if (!isLoggedIn) {
//       //   console.log('required login');
//       //   return next.cancel(new Redirect('whoami'));
//       // }
//     }
//     return next();
//   }
// }
