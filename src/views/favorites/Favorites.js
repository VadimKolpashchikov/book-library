import { CardList } from '../../components/cardList/CardList.js';
import { Header } from '../../components/header/Header.js';
import { AbstractView } from '../../core/AbstractView.js';
import onChange from 'on-change';

export default class Favorites extends AbstractView {
  appState = {};

  constructor(appState) {
    super();
    this.appState = appState;
    this.appState = onChange(this.appState, this.appStateHook.bind(this));
    this.setTitle('Мои Книги');
  }

  destroy() {
    onChange.unsubscribe(this.appState);
  }

  appStateHook(path) {
    if (path === 'favorites') {
      this.$rerender();
    }
  }

  render() {
    const main = document.createElement('div');
    main.classList.add('favorites');

    main.innerHTML = /*html*/ `
				<div class="container">
          <div class="row">
						<h1>Избранные книги (${this.appState.favorites.length} шт.)</h1>
					</div>
        </div>
      `;

    this.$app.innerHTML = '';

    main.append(
      new CardList(this.appState, { list: this.appState.favorites }).render(),
    );
    this.renderHeader();
    this.$app.append(main);
  }

  renderHeader() {
    const header = new Header(this.appState).render();
    this.$app.prepend(header);
  }
}
