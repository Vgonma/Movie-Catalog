import './style.css';
import TvmazeConnection from './modules/TvmazeConnection.js';
import Render from './modules/Render.js';

const listElement = document.getElementById('items-list');
const tvMazeConnection = new TvmazeConnection();
const render = new Render(listElement);

window.addEventListener('load', async () => {
  const itemsToRender = await tvMazeConnection.getMoviesByTopic('planet');
  render.show(itemsToRender);
});
