$(document).ready(function () {
  var aToZButton = $('.a-to-z button');

  aToZButton.click(function () {
    $(this)
      .addClass('selected')
      .parent().siblings().children().removeClass('selected');
      
    $('.page-count p').removeClass('selected-page');
  });

  $(document).on('click', '.page-count p', function () {
    $(this)
      .addClass('selected-page')
      .parent().siblings().children().removeClass('selected-page');
  });
});
