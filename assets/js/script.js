$(document).ready(function () {
    $('select').styler();
    $(".phone").mask('+7 (999)-999-99-99');
})


$('.menu-href h3').on('click', function (e) {
    $(this).parent().toggleClass('menu-href-active')
});


$(document).ready(function () {
    setTimeout(function () {
        $("header").addClass("in-viewport");
        $(".anim-style").addClass("in-viewport");

    }, 500);
});



$(document).ready(function () {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 200,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});







let $animation_element = $('.anim-newSing');
let $window = $(window);
function check_if_in_view() {
    let window_height = $window.height();
    let window_top_position = $window.scrollTop();
    let window_bottom_position = ( window_height + window_top_position );
    $.each($animation_element, function() {
        let $element = $(this);
        let element_height = $element.outerHeight();
        let element_top_position = $element.offset().top;
        let element_bottom_position = (element_height + element_top_position);
        if((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
        }
    });
}
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');












$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if ($(this).hasClass('close-menu')) {
            $('header').addClass('header-active');
            $('body').addClass('body_fix');
        } else {
            $('header').removeClass('header-active');
            $('body').removeClass('body_fix');
        }
    });
});

let generaSwiper = new Swiper(".generations-slider", {
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    navigation: {
        nextEl: ".generations-button-next",
        prevEl: ".generations-button-prev",
    },
});





let completedSwiper = new Swiper(".completed-projects-slider", {
    slidesPerView: 3,
    // loop: true,
    speed: 1000,
    spaceBetween: 14,
    breakpoints: {
        '1299': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 14,
        },
        '760': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 6,
        },
    },
    navigation: {
        nextEl: ".completed-button-next",
        prevEl: ".completed-button-prev",
    },
});



$('.completed-button-prev').on('click',function () {
    $('.completed-projects__cnt').addClass('completed-projects-act');
});

$('.completed-button-next').on('click',function () {
    $('.completed-button-prev').addClass('completed-button-active')
    $('.completed-projects__cnt').addClass('completed-projects-act')
});


$('.solutions__box').on('click', function () {
    $('.solutions__box').removeClass('solutions__active')
    $(this).addClass('solutions__active');
});



let solutionsSwiper = new Swiper(".solutions__slider", {
    slidesPerView: 1,
    spaceBetween: 3,
    speed: 1000,
    pagination: {
        el: ".solutions-pagination",
        clickable: true,
    },
});



let glassSwiper = new Swiper(".this-glass-slider", {
    slidesPerView: 2,
    spaceBetween: 14,
    loop: true,
    speed: 1000,
    breakpoints: {
        '1199': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 14,
        },
        '760': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
    },
    navigation: {
        nextEl: ".this-glass-next",
        prevEl: ".this-glass-prev",
    },
});


$(function () {
    let Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        let links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };
    Accordion.prototype.dropdown = function (e) {
        let $el = e.data.el;
        $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        if (!e.data.multiple) {

            $el.find('.submenu').not($next).slideUp();
        }
        if (!$this.hasClass('open')) {
            $('.link').each(function () {
                $(this).removeClass('open')
            })
            $this.addClass('open')
        } else {
            $this.removeClass('open')
        }
    }
    let accordion = new Accordion($('#accordion'), false);
});




let interestedSwiper = new Swiper(".interested-slider", {
    slidesPerView: 4,
    spaceBetween: 27,
    loop: true,
    speed: 1000,
    breakpoints: {
        '1199': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 27,
        },
        '760': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
    },
    navigation: {
        nextEl: ".interested-button-next",
        prevEl: ".interested-button-prev",
    },
    pagination: {
        el: ".interested-pagination",
        clickable: true,
    },
});



let productiondSwiper = new Swiper(".production-slider", {
    slidesPerView: 3,
    spaceBetween: 12,
    loop: true,
    speed: 1000,
    breakpoints: {
        '1199': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 12,
        },
        '760': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 12,
        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 12,
        },
    },
    navigation: {
        nextEl: ".production-next",
        prevEl: ".production-prev",
    },

});



let missionSwiper = new Swiper(".our-mission-slider", {
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    navigation: {
        nextEl: ".mission-next",
        prevEl: ".mission-prev",
    },
    pagination: {
        el: ".mission-pagination",
        clickable: true,
    },
});




let historySwiper = new Swiper(".our-history-slide", {
    direction: "horizontal",
    slidesPerView: "auto",
    slideToClickedSlide: true,
    speed: 1000,
    freeMode: true,
    navigation: {
        nextEl: ".history-button-next",
        prevEl: ".history-button-prev",
    },
});

if($('.open-filter-mobile')){
    $('.open-filter-mobile').on('click',function () {
        $('.catalog__left').addClass('catalog-filter-active')
    });
}
$('.close-filter').on('click',function () {
    $('.catalog__left').removeClass('catalog-filter-active')
});



$('.project-cnt-open').on('click', function (e) {
    e.stopPropagation();
    $('.project-cnt-box').removeClass('project-cnt-active');
    $(this).parent().toggleClass('project-cnt-active');
});


$('.project-cnt-drop').on('click', function (e) {
    e.stopPropagation();
});


$(window).on('click', function (e) {
    let menuSort = $('.project-cnt-box');
    if (e.target !== menuSort) {
        menuSort.removeClass('project-cnt-active')
    }
});


$('.expand-table-remove').on('click', function () {
    $(this).toggleClass('expand-table-act')
    $('.comparison__table').toggleClass('comparison-table-add')
});

$('.thickness-expand').on('click', function () {
    $(this).toggleClass('expand-table-act')
    $('.thickness__table').toggleClass('thickness-table-add')
});










$(document).ready(function () {
    addActiveClass('catalog__menu', 'catalog-menu-href');
    changeCaseBlock(this, 'catalog__menu', 'catalog-min', 'catalog-menu-href', 'catalog-tab-click');
    $('.catalog-tab-click').on('click', function () {
        changeActiveClassWithClick(this, 'catalog__menu', 'catalog-menu-href')
        changeCaseBlock(this, 'catalog__menu', 'catalog-min', 'catalog-menu-href', 'catalog-tab-click');
    })


    function addActiveClass(parent_menu, active_class) {
        let prt = $('.' + parent_menu);
        let prt_childrens = $(prt).children();
        let prt_child_li = $(prt_childrens).children();
        let first_child = $(prt_child_li)[0]
        if (!$(first_child).hasClass(active_class)) {
            !$(first_child).addClass(active_class)
        }
    }
    function changeActiveClassWithClick($this, parent_block, active_class) {
        let prt = $($this).parents('.' + parent_block);
        let prt_child = $(prt).find('li');
        $(prt_child).each(function () {
            $(this).removeClass(active_class);
        })
        $($this).addClass(active_class);
    }
    function changeCaseBlock($this, case_menu, case_block, active_class, menu_link) {
        let case_menu_block = $('.' + case_menu);
        let case_block_sub = $('.' + case_block);
        let case_block_child = $(case_block_sub).children();
        $(case_block_child).each(function () {
            $(this).css({display: 'none', height: 0});
        })

        if ($($this).hasClass(menu_link)) {
            let this_attr = $($this).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') === this_attr) {
                    $(this).css({display: 'block', height: '100%'});
                }
            })

        } else {
            let active_find = $(case_menu_block).find('.' + active_class);
            let active_find_attr = $(active_find).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') === active_find_attr) {
                    $(this).css({display: 'block', height: '100%'});

                }
            })
        }
    }




});



let a = 0;
$(window).scroll(function () {
    const el = $(".about-company__line");
    let oTop = el?.offset()?.top - window.innerHeight;
    if (a === 0 && $(window).scrollTop() > oTop) {
        $(".counter").each(function () {
            let $this = $(this),
                countTo = $this.attr("data-number");
            $({
                countNum: $this.text()
            }).animate(
                {
                    countNum: countTo
                },
                {
                    duration: 1300,
                    easing: "swing",
                    step: function () {
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                    },
                    complete: function () {
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                    }
                }
            );
        });
        a = 1;
    }
});
