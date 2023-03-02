
export default class Card {
  constructor(data, templateSelector, handleOpenPopup, handleDeleteClick, likeCard, userId) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._cardId = data._id;
    this._ownerId = data.owner._id;
    this._userId = userId;
    this._likes = data.likes;
    this._templateSelector = templateSelector;
    this._handleOpenPopup = handleOpenPopup;
    this._handleDeleteClick = handleDeleteClick;
    this._likeCard = likeCard;
    this._like = false;
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.elements__item-img');
    this._cardTitle = this._element.querySelector('.elements__item-name');
    this._cardLike = this._element.querySelector('.elements__item-like');
    this._cardRemove = this._element.querySelector('.elements__item-trash');
    this._likesNumber = this._element.querySelector('.elements__item-numbers');
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
    this._setEventListeners();

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;
    this._likesNumber.textContent = this._likes.length;
    
    if (this._userId !== this._ownerId) {
      this._cardRemove.remove()
    }
    
    if (this._cardId.like) {
      this._cardLike.classList.add('elements__item-like_on')
      } else {
        this._cardLike.classList.remove('elements__item-like_on')
    }

    return this._element;
  }
  
  _setEventListeners() {
    this._cardImage.addEventListener('click', () => {
      this._handleOpenPopup(this._name, this._link);
    });

    this._cardLike.addEventListener('click', () => {
      this._likeCard(this);
    });

    this._cardRemove.addEventListener('click', () => {
      this._handleDeleteClick(this);
    });

  }

  get like() {
    return this._like;
  }

  toggleLike() {
    this._like = !this._like;
  }


  countLikes(newLike) {
    this._likes = newLike;
    this._likesNumber.textContent = this._likes.length;
  }

  handleLike() {
    this._cardLike.classList.toggle('elements__item-like_on');
  }

  handleTrash() {
    this._element.remove();
    this._element = null;
  }
}