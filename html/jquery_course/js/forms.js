$(document).ready(function () {
  console.log($('select[name=cars]').val());
  $('select[name=cars]').val('fiat');
  $('select[name=cars2]').val('saab');
  $('select[name=cars3]').val(['volvo', 'audi']);
});