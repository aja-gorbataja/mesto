import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._imgFull = this._popup.querySelector('.img__full');
    this._imgTitle = this._popup.querySelector('.img__title');
  }

  openPopup(name, link) {
    super.openPopup();
    this._imgFull.src = link;
    this._imgFull.alt = name;
    this._imgTitle.textContent = name;
  }
}