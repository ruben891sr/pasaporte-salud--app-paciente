// Slick Slider
function psSlickSlider() {
    $('.psAppPcte-inicio--slider-slick').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        arrows: false,
        cssEase: 'linear'
    });
}

// Show Detail History
function seeDetail() {
    $('.psAppPcte-historial--items-list-medicine-detailBar').click(function () {
        $(this).parent().siblings('.psAppPcte-historial--items-list-detail').toggleClass('showDetail');
        $(this).find('.psAppPcte-historial--items-list-medicine-detailBar-arrow > svg').toggleClass('rotateDetail');
    });
}

// Close Menu
function menuApp() {
    // Open
    $('.psAppPcte--header-menu > img').click(function () {
        $('.psAppPcte--header-menu-wrapper').addClass('showMenu');
    });
    // Close
    $('#close-menu').click(function () {
        $('.psAppPcte--header-menu-wrapper').removeClass('showMenu');
    });

}

// Grid
function gridLayout() {
    $('.psAppPcte-buscaMeds--filterBar-grid').click(function () {
        $(this).find('.showGrid').removeClass('showGrid').siblings().addClass('showGrid');
    });
    $('.psAppPcte-buscaMeds--filterBar-grid').click(function () {
        $('.psAppPcte-buscaMeds-farm-items').toggleClass('gridLayout');
    });
}

// Discount
function discountMeds() {
    $('.psAppPcte-buscaMeds-bottomBar-actions-dcto').click(function () {
        $('.psAppPcte-buscaMeds-bottomBar-detail').toggleClass('showDiscount');
    });
}

// Show Filter
function filterSlide() {
    // Open
    $('.psAppPcte-buscaMeds--filterBar-filter-button').click(function () {
        $('.psAppPcte-buscaMeds--filter').addClass('showFilter');
    });
    // Close
    $('.psAppPcte-buscaMeds--filterClose').click(function () {
        $('.psAppPcte-buscaMeds--filter').toggleClass('showFilter');
    });
}


$(function () {
    $("#accordion").accordion();
});

$(document).ready(function () {
    menuApp();
    psSlickSlider();
    seeDetail();
    gridLayout();
    filterSlide();
    discountMeds();
});