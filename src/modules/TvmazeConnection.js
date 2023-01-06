export default class TvmazeConnection {
  constructor() {
    this.apiURL = 'http://api.tvmaze.com/search/shows?q=';
    this.specificMovieURL = 'http://api.tvmaze.com/lookup/shows?thetvdb=';
  }

  getMoviesByTopic = async (topic) => {
    const res = await fetch(`${this.apiURL}${topic}`);
    const data = await res.json();
    return data;
  };

  getSingleMovie = async (id) => {
    const res = await fetch(`${this.specificMovieURL}${id}`);
    const data = await res.json();
    return data;
  }
}
