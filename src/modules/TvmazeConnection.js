export default class TvmazeConnection {
  constructor() {
    this.apiURL = 'http://api.tvmaze.com/search/shows?q=';
  }

  getMoviesByTopic = async (topic) => {
    const res = await fetch(`${this.apiURL}${topic}`);
    const data = await res.json();
    return data;
  };
}
