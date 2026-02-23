import Main from './views/main/Main.js';

class App {
  routes = [{ path: '/', component: Main }];

  constructor() {
    this.route = this.route.bind(this);
    window.addEventListener('hashchange', this.route);
    this.route();
  }

  route() {
    if (this.currentView) {
      this.currentView.destroy();
    }

    let view = this.routes.find(({ path }) => path === location.hash);

    if (!view) {
      view = this.routes[0];
    }

    this.currentView = new view.component();
    this.currentView.render();
  }
}

new App();
