
export class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    this._closeButton = this._popupSelector.querySelector('.popup-close');
  }

  openPopup() {
    this._popupSelector.classList.add('popup_open');
    document.addEventListener('keydown', this._handleEscClose);
    this.setEventListeners();
  }

  closePopup() {
    this._popupSelector.classList.remove('popup_open');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.closePopup();
    }
  }

  setEventListeners() {
    this._closeButton.addEventListener('click', () => {
      this.closePopup()
    });

    this._popupSelector.addEventListener('click', (evt) => {
      if (evt.currentTarget === evt.target) {
        this.closePopup();
      }
    })
  }
}