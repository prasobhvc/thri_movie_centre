(function() {
  'use strict';

  angular
    .module('movieCentre')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
