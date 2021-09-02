/* eslint-disable */
(function ($, win) {
  $.fn.percentAboveBottom = function (cb) {
    return this.each(function (i, el) {
      function visPx() {
        const elH = $(el).outerHeight();
        const H = $(win).height();
        const r = el.getBoundingClientRect();
        const t = r.top;
        const dist = H > t ? t - H : 0;
        const distInPercent = Math.abs(dist / elH);
        return cb.call(el, Math.min(distInPercent, 1), i);
      }

      visPx();

      $(win).on('resize.percentAboveBottom scroll.percentAboveBottom', visPx);
    });
  };
})(jQuery, window);
/* eslint-enable */
