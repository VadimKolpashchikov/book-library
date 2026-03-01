import { DivComponent } from '../../core/DivComponent';
import './loader.css';

export class Loader extends DivComponent {
  render() {
    this.el.classList.add('loader');

    this.el.innerHTML = /*html*/ `
      <div class="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    `;

    return this.el;
  }
}
