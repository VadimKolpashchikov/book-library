import { DivComponent } from '../../core/DivComponent';
import './header.css';

export class Header extends DivComponent {
  constructor(appState) {
    super();
    this.appState = appState;
  }

  render() {
    this.el.innerHTML = '';
    this.el.classList.add('header');

    this.el.innerHTML = /*html*/ `
      <div class="container">
        <div class="row">
          <div class="logo">
            <img src="/static/imgs/logo.svg" alt="logo">
          </div>

          <div class="menu">
              <a class="menu__item" href="#">
                <img src="/static/imgs/search.svg" alt="search">
                Поиск книг
              </a>
              <a class="menu__item" href="#favorites">
                <img src="/static/imgs/favorites.svg" alt="favorites">
                Избранное
                <div class="menu__counter">${this.appState.favorites.length}</div>
              </a>
            </div>
        </div>  
      </div>
		`;

    return this.el;
  }
}
