const fetch = require('node-fetch');

const root = 'https://jsonplaceholder.typicode.com/comments';
function createUrl(root, id) {
  return `${root}` + ((!!id) ? `/${id}` : '');
}

async function getCommentData() {
  let comments = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/comments/1').then(res => res.json()),
    fetch('https://jsonplaceholder.typicode.com/comments/11').then(res => res.json())]);

  console.log(comments[0].email);
  console.log(comments[1].email);
}
//  fetch(root).then(data=>data.json()).then(re=>console.log(re));
// getCommentData();

