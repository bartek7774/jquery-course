
const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
const urlProfile = "https://randomuser.me/api";

let btn = document.querySelector('#nextUser');
let _fullName = document.querySelector('.fullname');
let _email = document.querySelector('.email');
let _username = document.querySelector('.username');
let _city = document.querySelector('.city');
let _image = document.querySelector('.image');

btn.addEventListener('click', function () {
  fetch(urlProfile)
    .then(handleErrors)
    .then(parseJSON)
    .then(upadateProfile)
    .catch(printError);
});

function parseJSON(data) {
  return data.json().then(json => {
    let {
      id: {
        name: username
      },
      email,
      name: {
        first: firstName,
        last: lastName
      },
      location: {
        city
      },
      picture: {
        large: image
      }
    } = json.results[0];

    return {
      username,
      firstName,
      lastName,
      email,
      city,
      image
    };
  })
}

function upadateProfile(profile) {

  _fullName.textContent = `${profile.firstName} ${profile.lastName}`;
  _email.textContent = profile.email;
  _username.textContent = profile.username;
  _city.textContent = profile.city;
  _image.src = profile.image;

}

function handleErrors(res) {
  if (!res.ok) {
    throw new Error(res.status);
  }
  return res;
}

function printError(error) {
  console.log(error.message);
}