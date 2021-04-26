export class HTTPApi {
  static _apiKey = '';
  static _apiAddress = '';
  static _isInitialized = false;

  static init({ apiAddress, apiKey }) {
    if (apiAddress) {
      HTTPApi._apiKey = apiKey || '';
      HTTPApi._apiAddress = apiAddress;
      HTTPApi._isInitialized = true;
    }
  }

  _request(method, path, body) {
    let headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const options = { method, headers };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const url = `${HTTPApi._apiUrl}/${path}`;

    return fetch(url, options).then(this._json);
  }

  _json(res) {
    if (res.status === 200) {
      return res.json();
    } else {
      const error = new Error(`Network error with status: ${res.status}`);
      error.response = res;
      throw error;
    }
  }

  _get(url) {
    return this._request('GET', url);
  }

  _post(url, body) {
    return this._request('POST', url, body);
  }

  _put(url, body) {
    return this._request('PUT', url, body);
  }

  _delete(url) {
    return this._request('DELETE', url);
  }
}
