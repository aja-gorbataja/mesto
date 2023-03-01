
export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = containerSelector;
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItem(items) {
    items.forEach(element => {
      this._renderer(element);
    })
  }
}