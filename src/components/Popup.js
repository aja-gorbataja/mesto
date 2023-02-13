
export class Popup {
  constructor(popup) {
    this._popup = document.querySelector(popup);
    this._closeButton = this._popup.querySelector('.popup-close');
  }

  openPopup() {
    this._popup.classList.add('popup_open');
    document.addEventListener('keydown', this._handleEscClose);
  }

  closePopup() {
    this._popup.classList.remove('popup_open');
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

    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.currentTarget === evt.target) {
        this.closePopup();
      }
    })
  }
}