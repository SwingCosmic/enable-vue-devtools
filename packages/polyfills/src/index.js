import '../vendor/gm4-polyfill/gm4-polyfill.js'
import 'regenerator-runtime';

(function () {
  if(typeof unsafeWindow === 'object' && unsafeWindow) {
    unsafeWindow.GM = this.GM
  }
}).call(window);
