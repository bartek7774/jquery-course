jQuery.noConflict();
jQuery(function ($) {
  $(function () {
    let cache;
    $('#execButton').click(function (e) {

      cache = cache ? cache : "*";
      $(cache).removeClass("highlight");
      let selector = $('#input').val();
      $(selector).addClass('highlight');
      cache = selector;
    });
  });
});