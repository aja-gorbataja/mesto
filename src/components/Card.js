
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
    this._cardImage = this._element.querySelector('.elements__item-img');
    this._cardTitle = this._element.querySelector('.elements__item-name');
    this._cardLike = this._element.querySelector('.elements__item-like');
    this._cardRemove = this._element.querySelector('.elements__item-trash');

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;

    this._setEventListeners();
    return this._element;
  }

  _handleLike() {
    this._cardLike.classList.toggle('elements__item-like_on');
  }

  _handleTrash() {
    this._element.remove();
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => {
      this._handleOpenPopup(this._name, this._link);
    });

    this._cardLike.addEventListener('click', () => {
      this._handleLike();
    });

    this._cardRemove.addEventListener('click', () => {
      this._handleTrash();
    });
  }
}