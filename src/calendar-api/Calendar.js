/**
 * An api to use the google calendar rest api.
 *
 * The node API requires OAuth2, and we only require simple access to the API as
 * we are accessing public calendar information. Therefore I have written this
 * api, which accessed the google rest api via fetch with only an API key.
 */
export default class Calendar {
  /**
   * @param {string} calendarId The id of the public calendar that the
   * application will access.
   * @param {string} apiKey The API key for google calendars specific to this
   * application. Used to gather analytics on the number of requests etc. to the
   * api through this app.
   */
  constructor (calendarId, apiKey) {
    this._baseUrl = 'https://www.googleapis.com/calendar/v3/' +
      'calendars/' + calendarId +
      '/events?key=' + apiKey
  }

  getAll () {
    return this._fetch()
  }

  getFuture () {
    return this._fetch({
      timeMin: new Date().toISOString()
    })
  }

  _urlWithQuery (query = {}) {
    const queryString = Object.entries(query)
      .map(([key, value]) => `&${key}=${value}`)
      .join('')

    return this._baseUrl + queryString
  }

  _fetch (query) {
    return new Promise((resolve, reject) => {
      window.fetch(this._urlWithQuery(query))
        .then(res => res.json())
        .then(resolve)
        .catch(reject)
    })
  }
}
