
import './index.css';
import { validationConfig } from '../utils/data.js';
import Card from '../components/Card.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section  from '../components/Section.js';
import FormValidation from '../components/FormValidation.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo  from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';

const buttonEditOpen = document.querySelector('.profile__info-edit');
const buttonAddOpen = document.querySelector('.profile__add');
const inputName = document.querySelector('.form__input-name');
const inputAbout = document.querySelector('.form__input-description');
const inputAvatar = document.querySelector('.form__input-avatar');
const userName = document.querySelector('.profile__info-name');
const userAbout = document.querySelector('.profile__info-description');
const userAvatar = document.querySelector('.profile__avatar');

let userId;


const config = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-60',
  headers: {
    authorization: 'a7d13795-b751-49db-aed9-35354fa7b32f',
    'Content-Type': 'application/json'
  }
}

const api = new Api(config);

api.getCards()
  .then((data) => {
    const cardList = new Section({
      data: data,
      renderer: (item) => {
        const newCard = createCard(item);
        cardList.addItem(newCard);
      }
    }, '.elements');

    cardList.renderItem(data)
  })
 
  api.getOwnerInfo()
    .then((data) => {
      userEdit.setUserInfo(data);
      userEdit.setUserAvatar(data);
      userEdit.getOwnerId(data._id)

      userId = data._id;
    })

const userEdit = new UserInfo({name: userName, about: userAbout, avatar: userAvatar});

const cardList = new Section({
  data: [],
  renderer: (item) => {
    const newCard = createCard(item);
    cardList.addItem(newCard);
  }
}, '.elements');

function createCard(item) {
  const card = new Card(item, '.item', handleOpenPopup, deleteCard, likeCard, userId);
  const cardElement = card.generateCard();
  return cardElement;
}

function addCard(item) {
  const newCard = createCard(item);
  cardList.addItem(newCard);
}

const popupAdd = new PopupWithForm('.popup_add', {
  formSubmit: (data) => {
    popupAdd.setLoadingText('Сохранение...');
    api.createCard(data)
      .then((data) => {
        addCard(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
});

popupAdd.setEventListeners();

buttonAddOpen.addEventListener('click', () => {
  formValidators['form-add'].deleteErrors();
  formValidators['form-add'].disableButton();
  popupAdd.openPopup();
});

function handleOpenPopup (name, link) {
  popupImage.openPopup(name, link)
} 

function likeCard (card) {
  if (card.like) {
    api.deleteLike(card._cardId)
      .then((data) => {
        card.countLikes(data.likes);
        card.toggleLike();
        card.handleLike();
      })
      .catch((err) => {
        console.log(err)
      })
  } else {
    api.addLike(card._cardId)
      .then((data) => {
        card.countLikes(data.likes);
        card.toggleLike();
        card.handleLike();
      })
      .catch((err) => {
        console.log(err)
      })
  }
}


const popupConfirm = new PopupWithConfirm('.popup_ask', {
  formSubmit: (card) => {
    popupConfirm.setLoadingText('Удаление...');
    api.deleteCard(card._cardId)
      .then(() => {
        card.handleTrash();
      })
      .catch((err) => {
        console.log(err)
      })
  }
})
  
function deleteCard(card) {
  popupConfirm.handleCard(card);
  popupConfirm.openPopup();
}

 popupConfirm.setEventListeners();    



const popupEdit = new PopupWithForm('.popup_edit', {
        formSubmit: (data) => {
          popupEdit.setLoadingText('Сохранение...');
          api.editProfile(data)
            .then((data) => {
              userEdit.setUserInfo(data, {name: inputName, about: inputAbout});
            })
            .catch((err) => {
              console.log(err)
            })
          
        }});

        buttonEditOpen.addEventListener('click', () => {
          popupEdit.setInputValues(userEdit.getUserInfo());
          formValidators['form-edit'].deleteErrors();
          formValidators['form-edit'].disableButton();
          popupEdit.openPopup();
        });

        popupEdit.setEventListeners();
    

const popupImage = new PopupWithImage('.popup_img');


const popupAvatar = new PopupWithForm('.popup_avatar', {
  formSubmit: (data) => {
    popupAvatar.setLoadingText('Сохранение...');
    api.editAvatar(data)
      .then((data) => {
        userEdit.setUserAvatar(data, {avatar: inputAvatar})
      })
      .catch((err) => {
        console.log(err)
      })
  }
})
popupAvatar.setEventListeners()

document.querySelector('.profile__avatar').addEventListener('click', () => {
  popupAvatar.openPopup();
})



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
