const axios = require('axios');

function displayAtRandomTime() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let r = Math.random();
      if (r > .5) {
        resolve(`Yes! ${r}`);
      } else {
        reject(`No! ${r}`);
      }
    }, 1000);
  });
}

// displayAtRandomTime()
//   .then(x => console.log(x))
//   .catch(e => console.log(e));

let url_full = 'http://www.omdbapi.com/?t=it&y=2017&apikey=thewdb';
let url = 'http://www.omdbapi.com/';

// axios.get(url)
// .then(x => console.log(x))
// .catch(e => console.log(e));

/*
getAxiosData(url,{params:{t:'it',y:'2017',apikey:'thewdb'}})
  .then(movie =>{
    console.log(movie);
    return getAxiosData(url,{params:{t:'shrek',apikey:'thewdb'}})
  })
  .then(movie=>console.log(movie))
  .catch(e => console.log(e));
*/

async function getAxiosData(url, params) {
  let { data: { Title: title, Genre: genre, Year: year } } = await axios.get(url, params);
  return {
    title,
    genre,
    year
  };
}

let array_promises = [];
array_promises.push(getAxiosData(url, { params: { t: 'shrek', apikey: 'thewdb' } }));
array_promises.push(getAxiosData(url, { params: { t: 'it', apikey: 'thewdb' } }));
array_promises.push(getAxiosData(url, { params: { t: 'titanic', apikey: 'thewdb' } }));

// Promise.all(array_promises)
//   .then(movies => {
//     movies.forEach(movie => {
//       console.log(movie);
//     });
//   })
//   .catch(err => console.log(err));

function getMostFollowers(...usernames) {
  let baseUrl = "https://api.github.com/users/";
  let urls = usernames.map(username => axios.get(baseUrl + username).then(res => res.data));
  return Promise.all(urls).then(function (data) {
    let max = data.sort((a, b) => a.followers < b.followers)[0];
    return `${max.name} has the most followers with ${max.followers}`;
  })
}

// getMostFollowers('elie', 'tigarcia', 'colt').then(data => console.log(data));

function starWarsString(id) {
  let str = '';
  return axios.get(`https://swapi.co//api/people/${id}/`)
    .then(extractData)
    .then(data => {
      str += `${data.name} is featured in `;
      let filmData = data.films[0];
      return axios.get(filmData).then(extractData);
    }).then(res => {
      str += `${res.title}, directed by ${res.director}`;
      let planetData = res.planets[0];
      return axios.get(planetData).then(extractData);
    }).then(res => {
      str += `and it takes place on ${res.name}.`;
      return str;
    }).then(finalString => {
      return finalString;
    });
}

// starWarsString(1).then(x=>console.log(x));

function extractData(response) {
  return response.data;
}


// Generators 
// use to pause asynchronous code

function* getMovieData(movieName){
  console.log('starting');
  yield axios.get(`http://www.omdbapi.com/?t=${movieName}&apikey=thewdb`).then(extractData);
  console.log('ending');
}

let movieGetter=getMovieData('titanic');
movieGetter.next().value.then(val=>console.log(val));