import { DivComponent } from '../../core/DivComponent';
import { Card } from '../card/Card';
import { Loader } from '../loader/Loader';
import './card-list.css';

export class CardList extends DivComponent {
  constructor(appState, state) {
    super();
    this.appState = appState;
    this.state = state;
  }

  render() {
    this.el.classList.add('card-list');

    this.el.innerHTML = /*html*/ `
        <div class="container">
          <div class="row"></div>
        </div>
      `;

    const row = this.el.querySelector('.row');

    if (this.state.loading) {
      row.append(new Loader().render());
    } else {
      row.innerHTML = /*html*/ `
        <h1>Найдено книг - ${this.state.numFound}</h1>
      `;

      if (this.state.list) {
        const list = document.createElement('div');
        list.classList.add('card-list__list');

        for (const card of this.state.list) {
          list.append(new Card(this.appState, card).render());
        }

        row.append(list);
      }
    }

    return this.el;
  }
}
