import { AbstractView } from '../../core/AbstractView.js';

export default class Main extends AbstractView {
  constructor() {
    super();
    this.setTitle('Поиск Книг');
  }

  render() {
    const main = document.createElement('div');
    main.innerText = 'Main Text';
    this.$app.innerHTML = '';
    this.$app.append(main);
  }
}
