import api_key from "../data/api_key.js";

class Api {
  constructor(base_url, api_key) {
    this.base_url = base_url;
    this.api_key = api_key;
  }

  async makeRequest(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  searchGifs(string, limit = 9, offset = 0) {
    return this.makeRequest(
      `${this.base_url}/search?api_key=${api_key}&q=${string}&limit=${limit}&offset=${offset}`
    );
  }

  trendingGifs(limit = 9) {
    return this.makeRequest(
      `${this.base_url}/trending?api_key=${api_key}&limit=${limit}`
    )
  }

  randomGif() {
    return this.makeRequest(
      `${this.base_url}/random?api_key=${api_key}`
    )
  }
}

export const api = new Api("https://api.giphy.com/v1/gifs", api_key);
