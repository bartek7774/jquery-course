let root = 'https://jsonplaceholder.typicode.com/comments';
let comments = document.querySelector('#comments');
let numId = document.querySelector('#id');
let button_xhr = document.querySelector('#xhr');
let button_jquery = document.querySelector('#jquery');
let button_fetch = document.querySelector('#fetch');
let button_axios = document.querySelector('#axios');
let id = 10;

numId.addEventListener('change', function (event) {
  id = event.target.value;
});

function createUrl(root, id) {
  return `${root}` + ((!!id) ? `/${id}` : '');
}

button_xhr.addEventListener('click', function (event) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        let json = JSON.parse(xhr.response.substring(xhr.response.indexOf('{') - 1));
        addComment(json);
      } else {
        console.log('There was a problem...');
      }
    }
  };

  xhr.open("GET", createUrl(root, id));
  xhr.send();

});

button_jquery.addEventListener('click', function (event) {
  $.ajax({
    method: "GET",
    url: createUrl(root, id),
    dataType: 'json'
  }).done(function (data) {
    addComment(data);
  }).fail(function (error) {
    console.log(error);
  });
});

button_fetch.addEventListener('click', function (event) {
  fetch(createUrl(root, id))
    .then(handleErrors)
    .then(parseJSON)
    .then(addComment)
    .catch(printError);
});

button_axios.addEventListener('click', function (event) {
  getJSONbyAxios(createUrl(root, id))
    .then((feedback) => console.log(feedback))
    .catch(printError);
});

//Fetch
function handleErrors(res) {
  if (!res.ok) {
    throw new Error(res.status);
  }
  return res;
}

function printError(error) {
  console.log(error.message);
}
function parseJSON(response) {
  return response.json();
}

// Axios
async function getJSONbyAxios(url, id) {
  try {
    let response = await axios.get(url, { params: { id } });
    addComment(response.data);
    let len = Array.isArray(response.data) ? response.data.length : 1;
    return `Fetched ${len} records`;
  }
  catch (error) {
    if (error.response) {
      throw new Error('Problem with response: ', error.response.status);
    } else if (error.request) {
      throw new Error('Problem with request: ', error.request.status);
    } else {
      throw new Error(error.message);
    }
  }
}

function addComment(data) {
  if (Array.isArray(data)) {
    data.forEach(comment => {
      appendComment(comment);
    })
  }
  else {
    appendComment(data);
  }
}

function appendComment(comment) {
  let newP = document.createElement("p");
  newP.innerHTML = `${comment.email}`;
  comments.appendChild(newP);
}