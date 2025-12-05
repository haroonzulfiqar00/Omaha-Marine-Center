// Navigation Menu Interactions
$(document).ready(function() {

    // Mega Menu Toggle
    $('.nav-link[data-menu]').on('click', function(e) {
        e.preventDefault();
        const menuId = $(this).data('menu');
        const $targetMenu = $('#menu-' + menuId);
        const $allMenus = $('.mega-menu');
        const $overlay = $('.menu-overlay');

        // Close all other menus
        $allMenus.not($targetMenu).removeClass('active');

        // Toggle current menu
        if ($targetMenu.hasClass('active')) {
            $targetMenu.removeClass('active');
            $overlay.removeClass('active');
        } else {
            $targetMenu.addClass('active');
            $overlay.addClass('active');
        }
    });

    // Resources Sidebar Toggle
    $('.nav-resources-btn').on('click', function() {
        const $sidebar = $('#sidebar-resources');
        const $overlay = $('.menu-overlay');
        const $allMenus = $('.mega-menu');

        // Close all mega menus
        $allMenus.removeClass('active');

        // Toggle sidebar
        $sidebar.toggleClass('active');
        $overlay.toggleClass('active');
    });

    // Close Resources Sidebar
    $('.resources-close-btn').on('click', function() {
        const $sidebar = $('#sidebar-resources');
        const $overlay = $('.menu-overlay');

        $sidebar.removeClass('active');
        $overlay.removeClass('active');
    });

    // Close menus when clicking overlay
    $('.menu-overlay').on('click', function() {
        $('.mega-menu').removeClass('active');
        $('.resources-sidebar').removeClass('active');
        $(this).removeClass('active');
    });

    // Close menus on ESC key
    $(document).on('keyup', function(e) {
        if (e.key === 'Escape') {
            $('.mega-menu').removeClass('active');
            $('.resources-sidebar').removeClass('active');
            $('.menu-overlay').removeClass('active');
        }
    });

    // Mobile Menu Toggle
    $('.mobile-menu-toggle').on('click', function() {
        const $sidebar = $('#sidebar-resources');
        const $overlay = $('.menu-overlay');

        $sidebar.toggleClass('active');
        $overlay.toggleClass('active');

        // Animate hamburger icon
        $(this).toggleClass('active');
    });

    // Prevent menu close when clicking inside mega menu
    $('.mega-menu').on('click', function(e) {
        e.stopPropagation();
    });

    // Prevent sidebar close when clicking inside sidebar
    $('.resources-sidebar').on('click', function(e) {
        e.stopPropagation();
    });

    // Browse by Category Carousel
    $('.category-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 800,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        touchDrag: true,
        mouseDrag: true,
        pullDrag: true,
        freeDrag: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });

    // Testimonials Carousel
    $('.testimonials-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        center: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 600,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1,
                margin: 10,
                center: false
            },
            768: {
                items: 2,
                margin: 20,
                center: false
            },
            992: {
                items: 3,
                margin: 30,
                center: true
            }
        }
    });

    // Footer Accordion Functionality
    $('.accordion-header').on('click', function() {
        const $this = $(this);
        const target = $this.data('target');
        const $content = $(target);

        // Check if this accordion has content
        if ($content.length > 0) {
            // Toggle the collapsed class on the button
            $this.toggleClass('collapsed');

            // Toggle the content
            $content.collapse('toggle');
        }
    });

    // Initially set all accordion headers as collapsed
    $('.accordion-header').addClass('collapsed');

    // Smooth scroll for anchor links (Trade/Consign page)
    // Exclude Bootstrap tabs and other data-toggle elements
    $('a[href^="#"]').not('[data-toggle]').on('click', function(e) {
        var target = $(this.getAttribute('href'));
        if(target.length) {
            e.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 1000);
        }
    });

    // Video Brand Filter Functionality
    $('.video-brand-tab').on('click', function() {
        const selectedBrand = $(this).data('brand');

        // Update active state
        $('.video-brand-tab').removeClass('active');
        $(this).addClass('active');

        // Filter videos
        if (selectedBrand === 'all') {
            $('.video-card').removeClass('hidden').fadeIn(300);
        } else {
            $('.video-card').each(function() {
                const videoBrand = $(this).data('brand');
                if (videoBrand === selectedBrand) {
                    $(this).removeClass('hidden').fadeIn(300);
                } else {
                    $(this).fadeOut(300, function() {
                        $(this).addClass('hidden');
                    });
                }
            });
        }
    });

    // Video play functionality
    $('.video-thumbnail').on('click', function() {
        const video = $(this).find('video')[0];
        const overlay = $(this).find('.video-play-overlay');

        if (video.paused) {
            video.play();
            overlay.fadeOut(300);
        } else {
            video.pause();
            overlay.fadeIn(300);
        }
    });

    // Reset overlay when video ends
    $('.video-player').on('ended', function() {
        $(this).siblings('.video-play-overlay').fadeIn(300);
    });

});
