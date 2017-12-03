// global function that encapsulates jQuery API
// aliased with $ symbol jQuery('div')==$('div')
// jQuery function is overloaded:
// passing a selector (support CSS1..3 selectors)
// passing an HTML string


// invokes callback function when DOM is loaded but before images are loaded
// browsers fire event DOMContentLoaded but it is invoked after iamges are loaded
// formal syntax
$(document).ready(function () {
  // set zebra coloring for table(for older browers without CSS3 support too)
  $("table tr:odd").css("background-color", "#ccffcc");
  $("#expandotable tr td:nth-child(2)").click(function () {
    $(this).find("span:first").toggle();
  });
  $("#today").text(new Date().getTime());
  $("h2, h3").css("color", "#789");
  let colors = ["lightblue", "lightgreen", "lightyellow", "#ffccff", "lavender"];
  // $('table tr').each(function(i){
  //   $(this).css("background-color",colors[i%colors.length]);
  // });

  $('table tr').css("background-color", function (i) {
    return colors[i % colors.length];
  });
  // setInterval(function(){
  //   $("#output").text(new Date().getSeconds());
  // },1000);
  let myTime,x=0;
  countDown();
  function countDown() {
    if (x > 5) {
      clearTimeout(myTime);
    }
    else {
      myTime=setTimeout(() => {
        x++;
        $("#today").text(new Date().getSeconds());
        countDown();
      }, 1000);
    }
  }
  $('#toggleStyle').click(() => {
    $('table').toggleClass('table');
  });

  // $('h2').before('<hr/>').after('<hr/>');
  $('h2').each(function (i) {
    let oldHeader = $(this);
    oldHeader.replaceWith($("<h1>").html(oldHeader.html()).css('color', () => colors[(i + 3) % colors.length]));
  });
  let list = $('select');
  list.append($('<option>').val('fiat').text('Fiat 126p'));
  list.append($('<option>').val('garbi').text('Garbus'));
});
// shorthand form
// $(function(){
// });

