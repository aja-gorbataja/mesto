(()=>{"use strict";const e={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible"};class t{constructor(e,t,s){this._name=e.name,this._link=e.link,this._templateSelector=t,this._handleOpenPopup=s}_getTemplate(){return document.querySelector(this._templateSelector).content.querySelector(".elements__item").cloneNode(!0)}generateCard(){return this._element=this._getTemplate(),this._setEventListeners(),this._element.querySelector(".elements__item-img").src=this._link,this._element.querySelector(".elements__item-img").alt=this._name,this._element.querySelector(".elements__item-name").textContent=this._name,this._element}_handleLike(){this._element.querySelector(".elements__item-like").classList.toggle("elements__item-like_on")}_handleTrash(){this._element.remove()}_setEventListeners(){this._element.querySelector(".elements__item-img").addEventListener("click",(()=>{this._handleOpenPopup(this._name,this._link)})),this._element.querySelector(".elements__item-like").addEventListener("click",(()=>{this._handleLike()})),this._element.querySelector(".elements__item-trash").addEventListener("click",(()=>{this._handleTrash()}))}}class s{constructor(e){this._popupSelector=document.querySelector(e),this._closeButton=this._popupSelector.querySelector(".popup-close")}openPopup(){this._popupSelector.classList.add("popup_open"),document.addEventListener("keydown",this._handleEscClose),this.setEventListeners()}closePopup(){this._popupSelector.classList.remove("popup_open"),document.removeEventListener("keydown",this._handleEscClose)}_handleEscClose=e=>{"Escape"===e.key&&this.closePopup()};setEventListeners(){this._closeButton.addEventListener("click",(()=>{this.closePopup()})),this._popupSelector.addEventListener("click",(e=>{e.currentTarget===e.target&&this.closePopup()}))}}class n extends s{constructor(e,{formSubmit:t}){super(e),this._formSubmit=t,this._form=this._popupSelector.querySelector(".popup__form"),this._inputList=this._form.querySelectorAll(".popup__input")}_getInputValues(){return this._formValues={},this._inputList.forEach((e=>{this._formValues[e.name]=e.value})),this._formValues}setEventListeners(){this._form.addEventListener("submit",(e=>{e.preventDefault(),this._formSubmit(this._getInputValues()),this.closePopup()})),super.setEventListeners()}closePopup(){super.closePopup(),this._form.reset()}}class i{constructor(e,t){this._config=e,this._formElement=t,this._inputList=Array.from(this._formElement.querySelectorAll(this._config.inputSelector)),this._buttonElement=this._formElement.querySelector(this._config.submitButtonSelector)}_hideInputError(e){const t=this._formElement.querySelector(`.${e.id}-error`);t.classList.remove(this._config.errorClass),t.textContent="",e.classList.remove(this._config.inputErrorClass)}_showInputError(e){const t=this._formElement.querySelector(`.${e.id}-error`);t.classList.add(this._config.errorClass),t.textContent=e.validationMessage,e.classList.add(this._config.inputErrorClass)}_checkInputValidity(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}_hasInvalidInput(e){return e.some((e=>!e.validity.valid))}_toggleButtonState(){this._hasInvalidInput(this._inputList)?(this._buttonElement.classList.remove(this._config.submitButtonSelector),this._buttonElement.classList.add(this._config.inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._config.inactiveButtonClass),this._buttonElement.disabled=!1)}_setEventListeners(){this._toggleButtonState(),this._inputList.forEach((e=>{e.addEventListener("input",(()=>{this._checkInputValidity(e),this._toggleButtonState()}))}))}_deleteError(){this._inputList.forEach((e=>{this._hideInputError(e)}))}disabledButton(){this._buttonElement.classList.add(this._config.inactiveButtonClass),this._buttonElement.disabled=!0,this._deleteError()}enableValidation(){this._setEventListeners()}}const o=document.querySelector(".form__input-name"),r=document.querySelector(".form__input-description"),l=document.querySelector(".profile__info-edit"),u=document.querySelector(".form_edit"),c=document.querySelector(".profile__add"),p=document.querySelector(".form_add"),a=new i(e,u),_=new i(e,p),d=new class{constructor({data:e,renderer:t},s){this._renderedItems=e,this._renderer=t,this._container=document.querySelector(s)}addItem(e){this._container.prepend(e)}renderItem(){this._renderedItems.forEach((e=>{this._renderer(e)}))}}({data:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:e=>{const s=new t(e,".item",E).generateCard();d.addItem(s)}},".elements"),m=new class{constructor({name:e,info:t}){this._name=document.querySelector(e),this._info=document.querySelector(t)}getUserInfo(){return{name:this._name.textContent,info:this._info.textContent}}setUserInfo(e){this._name.textContent=e.name,this._info.textContent=e.info}}({name:".profile__info-name",info:".profile__info-description"}),h=new class extends s{constructor(e){super(e),this._imgFull=document.querySelector(".img__full"),this._imgTitle=document.querySelector(".img__title")}openPopup(e,t){super.openPopup(),this._imgFull.src=t,this._imgFull.alt=e,this._imgTitle.textContent=e}}(".popup_img"),f=new n(".popup_edit",{formSubmit:e=>{m.setUserInfo(e)}}),v=new n(".popup_add",{formSubmit:e=>{!function(e){const s=new t(e,".item",E).generateCard();d.addItem(s)}(e)}});function E(e,t){h.openPopup(e,t)}l.addEventListener("click",(()=>{const{name:e,info:t}=m.getUserInfo();o.value=e,r.value=t,f.openPopup(),a.disabledButton()})),c.addEventListener("click",(()=>{_.disabledButton(),v.openPopup()})),a.enableValidation(),_.enableValidation(),d.renderItem()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVl4RyxFQUFLLElBR3hCNkcsRUFBVyxJQUFJcEUsRUFBYyxhQUFjLENBQy9DQyxXQUFhd0QsS0FTZCxTQUFvQkEsR0FDbkIsTUFDTUMsRUFETyxJQUFJckcsRUFBS29HLEVBQU0sUUFBU2hHLEdBQ2hCYSxlQUNyQnlFLEVBQVNNLFFBQVFLLEVBQ25CLENBWklXLENBQVdaLEVBQUssSUFJcEIsU0FBU2hHLEVBQWlCRyxFQUFNRSxHQUM5QmtHLEVBQVcxRSxVQUFVMUIsRUFBTUUsRUFDN0IsQ0FRQTJFLEVBQWV4RCxpQkFBaUIsU0FBUyxLQUN2QyxNQUFNLEtBQUNyQixFQUFJLEtBQUVnRyxHQUFRRCxFQUFTRyxjQUM5QnZCLEVBQVU1QixNQUFRL0MsRUFDbEI0RSxFQUFpQjdCLE1BQVFpRCxFQUN6Qk8sRUFBVTdFLFlBQ1Z1RCxFQUFtQlIsZ0JBQWdCLElBR3JDTSxFQUFjMUQsaUJBQWlCLFNBQVMsS0FDdEM2RCxFQUFrQlQsaUJBQ2xCK0IsRUFBUzlFLFdBQVcsSUFHdEJ1RCxFQUFtQlAsbUJBRW5CUSxFQUFrQlIsbUJBRWxCUyxFQUFTUyxZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvdXRpbHMvZGF0YS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgY29uc3QgZWxlbWVudHNBcnJheSA9IFtcclxuICB7XHJcbiAgICBuYW1lOiAn0JDRgNGF0YvQtycsXHJcbiAgICBsaW5rOiAnaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2Fya2h5ei5qcGcnXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAn0KfQtdC70Y/QsdC40L3RgdC60LDRjyDQvtCx0LvQsNGB0YLRjCcsXHJcbiAgICBsaW5rOiAnaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2NoZWx5YWJpbnNrLW9ibGFzdC5qcGcnXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAn0JjQstCw0L3QvtCy0L4nLFxyXG4gICAgbGluazogJ2h0dHBzOi8vcGljdHVyZXMuczMueWFuZGV4Lm5ldC9mcm9udGVuZC1kZXZlbG9wZXIvY2FyZHMtY29tcHJlc3NlZC9pdmFub3ZvLmpwZydcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICfQmtCw0LzRh9Cw0YLQutCwJyxcclxuICAgIGxpbms6ICdodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQva2FtY2hhdGthLmpwZydcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICfQpdC+0LvQvNC+0LPQvtGA0YHQutC40Lkg0YDQsNC50L7QvScsXHJcbiAgICBsaW5rOiAnaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2tob2xtb2dvcnNreS1yYXlvbi5qcGcnXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAn0JHQsNC50LrQsNC7JyxcclxuICAgIGxpbms6ICdodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQvYmFpa2FsLmpwZydcclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgdmFsaWRhdGlvbkNvbmZpZyA9IHtcclxuICBmb3JtU2VsZWN0b3I6ICcucG9wdXBfX2Zvcm0nLFxyXG4gIGlucHV0U2VsZWN0b3I6ICcucG9wdXBfX2lucHV0JyxcclxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogJy5wb3B1cF9fYnV0dG9uJyxcclxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiAncG9wdXBfX2J1dHRvbl9kaXNhYmxlZCcsXHJcbiAgaW5wdXRFcnJvckNsYXNzOiAncG9wdXBfX2lucHV0X3R5cGVfZXJyb3InLFxyXG4gIGVycm9yQ2xhc3M6ICdwb3B1cF9faW5wdXQtZXJyb3JfdmlzaWJsZSdcclxufTsiLCJcclxuZXhwb3J0IGNsYXNzIENhcmQge1xyXG4gIGNvbnN0cnVjdG9yKGRhdGEsIHRlbXBsYXRlU2VsZWN0b3IsIGhhbmRsZU9wZW5Qb3B1cCkge1xyXG4gICAgdGhpcy5fbmFtZSA9IGRhdGEubmFtZTtcclxuICAgIHRoaXMuX2xpbmsgPSBkYXRhLmxpbms7XHJcbiAgICB0aGlzLl90ZW1wbGF0ZVNlbGVjdG9yID0gdGVtcGxhdGVTZWxlY3RvcjtcclxuICAgIHRoaXMuX2hhbmRsZU9wZW5Qb3B1cCA9IGhhbmRsZU9wZW5Qb3B1cDtcclxuICB9XHJcblxyXG4gIF9nZXRUZW1wbGF0ZSgpIHtcclxuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fdGVtcGxhdGVTZWxlY3RvcilcclxuICAgICAgLmNvbnRlbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19faXRlbScpXHJcbiAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XHJcblxyXG4gICAgcmV0dXJuIGNhcmRFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVDYXJkKCkge1xyXG4gICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2dldFRlbXBsYXRlKCk7XHJcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xyXG4gIFxyXG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudHNfX2l0ZW0taW1nJykuc3JjID0gdGhpcy5fbGluaztcclxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRzX19pdGVtLWltZycpLmFsdCA9IHRoaXMuX25hbWU7XHJcbiAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19faXRlbS1uYW1lJykudGV4dENvbnRlbnQgPSB0aGlzLl9uYW1lO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZUxpa2UoKSB7XHJcbiAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19faXRlbS1saWtlJykuY2xhc3NMaXN0LnRvZ2dsZSgnZWxlbWVudHNfX2l0ZW0tbGlrZV9vbicpO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZVRyYXNoKCkge1xyXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcclxuICB9XHJcblxyXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRzX19pdGVtLWltZycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLl9oYW5kbGVPcGVuUG9wdXAodGhpcy5fbmFtZSwgdGhpcy5fbGluayk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19faXRlbS1saWtlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUxpa2UoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRzX19pdGVtLXRyYXNoJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZVRyYXNoKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0iLCJcclxuZXhwb3J0IGNsYXNzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XHJcbiAgICB0aGlzLl9wb3B1cFNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwb3B1cFNlbGVjdG9yKTtcclxuICAgIHRoaXMuX2Nsb3NlQnV0dG9uID0gdGhpcy5fcG9wdXBTZWxlY3Rvci5xdWVyeVNlbGVjdG9yKCcucG9wdXAtY2xvc2UnKTtcclxuICB9XHJcblxyXG4gIG9wZW5Qb3B1cCgpIHtcclxuICAgIHRoaXMuX3BvcHVwU2VsZWN0b3IuY2xhc3NMaXN0LmFkZCgncG9wdXBfb3BlbicpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIGNsb3NlUG9wdXAoKSB7XHJcbiAgICB0aGlzLl9wb3B1cFNlbGVjdG9yLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHVwX29wZW4nKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlRXNjQ2xvc2UgPSAoZXZ0KSA9PiB7XHJcbiAgICBpZiAoZXZ0LmtleSA9PT0gJ0VzY2FwZScpIHtcclxuICAgICAgdGhpcy5jbG9zZVBvcHVwKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX2Nsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmNsb3NlUG9wdXAoKVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fcG9wdXBTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcclxuICAgICAgaWYgKGV2dC5jdXJyZW50VGFyZ2V0ID09PSBldnQudGFyZ2V0KSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZVBvcHVwKCk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUG9wdXAgfSBmcm9tICcuL1BvcHVwLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IsIHtmb3JtU3VibWl0fSkge1xyXG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9mb3JtU3VibWl0ID0gZm9ybVN1Ym1pdDtcclxuICAgIHRoaXMuX2Zvcm0gPSB0aGlzLl9wb3B1cFNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fZm9ybScpO1xyXG4gICAgdGhpcy5faW5wdXRMaXN0ID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBfX2lucHV0Jyk7XHJcbiAgfVxyXG4gIFxyXG4gIF9nZXRJbnB1dFZhbHVlcygpIHtcclxuICAgIHRoaXMuX2Zvcm1WYWx1ZXMgPSB7fTtcclxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKGlucHV0ID0+IHtcclxuICAgICAgdGhpcy5fZm9ybVZhbHVlc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xyXG4gICAgfSlcclxuICAgIHJldHVybiB0aGlzLl9mb3JtVmFsdWVzO1xyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldnQpID0+IHtcclxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgdGhpcy5fZm9ybVN1Ym1pdCh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcclxuICAgICAgdGhpcy5jbG9zZVBvcHVwKCk7XHJcbiAgICB9KTtcclxuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBjbG9zZVBvcHVwKCkge1xyXG4gICAgc3VwZXIuY2xvc2VQb3B1cCgpXHJcbiAgICB0aGlzLl9mb3JtLnJlc2V0KCk7XHJcbiAgfVxyXG4gfSIsIlxyXG5leHBvcnQgY2xhc3MgRm9ybVZhbGlkYXRpb24ge1xyXG4gIGNvbnN0cnVjdG9yIChjb25maWcsIGZvcm1FbGVtZW50KSB7XHJcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XHJcbiAgICB0aGlzLl9mb3JtRWxlbWVudCA9IGZvcm1FbGVtZW50O1xyXG4gICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbSh0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2NvbmZpZy5pbnB1dFNlbGVjdG9yKSk7XHJcbiAgICB0aGlzLl9idXR0b25FbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9jb25maWcuc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCkge1xyXG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgLiR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmApO1xyXG4gICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fY29uZmlnLmVycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9jb25maWcuaW5wdXRFcnJvckNsYXNzKTtcclxuICB9XHJcblxyXG4gIF9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgKTtcclxuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5lcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IGlucHV0RWxlbWVudC52YWxpZGF0aW9uTWVzc2FnZTtcclxuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5pbnB1dEVycm9yQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpIHtcclxuICAgIGlmIChpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfaGFzSW52YWxpZElucHV0KGlucHV0TGlzdCkge1xyXG4gICAgcmV0dXJuIGlucHV0TGlzdC5zb21lKChpbnB1dEVsZW1lbnQpID0+ICFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpO1xyXG4gIH1cclxuXHJcbiAgX3RvZ2dsZUJ1dHRvblN0YXRlKCkge1xyXG4gICAgaWYgKHRoaXMuX2hhc0ludmFsaWRJbnB1dCh0aGlzLl9pbnB1dExpc3QpKSB7XHJcbiAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9jb25maWcuc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xyXG4gICAgICB0aGlzLl9idXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fY29uZmlnLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgICB0aGlzLl9idXR0b25FbGVtZW50LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9jb25maWcuaW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCk7XHJcbiAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICB9XHJcblxyXG4gIF9kZWxldGVFcnJvcigpIHtcclxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGRpc2FibGVkQnV0dG9uKCkge1xyXG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcclxuICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5fZGVsZXRlRXJyb3IoKTtcclxuICB9XHJcblxyXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XHJcbiAgICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfVxyXG59XHJcbiIsIlxyXG5pbXBvcnQgJy4vaW5kZXguY3NzJztcclxuaW1wb3J0IHsgZWxlbWVudHNBcnJheSwgdmFsaWRhdGlvbkNvbmZpZyB9IGZyb20gJy4uL3V0aWxzL2RhdGEuanMnO1xyXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkLmpzJztcclxuaW1wb3J0IHsgUG9wdXBXaXRoRm9ybSB9IGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyc7XHJcbmltcG9ydCBTZWN0aW9uICBmcm9tICcuLi9jb21wb25lbnRzL1NlY3Rpb24uanMnO1xyXG5pbXBvcnQgeyBGb3JtVmFsaWRhdGlvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRpb24uanMnO1xyXG5pbXBvcnQgeyBQb3B1cFdpdGhJbWFnZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMnO1xyXG5pbXBvcnQgVXNlckluZm8gIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlckluZm8uanMnO1xyXG5cclxuY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX2lucHV0LW5hbWUnKTtcclxuY29uc3QgaW5wdXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19pbnB1dC1kZXNjcmlwdGlvbicpO1xyXG5jb25zdCBidXR0b25FZGl0T3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19pbmZvLWVkaXQnKTtcclxuY29uc3QgZm9ybUVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9lZGl0Jyk7XHJcbmNvbnN0IGJ1dHRvbkFkZE9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fYWRkJyk7XHJcbmNvbnN0IGZvcm1BZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9hZGQnKTtcclxuXHJcbmNvbnN0IGZvcm1FZGl0VmFsaWRhdGlvbiA9IG5ldyBGb3JtVmFsaWRhdGlvbih2YWxpZGF0aW9uQ29uZmlnLCBmb3JtRWRpdCk7XHJcblxyXG5jb25zdCBmb3JtQWRkVmFsaWRhdGlvbiA9IG5ldyBGb3JtVmFsaWRhdGlvbih2YWxpZGF0aW9uQ29uZmlnLCBmb3JtQWRkKTtcclxuXHJcbmNvbnN0IGNhcmRMaXN0ID0gbmV3IFNlY3Rpb24oe1xyXG4gIGRhdGE6IGVsZW1lbnRzQXJyYXksXHJcbiAgcmVuZGVyZXI6IChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBjYXJkID0gbmV3IENhcmQoaXRlbSwgJy5pdGVtJywgaGFuZGxlT3BlblBvcHVwKTtcclxuICAgIGNvbnN0IG5ld0NhcmQgPSBjYXJkLmdlbmVyYXRlQ2FyZCgpO1xyXG4gICAgY2FyZExpc3QuYWRkSXRlbShuZXdDYXJkKTtcclxuICB9XHJcbn0sICcuZWxlbWVudHMnKTtcclxuXHJcbmNvbnN0IHVzZXJFZGl0ID0gbmV3IFVzZXJJbmZvKHtuYW1lOiAnLnByb2ZpbGVfX2luZm8tbmFtZScsIGluZm86ICcucHJvZmlsZV9faW5mby1kZXNjcmlwdGlvbid9KTtcclxuXHJcbmNvbnN0IHBvcHVwSW1hZ2UgPSBuZXcgUG9wdXBXaXRoSW1hZ2UoJy5wb3B1cF9pbWcnKTtcclxuXHJcbmNvbnN0IHBvcHVwRWRpdCA9IG5ldyBQb3B1cFdpdGhGb3JtKCcucG9wdXBfZWRpdCcsIHtcclxuICBmb3JtU3VibWl0OiAoZGF0YSkgPT4ge1xyXG4gICAgdXNlckVkaXQuc2V0VXNlckluZm8oZGF0YSk7XHJcbiAgfX0pO1xyXG5cclxuY29uc3QgcG9wdXBBZGQgPSBuZXcgUG9wdXBXaXRoRm9ybSgnLnBvcHVwX2FkZCcsIHtcclxuICBmb3JtU3VibWl0OiAoaXRlbSkgPT4ge1xyXG4gICAgY3JlYXRlQ2FyZChpdGVtKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlT3BlblBvcHVwIChuYW1lLCBsaW5rKSB7XHJcbiAgcG9wdXBJbWFnZS5vcGVuUG9wdXAobmFtZSwgbGluaylcclxufSBcclxuXHJcbiBmdW5jdGlvbiBjcmVhdGVDYXJkKGl0ZW0pIHtcclxuICBjb25zdCBjYXJkID0gbmV3IENhcmQoaXRlbSwgJy5pdGVtJywgaGFuZGxlT3BlblBvcHVwKTtcclxuICBjb25zdCBuZXdDYXJkID0gY2FyZC5nZW5lcmF0ZUNhcmQoKVxyXG4gIGNhcmRMaXN0LmFkZEl0ZW0obmV3Q2FyZCk7XHJcbn1cclxuXHJcbmJ1dHRvbkVkaXRPcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGNvbnN0IHtuYW1lLCBpbmZvfSA9IHVzZXJFZGl0LmdldFVzZXJJbmZvKCk7XHJcbiAgaW5wdXROYW1lLnZhbHVlID0gbmFtZTtcclxuICBpbnB1dERlc2NyaXB0aW9uLnZhbHVlID0gaW5mbztcclxuICBwb3B1cEVkaXQub3BlblBvcHVwKCk7XHJcbiAgZm9ybUVkaXRWYWxpZGF0aW9uLmRpc2FibGVkQnV0dG9uKCk7XHJcbn0pO1xyXG5cclxuYnV0dG9uQWRkT3Blbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBmb3JtQWRkVmFsaWRhdGlvbi5kaXNhYmxlZEJ1dHRvbigpO1xyXG4gIHBvcHVwQWRkLm9wZW5Qb3B1cCgpO1xyXG59KTtcclxuXHJcbmZvcm1FZGl0VmFsaWRhdGlvbi5lbmFibGVWYWxpZGF0aW9uKCk7XHJcblxyXG5mb3JtQWRkVmFsaWRhdGlvbi5lbmFibGVWYWxpZGF0aW9uKCk7XHJcblxyXG5jYXJkTGlzdC5yZW5kZXJJdGVtKCk7XHJcbiIsIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcclxuICBjb25zdHJ1Y3Rvcih7IGRhdGEsIHJlbmRlcmVyIH0sIGNvbnRhaW5lclNlbGVjdG9yKSB7XHJcbiAgICB0aGlzLl9yZW5kZXJlZEl0ZW1zID0gZGF0YTtcclxuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XHJcbiAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcclxuICB9XHJcblxyXG4gIGFkZEl0ZW0oZWxlbWVudCkge1xyXG4gICAgdGhpcy5fY29udGFpbmVyLnByZXBlbmQoZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJJdGVtKCkge1xyXG4gICAgdGhpcy5fcmVuZGVyZWRJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlcihlbGVtZW50KTtcclxuICAgIH0pXHJcbiAgfVxyXG59IiwiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIHtcclxuICBjb25zdHJ1Y3Rvcih7bmFtZSwgaW5mb30pIHtcclxuICAgIHRoaXMuX25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hbWUpO1xyXG4gICAgdGhpcy5faW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaW5mbyk7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VySW5mbygpIHtcclxuICAgcmV0dXJuIHtcclxuICAgIG5hbWU6IHRoaXMuX25hbWUudGV4dENvbnRlbnQsXHJcbiAgICBpbmZvOiB0aGlzLl9pbmZvLnRleHRDb250ZW50XHJcbiAgfVxyXG4gIH1cclxuXHJcbiAgc2V0VXNlckluZm8oZGF0YSkge1xyXG4gICAgdGhpcy5fbmFtZS50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcclxuICAgIHRoaXMuX2luZm8udGV4dENvbnRlbnQgPSBkYXRhLmluZm87XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUG9wdXAgfSBmcm9tICcuL1BvcHVwLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XHJcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcclxuICAgIHRoaXMuX2ltZ0Z1bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1nX19mdWxsJyk7XHJcbiAgICB0aGlzLl9pbWdUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWdfX3RpdGxlJyk7XHJcbiAgfVxyXG5cclxuICBvcGVuUG9wdXAobmFtZSwgbGluaykge1xyXG4gICAgc3VwZXIub3BlblBvcHVwKCk7XHJcbiAgICB0aGlzLl9pbWdGdWxsLnNyYyA9IGxpbms7XHJcbiAgICB0aGlzLl9pbWdGdWxsLmFsdCA9IG5hbWU7XHJcbiAgICB0aGlzLl9pbWdUaXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbInZhbGlkYXRpb25Db25maWciLCJmb3JtU2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIkNhcmQiLCJjb25zdHJ1Y3RvciIsImRhdGEiLCJ0ZW1wbGF0ZVNlbGVjdG9yIiwiaGFuZGxlT3BlblBvcHVwIiwidGhpcyIsIl9uYW1lIiwibmFtZSIsIl9saW5rIiwibGluayIsIl90ZW1wbGF0ZVNlbGVjdG9yIiwiX2hhbmRsZU9wZW5Qb3B1cCIsIl9nZXRUZW1wbGF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJnZW5lcmF0ZUNhcmQiLCJfZWxlbWVudCIsIl9zZXRFdmVudExpc3RlbmVycyIsInNyYyIsImFsdCIsInRleHRDb250ZW50IiwiX2hhbmRsZUxpa2UiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJfaGFuZGxlVHJhc2giLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwiUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiX3BvcHVwU2VsZWN0b3IiLCJfY2xvc2VCdXR0b24iLCJvcGVuUG9wdXAiLCJhZGQiLCJfaGFuZGxlRXNjQ2xvc2UiLCJzZXRFdmVudExpc3RlbmVycyIsImNsb3NlUG9wdXAiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZ0Iiwia2V5IiwiY3VycmVudFRhcmdldCIsInRhcmdldCIsIlBvcHVwV2l0aEZvcm0iLCJmb3JtU3VibWl0Iiwic3VwZXIiLCJfZm9ybVN1Ym1pdCIsIl9mb3JtIiwiX2lucHV0TGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJfZm9ybVZhbHVlcyIsImZvckVhY2giLCJpbnB1dCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJyZXNldCIsIkZvcm1WYWxpZGF0aW9uIiwiY29uZmlnIiwiZm9ybUVsZW1lbnQiLCJfY29uZmlnIiwiX2Zvcm1FbGVtZW50IiwiQXJyYXkiLCJmcm9tIiwiX2J1dHRvbkVsZW1lbnQiLCJfaGlkZUlucHV0RXJyb3IiLCJpbnB1dEVsZW1lbnQiLCJlcnJvckVsZW1lbnQiLCJpZCIsIl9zaG93SW5wdXRFcnJvciIsInZhbGlkYXRpb25NZXNzYWdlIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsInZhbGlkaXR5IiwidmFsaWQiLCJfaGFzSW52YWxpZElucHV0IiwiaW5wdXRMaXN0Iiwic29tZSIsIl90b2dnbGVCdXR0b25TdGF0ZSIsImRpc2FibGVkIiwiX2RlbGV0ZUVycm9yIiwiZGlzYWJsZWRCdXR0b24iLCJlbmFibGVWYWxpZGF0aW9uIiwiaW5wdXROYW1lIiwiaW5wdXREZXNjcmlwdGlvbiIsImJ1dHRvbkVkaXRPcGVuIiwiZm9ybUVkaXQiLCJidXR0b25BZGRPcGVuIiwiZm9ybUFkZCIsImZvcm1FZGl0VmFsaWRhdGlvbiIsImZvcm1BZGRWYWxpZGF0aW9uIiwiY2FyZExpc3QiLCJyZW5kZXJlciIsImNvbnRhaW5lclNlbGVjdG9yIiwiX3JlbmRlcmVkSXRlbXMiLCJfcmVuZGVyZXIiLCJfY29udGFpbmVyIiwiYWRkSXRlbSIsImVsZW1lbnQiLCJwcmVwZW5kIiwicmVuZGVySXRlbSIsIml0ZW0iLCJuZXdDYXJkIiwidXNlckVkaXQiLCJpbmZvIiwiX2luZm8iLCJnZXRVc2VySW5mbyIsInNldFVzZXJJbmZvIiwicG9wdXBJbWFnZSIsIl9pbWdGdWxsIiwiX2ltZ1RpdGxlIiwicG9wdXBFZGl0IiwicG9wdXBBZGQiLCJjcmVhdGVDYXJkIl0sInNvdXJjZVJvb3QiOiIifQ==