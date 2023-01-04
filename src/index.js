import './style.css';
import TvmazeConnection from './modules/TvmazeConnection.js';
import Render from './modules/Render.js';
import InvolvementAPI from './modules/InvolvmentAPI';

const listElement = document.getElementById('items-list');
const tvMazeConnection = new TvmazeConnection();
const involvementConnection = new InvolvementAPI();
const render = new Render(listElement);

window.addEventListener('load', async () => {
  const itemsToRender = await tvMazeConnection.getMoviesByTopic('planet');
  render.show(itemsToRender);

  const commentButtons = document.querySelectorAll('.card-button');
  commentButtons.forEach((button) => {
    button.addEventListener('click', async () => {
      const popUp = document.createElement('article');
      popUp.classList.add('pop-up-container');
      const movieData = await tvMazeConnection.getSingleMovie(
        button.parentElement.parentElement.id,
      );
      const comments = await involvementConnection.getComments(
        button.parentElement.parentElement.id,
      );
      const commentSection = document.createElement('div');
      if (comments.length > 0) {
        commentSection.classList.add('list-comments');
        commentSection.innerHTML = `
        <h3 class="comment-title">Comments(${comments.length})</h3>`;
        comments.forEach((comment) => {
          const com = document.createElement('p');
          com.classList.add('comment');
          com.innerHTML = `${comment.creation_date}<br>${comment.username}: 
          ${comment.comment}`;
          commentSection.appendChild(com);
        });
      } else {
        commentSection.classList.add('list-comments');
        commentSection.innerHTML = `
        <h3 class="comment-title">Comments(0)</h3>`;
      }
      console.log(comments);
      popUp.innerHTML = `
      <section class="info-container scroll">
            <img class="cross" src="https://cdn-icons-png.flaticon.com/512/1828/1828774.png" alt="">
            <img class="meal-preview" src="${movieData.image.original}" alt="">
            <h2 class="meal-name">${movieData.name}</h2>
            <ul class="list-ingredients">
                <li class="ingredient">Language: ${movieData.language}</li>
                <li class="ingredient">Status: ${movieData.status}</li>
                <li class="ingredient">Release: ${movieData.premiered}</li>
                <li class="ingredient"><a href="${movieData.officialSite}" target="blank">Official Site</a></li>
            </ul>${commentSection.innerHTML}
            <form class="add-comment-form">
                <h3 class="add-comment-title" >Add a comment</h3>
                <input class="input-name" type="text" placeholder="Name" required>
                <textarea class="comment-area" placeholder="Leave a comment" required></textarea>
                <button class="submit-comment">Comment</button>
            </form>
        </section>`;
      const body = document.querySelector('body');
      body.appendChild(popUp);
      const closeCross = document.querySelector('.cross');
      closeCross.addEventListener('click', () => {
        body.removeChild(popUp);
        body.classList.remove('no-scroll');
      });
      body.classList.add('no-scroll');

      const submitComment = document.querySelector('.submit-comment');
      submitComment.addEventListener('click', (e) => {
        e.preventDefault();
        involvementConnection.postComment(
          button.parentElement.parentElement.id,
          document.querySelector('.input-name').value,
          document.querySelector('.comment-area').value,
        );
      });
    });
  });
});
