const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new Error('Произошла ошибка'))
}

export default class Api {
  constructor(config) {
    this.url = config.url;
    this.headers = config.headers;
  }

  getCards() {
    return fetch(`${this.url}/cards`, {
      method: 'GET',
      headers: this.headers
    })
    .then(handleResponse)
  }

  createCard(data) {
    return fetch(`${this.url}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then(handleResponse)
  }

  getOwnerInfo() {
    return fetch(this.url + `/users/me`, {
      method: 'GET',
      headers: this.headers
    })
    .then(handleResponse)
  }

  editProfile() {
    return fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
    .then(handleResponse)
  }
  
  editAvatar(data) {
    return fetch(`${this.url}/users/me/avatar`, {
      headers: this.headers,
      method: 'PATCH',
      body: JSON.stringify({
          avatar: data.avatar, 
      })
  })
    .then(handleResponse)
  }

  deleteCard(_id) {
    return fetch(`${this.url}/cards/${_id}`, {
      method: 'DELETE',
      headers: this.headers
    })
    .then(handleResponse)
  }

  addLike(_id) {
    return fetch(`${this.url}/cards/${_id}/likes`, {
      method: 'PUT',
      headers: this.headers
    })
    .then(handleResponse)
  }

  deleteLike(_id) {
    return fetch(`${this.url}/cards/${_id}/likes`, {
      method: 'DELETE',
      headers: this.headers
    })
    .then(handleResponse)
  }
}