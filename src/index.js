import './style.css';
import './index.html';
import filledHeartIcon from './img/filled_heart_icon.png';
import TvmazeConnection from './modules/TvmazeConnection.js';
import Render from './modules/Render.js';
import InvolvementAPI from './modules/InvolvmentAPI.js';
import createCommentsDOM from './CreateCommentDOM.js';
import CardsCounter from './modules/CardsCounter.js';

const listElement = document.getElementById('items-list');
const itemsContainer = document.querySelector('.items-container');
const tvMazeConnection = new TvmazeConnection();
const involvementConnection = new InvolvementAPI();
const render = new Render(listElement);
const cardsCounter = new CardsCounter();

window.addEventListener('load', async () => {
  const itemsToRender = await tvMazeConnection.getMoviesByTopic('planet');
  const likes = await involvementConnection.getLikes();
  render.show(itemsToRender, likes);
  const cardsCount = cardsCounter.getCount(document);
  document.querySelector('.movies').textContent = `(${cardsCount})`;

  const commentButtons = document.querySelectorAll('.card-button');
  commentButtons.forEach((button) => {
    button.addEventListener('click', async () => {
      const popUp = document.createElement('article');
      popUp.classList.add('pop-up-container');
      const movieData = await tvMazeConnection.getSingleMovie(
        button.parentElement.parentElement.id,
      );
      let comments = await involvementConnection.getComments(
        button.parentElement.parentElement.id,
      );
      let commentSection = createCommentsDOM(comments);
      popUp.innerHTML = `
      <section class="info-container scroll">
            <img class="cross" src="https://cdn-icons-png.flaticon.com/512/1828/1828774.png" alt="">
            <img class="movie-preview" src="${movieData.image.original}" alt="">
            <h2 class="movie-name">${movieData.name}</h2>
            <ul class="list-ingredients">
                <li class="ingredient">Language: ${movieData.language}</li>
                <li class="ingredient">Status: ${movieData.status}</li>
                <li class="ingredient">Release: ${movieData.premiered}</li>
                <li class="ingredient"><a href="${movieData.officialSite}" target="blank">Official Site</a></li>
            </ul>
            <form class="add-comment-form">
                <h3 class="add-comment-title" >Add a comment</h3>
                <input class="input-name" type="text" placeholder="Name" required>
                <textarea class="comment-area" placeholder="Leave a comment" required></textarea>
                <button class="submit-comment">Comment</button>
            </form>
        </section>`;
      popUp.children[0].insertBefore(commentSection, popUp.children[0].children[4]);
      const body = document.querySelector('body');
      body.appendChild(popUp);
      const closeCross = document.querySelector('.cross');
      closeCross.addEventListener('click', () => {
        body.removeChild(popUp);
        body.classList.remove('no-scroll');
      });
      body.classList.add('no-scroll');

      const submitComment = document.querySelector('.add-comment-form');
      submitComment.addEventListener('submit', async (e) => {
        e.preventDefault();
        const movieId = button.parentElement.parentElement.id;
        const name = document.querySelector('.input-name');
        const comment = document.querySelector('.comment-area');
        await involvementConnection.postComment(movieId, name.value, comment.value);
        name.value = '';
        comment.value = '';

        comments = await involvementConnection.getComments(
          button.parentElement.parentElement.id,
        );
        commentSection = createCommentsDOM(comments);
        const oldComments = document.querySelector('.list-comments');
        oldComments.replaceWith(commentSection);
      });
    });
  });
});

itemsContainer.addEventListener('click', async (e) => {
  const { target } = e;
  const classList = [...target.classList];
  if (classList.includes('card-heart')) {
    const { id } = target.dataset;
    target.classList.add('heart-beat');
    const resStatus = await involvementConnection.postLike(id);
    if (resStatus === 201) {
      target.src = filledHeartIcon;
      const likesCounter = target.nextElementSibling.firstElementChild;
      const newCount = parseInt(likesCounter.textContent, 10) + 1;
      likesCounter.textContent = newCount;
    }
    target.classList.remove('heart-beat');
  }
});
