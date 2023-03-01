import { Popup } from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popup, {formSubmit}) {
    super(popup);
    this._formSubmit = formSubmit;
    this._buttonConfirm = this._popup.querySelector('.popup__button');
  }

  setLoadingText(text) {
    this._buttonConfirm.textContent = text;
  }

  setEventListeners() {
    super.setEventListeners();
    this._buttonConfirm.addEventListener('click', () => {
      this._formSubmit(this._card);
      this.closePopup()
    })
  }

  handleCard(card) {
    this._card = card;
  }
}