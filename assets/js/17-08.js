$(".blog-nav__menu .blog-nav__link").click(function () {
    $(".blog-nav__menu").toggleClass("_open")
})

$(document).mouseup( function(e){
    let div = $( ".blog-nav__menu" );
    if ( !div.is(e.target)
        && div.has(e.target).length === 0 ) {
        if($(div).hasClass("_open")){
            $(div).removeClass("_open")
        }
    }
});


$("._toggle-search").click(function () {
    $(this).parents(".m-search").toggleClass("_open")
})

$(document).mouseup( function(e){
    let div = $( ".m-search" );
    if ( !div.is(e.target)
        && div.has(e.target).length === 0 ) {
        if($(div).hasClass('_open')){
            $(div).removeClass('_open');
        }
    }
});
