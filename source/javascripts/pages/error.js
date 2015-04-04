(function() {

  window.Pages.Error = function() {

    var maxDelay = 0;

    $('[data-delay]').each(function() {
      var $e = $(this);
      var delay = parseInt($e.data('delay'));

      if (delay > maxDelay) {
        maxDelay = delay;
      }

      setTimeout(function() {
        $e.removeClass('hidden');
      }, delay);
    });

    setTimeout(function() {
      window.location = '/';
    }, maxDelay + 2500);

  };

})();
