export class App {
  configureRouter(config, router) {
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
        nav: true,
        title: 'Github Users' },
      { route: 'child-router',
        name: 'child-router',
        moduleId: 'child-router',
        nav: true,
        title: 'Child Router' },
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
