
let popup = document.querySelector('.popup');
let inputName = document.querySelector('.form__input-name');
let profileName = document.querySelector('.profile__info-name');
let inputDescription = document.querySelector('.form__input-description');
let profileDescription = document.querySelector('.profile__info-description');
let editButton = document.querySelector('.profile__info-edit');
let closeButton = document.querySelector('.popup__close');
let form = document.querySelector('.form');

function openPopup() {
  popup.classList.add('popup__open');
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
}

function closePopup() {
  popup.classList.remove('popup__open');
}

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;
  closePopup()
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
form.addEventListener('submit', handleFormSubmit);
