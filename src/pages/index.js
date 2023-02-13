
import './index.css';
import { elementsArray, validationConfig } from '../utils/data.js';
import { Card } from '../components/Card.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import Section  from '../components/Section.js';
import { FormValidation } from '../components/FormValidation.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import UserInfo  from '../components/UserInfo.js';

const inputName = document.querySelector('.form__input-name');
const inputDescription = document.querySelector('.form__input-description');
const buttonEditOpen = document.querySelector('.profile__info-edit');
const buttonAddOpen = document.querySelector('.profile__add');


const cardList = new Section({
  data: elementsArray,
  renderer: (item) => {
    const newCard = createCard(item);
    cardList.addItem(newCard);
  }
}, '.elements');

const userEdit = new UserInfo({name: '.profile__info-name', info: '.profile__info-description'});

const popupImage = new PopupWithImage('.popup_img');

const popupEdit = new PopupWithForm('.popup_edit', {
  formSubmit: (data) => {
    userEdit.setUserInfo(data);
  }});

const popupAdd = new PopupWithForm('.popup_add', {
  formSubmit: (item) => {
    addCard(item);
  }
});

function handleOpenPopup (name, link) {
  popupImage.openPopup(name, link)
} 

function createCard(item) {
  const card = new Card(item, '.item', handleOpenPopup);
  const cardElement = card.generateCard();
  return cardElement;
}

 function addCard(item) {
  const newCard = createCard(item);
  cardList.addItem(newCard);
}

buttonEditOpen.addEventListener('click', () => {
  popupEdit.setInputValues(userEdit.getUserInfo());
  formValidators['form-edit'].deleteErrors();
  formValidators['form-edit'].disableButton();
  popupEdit.openPopup();
});



cardList.renderItem();

popupEdit.setEventListeners();

popupAdd.setEventListeners();

popupImage.setEventListeners();


const formValidators = {};

const enableValidation = (validationConfig) => {
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidation(validationConfig, formElement);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  })
}

enableValidation(validationConfig);

buttonAddOpen.addEventListener('click', () => {
  formValidators['form-add'].deleteErrors();
  formValidators['form-add'].disableButton();
  popupAdd.openPopup();
});