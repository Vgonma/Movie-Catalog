import commentCounter from './modules/commentCounter.js';

export default function createCommentsDOM(comments) {
  const commentSection = document.createElement('div');
  commentSection.classList.add('list-comments');
  if (comments.length > 0) {
    commentSection.innerHTML = `
        <h3 class="comment-title">Comments(Counting...)</h3>
        <div class="comments-container"></div>`;
    comments.forEach((comment) => {
      const com = document.createElement('p');
      com.classList.add('comment');
      com.innerHTML = `<span class="comment-user">${comment.username}</span><span class="comment-date">${comment.creation_date}</span>
          <span class="comment-text">${comment.comment}</span>`;
      commentSection.children[1].appendChild(com);
    });
    commentSection.children[0].textContent = `Comments(${commentCounter(
      commentSection.children[1],
    )})`;
    console.log(typeof(commentSection.children[1]));
  } else {
    commentSection.innerHTML = `
        <h3 class="comment-title">Comments(0)</h3>
        <div class="comments-container"></div>`;
  }
  return commentSection;
}
