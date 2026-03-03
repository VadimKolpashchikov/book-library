export class AbstractView {
  constructor() {
    this.$app = document.getElementById('root');
    this.$rerender = this.#rerender();
  }

  setTitle(title) {
    document.title = title;
  }

  render() {
    return;
  }

  destroy() {
    return;
  }

  #rerender() {
    let timeoutId;
    return function () {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        this.render.call(this);
      }, 0);
    };
  }
}
