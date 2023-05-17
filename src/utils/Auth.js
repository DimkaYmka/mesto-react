const authOptions = {
  baseUrl: 'https://auth.nomoreparties.co',
  headers: {
    Accept: 'application/json',
    ContentType : 'application/json'
  }
}

class Auth {
  
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

  register(email, password) {
    // console.log(email, password);
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({email, password})
    }).then(this._getResponse);

    
  }


}

const auth = new Auth(authOptions);

export default auth