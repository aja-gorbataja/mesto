
let popup = document.querySelector('.popup');
let inputName = document.querySelector('.form__input-name');
let profileName = document.querySelector('.profile__info-name');
let inputDescription = document.querySelector('.form__input-description');
let profileDescription = document.querySelector('.profile__info-description');

function openPopup() {
  popup.classList.add('popup__open');
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
}
let editButton = document.querySelector('.profile__info-edit');
editButton.addEventListener('click', openPopup);

function closePopup() {
  popup.classList.remove('popup__open');
}
let closeButton = document.querySelector('.popup__close');
closeButton.addEventListener('click', closePopup);


let form = document.querySelector('.form');
function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;
  closePopup()
}
form.addEventListener('submit', handleFormSubmit);
