import './style.css';
import emptyHeartIcon from './img/empty_heart_icon.png';

const listElement = document.getElementById('items-list');
const apiURL = 'http://api.tvmaze.com/search/shows?q=';

const getMealsByIngredient = async (topic) => {
  const res = await fetch(`${apiURL}${topic}`);
  const data = await res.json();
  console.log(data);
  return data;
};

const render = (list, parentElement) => {
  let listItems = '';
  list.forEach((item) => {
    listItems += `\
    <li class="card">\
      <img class="card-img" src=${item.show.image.medium}>
      <div class="card-info-container">
        <p class="card-title">${item.show.name}</p>
        <div class="card-likes-container">
          <img class="card-heart" src=${emptyHeartIcon}>
          <p class="card-likes-text">5 likes</p>
        </div>
      </div>
      <div class="card-buttons-container">
        <button type="button" class="card-button">Comments</button>
        <button type="button" class="card-button">Reservation</button>
      </div>    
    </li>`;
  });
  parentElement.innerHTML = listItems;
};

window.addEventListener('load', async () => {
  const itemsToRender = await getMealsByIngredient('girls');
  render(itemsToRender, listElement);
});
