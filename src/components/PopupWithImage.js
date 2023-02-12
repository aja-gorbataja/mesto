import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imgFull = document.querySelector('.img__full');
    this._imgTitle = document.querySelector('.img__title');
  }

  openPopup(name, link) {
    super.openPopup();
    this._imgFull.src = link;
    this._imgFull.alt = name;
    this._imgTitle.textContent = name;
  }
}