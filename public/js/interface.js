$(document).ready(function () {
  var aToZButton = $('.a-to-z button');

  aToZButton.click(function () {
    $(this)
      .addClass('selected')
      .parent().siblings().children().removeClass('selected');
  });
});
