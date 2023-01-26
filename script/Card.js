
export class Card {
  constructor(data, templateSelector, handleOpenPopup) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleOpenPopup = handleOpenPopup;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.elements__item')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
  
    this._element.querySelector('.elements__item-img').src = this._link;
    this._element.querySelector('.elements__item-img').alt = this._name;
    this._element.querySelector('.elements__item-name').textContent = this._name;

    return this._element;
  }

  _handleLike() {
    this._element.querySelector('.elements__item-like').classList.toggle('elements__item-like_on');
  }

  _handleTrash() {
    this._element.remove();
  }

  _setEventListeners() {
    this._element.querySelector('.elements__item-img').addEventListener('click', () => {
      this._handleOpenPopup(this._name, this._link);
    });

    this._element.querySelector('.elements__item-like').addEventListener('click', () => {
      this._handleLike();
    });

    this._element.querySelector('.elements__item-trash').addEventListener('click', () => {
      this._handleTrash();
    });
  }
}