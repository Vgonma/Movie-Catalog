/**
 * @jest-environment jsdom
 */
import commentCounter from '../src/modules/commentCounter.js';

const mockFetchComments = () => {
  const comments = [
    {
      comment: 'This is nice!',
      creation_date: '2021-01-10',
      username: 'John',
    },
    {
      comment: 'Great content!',
      creation_date: '2021-02-10',
      username: 'Jane',
    },
  ];
  return comments;
};
const mockFetchCommentsDataless = () => {
  const comments = [
    {
      comment: '',
      creation_date: '',
      username: '',
    },
    {
      comment: '',
      creation_date: '',
      username: '',
    },
  ];
  return comments;
};
const mockFetchCommentsEmpty = () => [];

describe('Comment variations', () => {
  test('Correct comments counted', () => {
    const comments = mockFetchComments();
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
    }
    expect(commentCounter(commentSection.children[1])).toBe(mockFetchComments().length);
  });

  test('Empty comments', () => {
    const comments = mockFetchCommentsEmpty();
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
    }
    expect(commentCounter(commentSection.children[1])).toBe(0);
  });

  test('Dataless comments', () => {
    const comments = mockFetchCommentsDataless();
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
    }
    expect(commentCounter(commentSection.children[1])).toBe(2);
  });
});

describe('Wrong parameters', () => {
  test('Empty string', () => {
    expect(commentCounter('')).toBe(0);
  });

  test('No parameter', () => {
    expect(commentCounter()).toBe(0);
  });

  test('Number', () => {
    expect(commentCounter(5)).toBe(0);
  });
});
