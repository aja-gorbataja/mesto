
import './index.css';
import { buttonEditOpen, buttonAddOpen, inputName, inputAbout, inputAvatar, userName, userAbout, userAvatar, cardsContainer, config, validationConfig } from '../utils/data.js';
import Card from '../components/Card.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section  from '../components/Section.js';
import FormValidation from '../components/FormValidation.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo  from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';

let userId;

const api = new Api(config);

  api.getOwnerInfo()
    .then((data) => {
      userEdit.setUserInfo(data);
      userEdit.setUserAvatar(data);
      userEdit.getOwnerId(data._id)

      userId = data._id;
    })
    .then(() => {
      api.getCards()
        .then((data) => {
          cardList.renderItem(data)
        })
        .catch((err) => {
          console.log(err)
        })
    })
    .catch((err) => {
      console.log(err)
    })

const userEdit = new UserInfo({name: userName, about: userAbout, avatar: userAvatar});

const cardList = new Section({
  renderer: (item) => {
    const newCard = createCard(item);
    cardList.addItem(newCard);
  }
}, cardsContainer);

function createCard(item) {
  const card = new Card(item, '.item', handleOpenPopup, handleDeleteClick, likeCard, userId);
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
        addCard(data);
        popupAdd.closePopup();
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        popupAdd.setLoadingText('Создать');
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
        popupConfirm.closePopup()
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        popupConfirm.setLoadingText('Да');
      })
  }
})
  
function handleDeleteClick(card) {
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
              popupEdit.closePopup()
            })
            .catch((err) => {
              console.log(err)
            })
            .finally(() => {
              popupEdit.setLoadingText('Сохранить');
            })
        }
  });

buttonEditOpen.addEventListener('click', () => {
  popupEdit.setInputValues(userEdit.getUserInfo());
  formValidators['form-edit'].deleteErrors();
  formValidators['form-edit'].disableButton();
  popupEdit.openPopup();
});

popupEdit.setEventListeners();
    

const popupImage = new PopupWithImage('.popup_img');

popupImage.setEventListeners();


const popupAvatar = new PopupWithForm('.popup_avatar', {
  formSubmit: (data) => {
    popupAvatar.setLoadingText('Сохранение...');
    api.editAvatar(data)
      .then((data) => {
        userEdit.setUserAvatar(data, {avatar: inputAvatar});
        popupAvatar.closePopup()
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        popupAvatar.setLoadingText('Сохранить');
      })
  }
})

popupAvatar.setEventListeners()

document.querySelector('.profile__avatar').addEventListener('click', () => {
  popupAvatar.openPopup();
})


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
