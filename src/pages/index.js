
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
const formEdit = document.querySelector('.form_edit');
const buttonAddOpen = document.querySelector('.profile__add');
const formAdd = document.querySelector('.form_add');

const formEditValidation = new FormValidation(validationConfig, formEdit);

const formAddValidation = new FormValidation(validationConfig, formAdd);

const cardList = new Section({
  data: elementsArray,
  renderer: (item) => {
    const card = new Card(item, '.item', handleOpenPopup);
    const newCard = card.generateCard();
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
    createCard(item);
  }
});

function handleOpenPopup (name, link) {
  popupImage.openPopup(name, link)
} 

 function createCard(item) {
  const card = new Card(item, '.item', handleOpenPopup);
  const newCard = card.generateCard()
  cardList.addItem(newCard);
}

buttonEditOpen.addEventListener('click', () => {
  const {name, info} = userEdit.getUserInfo();
  inputName.value = name;
  inputDescription.value = info;
  popupEdit.openPopup();
  formEditValidation.disabledButton();
});

buttonAddOpen.addEventListener('click', () => {
  formAddValidation.disabledButton();
  popupAdd.openPopup();
});

formEditValidation.enableValidation();

formAddValidation.enableValidation();

cardList.renderItem();
