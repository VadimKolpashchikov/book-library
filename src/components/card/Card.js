import { DivComponent } from '../../core/DivComponent';
import './card.css';

export class Card extends DivComponent {
  constructor(appState, state) {
    super();
    this.appState = appState;
    this.state = state;
  }

  findInFavorites() {
    return this.appState.favorites.find(({ key }) => key === this.state.key);
  }

  getImageSrc() {
    if (this.state.cover_edition_key) {
      return `https://covers.openlibrary.org/b/olid/${this.state.cover_edition_key}-M.jpg`;
    }

    return '/static/imgs/no-image.png';
  }

  render() {
    this.el.classList.add('card');

    const isExistInFavorites = !!this.findInFavorites();

    this.el.innerHTML = /*html*/ `
				<div class="card__image">
					<img
						loading="lazy"
						crossorigin="anonymous"
						src="${this.getImageSrc()}" 
						alt="${this.state.title}"
					/>
				</div>
				<div class="card__info">
					<div class="card__tag">
						${this.state.ia_collection?.[0] ?? 'Not Found'}
					</div>

					<div class="card__name">
						${this.state.title}
					</div>

					<div class="card__author">
						${this.state.author_name?.[0] ?? 'Not Found'}
					</div>

					<div class="card__footer">
						<button
							type="button"
							class="card__button-add ${isExistInFavorites ? 'card__button-add_active' : ''}"
						>
							<img 
								src="/static/imgs/${isExistInFavorites ? 'favorites.svg' : 'favorites-white.svg'}" 
								alt="favorites"
							>
						</button>
					</div>
				</div>
			`;

    this.el.querySelector('img').addEventListener(
      'error',
      function () {
        this.src = '/static/imgs/no-image.png';
      },
      { once: true },
    );

    return this.el;
  }
}
