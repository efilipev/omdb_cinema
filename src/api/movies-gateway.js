import { HTTPApi } from './http-api';

export class MoviesGateway extends HTTPApi {
  static getInstance() {
    if (!MoviesGateway._isInitialized) {
      throw new Error('MoviesGateway is not initialized');
    }
    return new MoviesGateway();
  }

  async getMovies(ids) {
    const urls = [];
    if (Array.isArray(ids)) {
      for (const id of ids) {
        urls.push(
          fetch(
            `${MoviesGateway._apiAddress}/?i=${id}&apikey=${MoviesGateway._apiKey}`
          )
        );
      }
    }
    const responses = await Promise.all(urls);
    return await Promise.all(responses.map((r) => r.json()));
  }
}
