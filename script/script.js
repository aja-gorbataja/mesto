
const popupEdit = document.querySelector('.popup_edit');
const inputName = document.querySelector('.form__input-name');
const profileName = document.querySelector('.profile__info-name');
const inputDescription = document.querySelector('.form__input-description');
const profileDescription = document.querySelector('.profile__info-description');
const buttonEdit = document.querySelector('.profile__info-edit');
const buttonEditClose = document.querySelector('.popup_edit_close');
const formEdit = document.querySelector('.form_edit');
const buttonAdd = document.querySelector('.profile__add');
const buttonAddClose = document.querySelector('.popup__add-close');
const popupAdd = document.querySelector('.popup_add');
const inputCity = document.querySelector('.form__input-city');
const inputLink = document.querySelector('.form__input-link');
const formAdd = document.querySelector('.form_add');
const itemTemplate = document.querySelector('.item').content;
const popupImg = document.querySelector('.popup_img');
const imgFull = document.querySelector('.img__full');
const imgTitle = document.querySelector('.img__title');
const buttonImgClose = document.querySelector('.popup_img_close');

const elementsArray = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


function openPopupEdit() {
  popupEdit.classList.add('popup__open');
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
}

function openPopupAdd() {
  popupAdd.classList.add('popup__open');
}

function closePopupEdit() {
  popupEdit.classList.remove('popup__open');
}

function closePopupAdd() {
  popupAdd.classList.remove('popup__open');
}

function editFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;
  closePopupEdit()
}

function closePopupImg() {
  popupImg.classList.remove('popup__open');
}

function addFormSubmit (evt) {
  evt.preventDefault();
  createItem(inputCity.value, inputLink.value);
  closePopupAdd();
}

function createItem (name, link) {
  const newItemContainer = document.querySelector('.elements');
  const newItem = itemTemplate.cloneNode(true);

  const newItemName = newItem.querySelector('.elements__item-name');
  const newItemLink = newItem.querySelector('.elements__item-img');

  newItemName.textContent = name;
  newItemLink.src = link;

  newItem.querySelector('.elements__item-img').addEventListener('click', function () {
    popupImg.classList.add('popup__open');
    imgFull.src = newItemLink.src;
    imgTitle.textContent = newItemName.textContent;
  });

  newItem.querySelector('.elements__item-like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__item-like_on');
  });

  newItem.querySelector('.elements__item-trash').addEventListener('click', function () {
    const trashNewItem = document.querySelector('.elements__item');
    trashNewItem.remove();
  });
  
  newItemContainer.prepend(newItem);
}


buttonEdit.addEventListener('click', openPopupEdit);
buttonEditClose.addEventListener('click', closePopupEdit);
formEdit.addEventListener('submit', editFormSubmit);
buttonAdd.addEventListener('click', openPopupAdd);
buttonAddClose.addEventListener('click', closePopupAdd);
formAdd.addEventListener('submit', addFormSubmit);
buttonImgClose.addEventListener('click', closePopupImg);


elementsArray.forEach(element => {
  createItem(element.name, element.link);
});


