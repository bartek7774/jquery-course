const { XMLHttpRequest } = require('xmlhttprequest');

const states = [
  "Client has been created. open() not called yet.",
  "open() has been called.",
  "send() has been called, and headers and status are available.",
  "	Downloading; responseText holds partial data.",
  "The operation is complete."
]

let xhr = new XMLHttpRequest();
console.log(`State: ${xhr.readyState} - ${states[xhr.readyState]}`);
xhr.onreadystatechange = function () {
  console.log(`State: ${xhr.readyState} - ${states[xhr.readyState]}`);
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
      console.log(`\n\tResposne: ${xhr.responseText}`);
    } else {
      console.log('There was a problem...');
    }
  }
};

xhr.open("GET", "https://api.github.com/zen");
xhr.send();