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

    let template = /*html*/ `
      <h1>Найдено книг - ${this.state.numFound}</h1>
    `;

    if (this.state.list) {
      const list = document.createElement('div');
      list.classList.add('card-list__list');

      for (const card of this.state.list) {
        list.append(new Card(this.appState, card).render());
      }

      template += list.outerHTML;
    }

    this.el.innerHTML = /*html*/ `
        <div class="container">
          <div class="row">
            ${this.state.loading ? new Loader().render().outerHTML : template}
          </div>
        </div>
      `;

    return this.el;
  }
}
