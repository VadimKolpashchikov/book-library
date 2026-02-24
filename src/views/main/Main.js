import { AbstractView } from '../../core/AbstractView.js';
import onChange from 'on-change';

export default class Main extends AbstractView {
  state = {
    list: [],
    loading: false,
    searchQuery: undefined,
    offset: 0,
  };

  constructor(appState) {
    super();
    this.appState = onChange(appState, this.appStateHook.bind(this));
    this.setTitle('Поиск Книг');
  }

  appStateHook(path) {
    if (path === 'favorites') {
      this.render();
    }
  }

  render() {
    const main = document.createElement('div');
    main.innerText = `Число книг ${this.appState.favorites.length}`;
    this.$app.innerHTML = '';
    this.$app.append(main);
  }
}
