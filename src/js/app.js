import HP from './modules/helpers';

(function($) {

    // When DOM is ready
    $(function() {
          smoothScroll.init({
        selector: '.smooth',
        offset: 40,
        speed: 1000
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
        $('.arr-align').matchHeight({});
    });

}(jQuery));
