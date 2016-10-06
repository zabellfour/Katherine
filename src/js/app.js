import HP from './modules/helpers';

(function($) {

    // When DOM is ready
    $(function() {
        smoothScroll.init({
            selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
            selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
            speed: 500, // Integer. How fast to complete the scroll in milliseconds
            easing: 'easeInOutCubic', // Easing pattern to use
            offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
            callback: function(anchor, toggle) {} // Function to run after scrolling
        });
    });

    $(document).ready(function() {
        $('.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            dots: false,
            nav: true
        });
    });

    $(function() {
        $('.arr-align').matchHeight(options);
    });

}(jQuery));
