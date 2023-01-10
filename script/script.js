
const popupEdit = document.querySelector('.popup_edit');
const inputName = document.querySelector('.form__input-name');
const profileName = document.querySelector('.profile__info-name');
const inputDescription = document.querySelector('.form__input-description');
const profileDescription = document.querySelector('.profile__info-description');
const buttonEditOpen = document.querySelector('.profile__info-edit');
const buttonEditClose = document.querySelector('.popup__edit-close');
const formEdit = document.querySelector('.form_edit');
const buttonAddOpen = document.querySelector('.profile__add');
const buttonAddClose = document.querySelector('.popup__add-close');
const popupAdd = document.querySelector('.popup_add');
const inputCity = document.querySelector('.form__input-city');
const inputLink = document.querySelector('.form__input-link');
const formAdd = document.querySelector('.form_add');
const itemTemplate = document.querySelector('.item').content;
const newItemTemplate = itemTemplate.querySelector('.elements__item');
const popupImg = document.querySelector('.popup_img');
const imgFull = document.querySelector('.img__full');
const imgTitle = document.querySelector('.img__title');
const buttonImgClose = document.querySelector('.popup__img-close');
const newItemContainer = document.querySelector('.elements');
const popupList = Array.from(document.querySelectorAll('.popup'));
const editInput = Array.from(formEdit.querySelectorAll('.popup__input'));
const buttonEditAble = formEdit.querySelector('.popup__button');
const addInput = Array.from(formAdd.querySelectorAll('.popup__input'));
const buttonAddAble = formAdd.querySelector('.popup__button');

function openPopup (popup) {
  popup.classList.add('popup_open');
  document.addEventListener('keydown', closeByEsc);
}

function closePopup (popup) {
  popup.classList.remove('popup_open');
  document.removeEventListener('keydown', closeByEsc);
}

function closeByEsc (evt) {
  if (evt.key === 'Escape') {
  const popupActive = document.querySelector('.popup_open');
  closePopup(popupActive);
  }
}

function editFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;
  closePopup(popupEdit)
}

function addFormSubmit (evt) {
  evt.preventDefault();
  addNewItem(inputCity.value, inputLink.value);
  inputCity.value = '';
  inputLink.value = '';
  closePopup(popupAdd);
}

function createItem (name, link) {
  const newItem = newItemTemplate.cloneNode(true);
  const newItemName = newItem.querySelector('.elements__item-name');
  const newItemLink = newItem.querySelector('.elements__item-img');

  newItemName.textContent = name;
  newItemLink.src = link;
  newItemLink.alt = name;

  newItemLink.addEventListener('click', function () {
    openPopup(popupImg);
    imgFull.src = newItemLink.src;
    imgTitle.textContent = newItemName.textContent;
    imgFull.alt = newItemName.textContent;
  });

  newItem.querySelector('.elements__item-like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__item-like_on');
  });

  newItem.querySelector('.elements__item-trash').addEventListener('click', function () {
    newItem.remove();
  });
  
  return newItem;
}

function addNewItem (name, link) {
  newItemContainer.prepend(createItem(name, link));
}

buttonEditOpen.addEventListener('click', function () {
  toggleButtonState(editInput, buttonEditAble, validationConfig);
  openPopup(popupEdit);
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
});

buttonEditClose.addEventListener('click', function () {
  closePopup(popupEdit);
});

formEdit.addEventListener('submit', editFormSubmit);

buttonAddOpen.addEventListener('click', function (){
  toggleButtonState(addInput, buttonAddAble, validationConfig);
  openPopup(popupAdd);
});

buttonAddClose.addEventListener('click', function () {
  closePopup(popupAdd);
});

formAdd.addEventListener('submit', addFormSubmit);

buttonImgClose.addEventListener('click', function () {
  closePopup(popupImg);
});

elementsArray.forEach(element => {
  addNewItem(element.name, element.link);
});

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
}

enableValidation(validationConfig); 


popupList.forEach((popup) => {
  popup.addEventListener ('click', function (evt) {
    if (evt.currentTarget === evt.target) {
      closePopup(popup);
    }
  })
});
