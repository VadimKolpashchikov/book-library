import { DivComponent } from '../../core/DivComponent';
import './search.css';

export class Search extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
  }

  render() {
    this.el.classList.add('search');

    this.el.innerHTML = /*html*/ `
      <div class="container">
        <div class="row">
          <div class="search__wrapper">
            <input
              class="search__input"
              type="text"
              value="${this.state.searchQuery ?? ''}"
              placeholder="Найти книгу или автора...."
            />
						<img src="/static/imgs/search.svg" alt="search" />
          </div>

					<button
						class="search__button"
						type="button"
						aria-label="Искать книги"
					>
						<img 
							src="/static/imgs/search-white.svg"
							alt="search"
							
						/>
					</button>
        </div>  
      </div>
		`;

    return this.el;
  }
}
