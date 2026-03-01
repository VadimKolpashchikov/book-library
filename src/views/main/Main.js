import { CardList } from '../../components/cardList/CardList.js';
import { Header } from '../../components/header/Header.js';
import { Search } from '../../components/search/Search.js';
import { AbstractView } from '../../core/AbstractView.js';
import onChange from 'on-change';

export default class Main extends AbstractView {
  state = {
    list: [],
    numFound: 0,
    loading: false,
    searchQuery: undefined,
    offset: 0,
  };

  appState = {};

  constructor(appState) {
    super();
    this.appState = appState;
    this.appState = onChange(this.appState, this.appStateHook.bind(this));
    this.state = onChange(this.state, this.stateHook.bind(this));
    this.setTitle('Поиск Книг');
  }

  appStateHook(path) {
    if (path === 'favorites') {
      this.$rerender();
    }
  }

  async stateHook(path) {
    if (path === 'loading') {
      this.$rerender();
    }

    if (path === 'list') {
      this.$rerender();
    }

    if (path === 'searchQuery') {
      const { searchQuery, offset } = this.state;

      this.state.loading = true;
      const data = await this.loadList(searchQuery, offset);
      this.state.loading = false;

      this.state.list = data.docs;
      this.state.numFound = data.numFound ?? 0;
    }
  }

  async loadList(q, offset = 0) {
    const result = await fetch(
      `https://openlibrary.org/search.json?q=${q}&offset=${offset}`,
    );

    return result.json();
  }

  render() {
    const main = document.createElement('div');
    main.classList.add('main');
    this.$app.innerHTML = '';

    main.append(new Search(this.state).render());
    main.append(new CardList(this.appState, this.state).render());
    this.renderHeader();
    this.$app.append(main);
  }

  renderHeader() {
    const header = new Header(this.appState).render();
    this.$app.prepend(header);
  }
}
