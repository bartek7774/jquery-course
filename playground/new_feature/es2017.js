const fetch = require('node-fetch');
/*
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

 */

console.log(2 ** 5);
console.log("comments".includes('c'));
console.log([2, 3, 1, 3, 4, 9].includes(44));
console.log("-".padEnd(99, '-'));


let movieCollector = {
  data: 'titanic',
  async getMovie() {
    let response = await fetch(`http://www.omdbapi.com/?t=${this.data}&apikey=thewdb`).then(data => data.json());
    return response;
  }
}

// movieCollector.getMovie().then(({Released:movie}) => console.log(movie));

class MovieData {
  constructor(name) {
    this.name = name;
  }
  async getMovie() {
    try {
      let res = await fetch(`http://www.omdbapi.com/?t=${this.name}&apikey=thewdb`).then(data => data.json());
      return res;
    }
    catch (err) {
      throw Error(err.message);
    }
  }
}
// new MovieData('it').getMovie().then(({ Title, Released, Genre, imdbRating }) => {
//   console.log(Title, Released, Genre, imdbRating);
// }).catch(e => console.log('blad'));

let md1=new MovieData('it');
let md2=new MovieData('blade');

// async function getCommentData(first,second) {
//   let movies = await Promise.all([
//     first.getMovie(),
//     second.getMovie()]);
//   let filtered=movies.map(movie=>{return {title:movie.Title,rating:movie.imdbRating}});
//   console.log(filtered);
// }

async function getMoviesData(...moviesData) {
  let urls=moviesData.map(movie=>movie.getMovie());
  let movies = await Promise.all(urls);
  let filtered=movies.map(movie=>{return {title:movie.Title,genre:movie.Genre,rating:movie.imdbRating}});
  console.log(filtered);
}

// getMoviesData(md1,md2,new MovieData('twilight'));

let defaults={first:'Elie',last:'Schoppik',job:'Instructor',siblings:3};
let {first,last,...data}=defaults;
console.log(data);

let instructors2={...defaults,first:'Tim',last:'Garcia'};
let instructors3={...defaults,first:'Tom'};
console.log(instructors2,instructors3);