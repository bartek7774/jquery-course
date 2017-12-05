
let btn = document.querySelector('.btn');
let image=document.querySelector('#photo');
let price=document.querySelector('#price');

btn.addEventListener('click', function () {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        let url=JSON.parse(xhr.responseText).message;
        image.src=url;
      } else {
        console.log('There was a problem...');
      }
    }
  };
  xhr.open("GET", "http://dog.ceo/api/breeds/image/random");
  xhr.send();

  let xhr2 = new XMLHttpRequest();
  xhr2.onreadystatechange = function () {
    if (xhr2.readyState == 4) {
      if (xhr2.status == 200) {
        let {bpi:{USD:{rate:currentPrice,code}}}=JSON.parse(xhr2.responseText);
        price.innerHTML=`${currentPrice} ${code}`;
      } else {
        console.log('There was a problem...');
      }
    }
  };
  xhr2.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
  xhr2.send();
});