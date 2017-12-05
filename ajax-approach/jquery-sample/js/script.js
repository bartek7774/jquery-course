$(document).ready(function () {
  let urlCat = 'http://random.cat/meow';
  let res = $('#result');

  $('#ajax').click(function (e) {
    $.ajax({
      method: "GET",
      url: "https://baconipsum.com/api/?type=meat-and-filler",
      dataType: 'json'
    }).done(function (data) {
      res.html('');
      [].forEach.call(data, (x => {
        res.append($('<p></p>').text(x));
      }));
    }).fail(function (error) {
      console.log(error);
    });
  });

  $('#get').click(function (e) {
    $.get("https://baconipsum.com/api/?type=meat-and-filler")
      .done(function (data) {
        res.html('');
        [].forEach.call(data, (x => {
          res.append($('<p></p>').text(x));
        }));
      }).fail(function (error) {
        console.log(error);
      });
  });

  $('#post').click(function (e) {
    $.post("https://baconipsum.com/api/?type=meat-and-filler", {
      name: 'Bartek',
      age: 27
    })
      .done(function (data) {
        res.html('');
        [].forEach.call(data, (x => {
          res.append($('<p></p>').text(x));
        }));
      }).fail(function (error) {
        console.log(error);
      });
  });

  $('#json').click(function (e) {
    $.getJSON("https://baconipsum.com/api/?type=meat-and-filler")
      .done(function (data) {
        res.html('');
        [].forEach.call(data, (x => {
          res.append($('<p></p>').text(x));
        }));
      }).fail(function (error) {
        console.log(error);
      });
  });

  $('#next').click(function (e) {
    newImage();
  });
  $('#start').click(function (e) {
    newImageAuto();
  });

  $('#stop').click(function (e) {
    stopImage();
  });

  function getImage() {
    giphy.rating = ageSelect.val();
    giphy.tag = tagInput.val() == "" ? "fun" : tagInput.val();
    return new Promise((resolve, reject) => {
      $.getJSON(createUrl(giphy))
        .done(function (data) {
          renderImage(data.data.image_url).on('load', function (event) {
            resolve('ok');
          });
        }).fail(function (error) {
          console.log(error);
          reject(error);
        });
    });
  }

  function renderImage(image) {
    res.html('');
    let img = $("<img>");
    img.attr("src", image).appendTo(res);
    return img;
  }

  async function newImageAuto() {
    stopImage();
    $('#start').attr('disabled', 'disabled');
    $('#stop').attr('disabled', 'disabled');
    timespan = $('#seconds').val() * 1000;
    try {
      await getImage();
      $('#start').removeAttr('disabled');
      $('#stop').removeAttr('disabled');
    }
    catch (e) {
      res.append($('<p></p>').text(e));
    };
    refresh = setTimeout(() => {
      newImageAuto();
    }, timespan);
  }

  async function newImage() {
    stopImage();
    $('#next').attr('disabled', 'disabled');
    try {
      await getImage();
      $('#next').removeAttr('disabled');
    }
    catch (e) {
      res.append($('<p></p>').text(e));
    };
  }

  function stopImage() {
    clearTimeout(refresh);
  }

  const restricted = ['G', 'PG', 'PG-13', 'R', 'NC-17'];
  let tagInput = $('input[name=tag]');
  let secInput = $('input[name=seconds]');
  let ageSelect = $('select[name=age]');

  restricted.forEach(val => {
    ageSelect.append($('<option></option>').attr("val", val).text(val));
  });
  ageSelect.val(restricted[2]);

  let timespan;
  let refresh;

  const giphy = {
    baseURL: "https://api.giphy.com/v1/gifs/",
    key: "dc6zaTOxFJmzC",
    tag: "lovato",
    type: "random",
    rating: "pg-13"
  };

  function createUrl(giphy) {
    return encodeURI(
      giphy.baseURL +
      giphy.type +
      "?api_key=" +
      giphy.key +
      "&tag=" +
      giphy.tag +
      "&rating=" +
      giphy.rating
    );
  }
});
