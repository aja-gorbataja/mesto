import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, {formSubmit}) {
    super(popupSelector);
    this._formSubmit = formSubmit;
    this._form = this._popupSelector.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
  }
  
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    })
    return this._formValues;
  }

  setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._formSubmit(this._getInputValues());
      this.closePopup();
    });
    super.setEventListeners();
  }

  closePopup() {
    super.closePopup()
    this._form.reset();
  }
 }