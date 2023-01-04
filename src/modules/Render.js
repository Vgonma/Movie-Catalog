import emptyHeartIcon from '../img/empty_heart_icon.png';

export default class Render {
  constructor(parentElement) {
    this.parentElement = parentElement;
  }

  show = (list) => {
    let listItems = '';
    list.forEach((item) => {
      listItems += `\
      <li id="${item.show.externals.thetvdb}" class="card">\
        <img class="card-img" src=${item.show.image.medium}>
        <div class="card-info-container">
          <p class="card-title">${item.show.name}</p>
          <div class="card-likes-container">
            <img class="card-heart" src=${emptyHeartIcon} data-id=${item.show.externals.thetvdb}>
            <p class="card-likes-text">5 likes</p>
          </div>
        </div>
        <div class="card-buttons-container">
          <button type="button" class="card-button">Comments</button>
          <button type="button" class="card-button">Reservation</button>
        </div>    
      </li>`;
    });
    this.parentElement.innerHTML = listItems;
  };
}
