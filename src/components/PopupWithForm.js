import { Popup } from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popup, {formSubmit}) {
    super(popup);
    this._formSubmit = formSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
  }
  
  setLoadingText(text) {
    this._popup.querySelector('.popup__button').textContent = text;
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    })
    return this._formValues;
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }

  setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._formSubmit(this._getInputValues());
    });
    super.setEventListeners();
  }

  closePopup() {
    super.closePopup()
    this._form.reset();
  }
 }