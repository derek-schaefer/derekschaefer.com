$(document).ready(function () {
  $('[aria-label="Close"]').on('click', function () {
    $(this).closest('.window').hide();
  });

  $('[aria-label="Maximize"]').on('click', function () {
    $(this).closest('.window').toggleClass('maximize');
  });

  $('[aria-label="Minimize"]').on('click', function () {
    $(this).closest('.window').toggleClass('minimize');
  });
});
