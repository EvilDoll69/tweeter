$(document).ready(function() {  


$(".input-tweet").keyup( function () { 

  let $counter = $('.counter'); //element not the var number 140
  $counter.text(140 - $(this).val().length); //this refers to input, val=value

  if ($(this).val().length > 140) {
    $counter.css("color", "red");
  }

});
});
