$(document).ready(function () {
  $("li").click(function (event) {
    let target = event.target;
    console.log(event.target);
  });
  $('tr').mouseenter(function (e) {
    $(this).css("background-color", "yellow");
  }).mouseleave(function (e) {
    $(this).css("background-color", "white");
  });
  $('#campus').change(function (e) {
    console.log($(this).val());
  });
  // $("td").click(function (e) {
  //   e.stopPropagation();
  //   console.log(e.which);
  // });
  // $('table').click(function (e) {
  //   console.log('tab' + e.which);
  // });
  $('a').click(function (e) {
    e.preventDefault();
  });
  // $('document').bind("mousewheel", function (e) { });
  $("tr").each(function (i) {
    $(this).bind("click", { "index": i }, function (e) {
      let index = e.data.index;
      console.log(index);
    });
  });
  // unbind all events added by jQuery
  // $("*").unbind();
  // scope to event handlers (for plugins)
  $('p').bind('click.wintellect', function (e) {
    alert("click");
  });
  $('p').unbind('click.wintellect');

  // register a one-time handler for click events fired by p
  $('p').one('click', function (e) {
    alert('hello and goodbye');
  });
  $("table").toggle(
    function (e) {
      $(this).css('color', 'red');
    },
    function (e) {
      $(this).css('color', 'green');
    }
  );
  $(document).on("login", {
    foo: "bar"
  }, function (event, arg1, arg2) {
    console.log(event.data.foo); // "bar"
    $('h2').text(`${arg1} ${arg2}`);
  });
  $('input:button').on('click', function (e) {
    $(document).trigger("login", ["bim", "baz"]);
  });
});