///<reference path="~/Scripts/Site.js">
///<reference path="~/Plugins/jQuery-2.0.3/jquery-2.0.3.js">
///<reference path="~/Plugins/jQueryUI-1.10.3/ui/jquery-ui.js">

var minMainContentHeight = 780;

$(document).ready(function () {
    $('.featured-content-link').click(function () {
        var oldId = $('.selected-featured-content').data('id');
        var newId = $(this).data('id');

        $('.selected-featured-content').removeClass('selected-featured-content');
        $(this).addClass('selected-featured-content');

        lazyLoadImages(newId);

        $(oldId).hide();
        $(newId).show();

        setStyleOfContent();
        setSizeOfContent();
        //setBackground();
    });

    $('.nrdc-home-tab').click(function () {
        var currentTab = $('.selected-nrdc-home-tab');
        var newContentId = $(this).data('select');

        $('#' + currentTab.data('select')).hide();

        $('#' + newContentId).show();

        currentTab.removeClass('selected-nrdc-home-tab');
        $(this).addClass('selected-nrdc-home-tab');

        setStyleOfContent();
        setSizeOfContent();
    });

    var featuredPickContentId = $('.selected-featured-content').data('id');

    lazyLoadImages(featuredPickContentId);

    setStyleOfContent();
    setSizeOfContent();
});

$(window).resize(function () {
    setStyleOfContent();

    setSizeOfContent();
});

function lazyLoadImages(selectedContentId) {
    //Load any images setup for lazy loading
    var images = $(selectedContentId).find('.lazy-load');
    $.each(images, function (index, image) {
        //Get the image
        var imageUrl = $(image).data('src');

        //Load the image
        $(image).attr('src', imageUrl);

        //Remove the class so we don't have to lazy load it again
        $(image).removeClass('lazy-load');
    });
}

function setSizeOfContent() {

}

function setStyleOfContent() {
    if ($(window).innerWidth() < 768) {
        if (!$('.nrdc-home').hasClass('nrdc-home-xs')) {
            $('.nrdc-home').addClass('nrdc-home-xs');

            $('.nrdc-home-content').addClass('nrdc-home-content-xs');
            $('.nrdc-home-content').show();
        }
    } else {
        if ($('.nrdc-home').hasClass('nrdc-home-xs')) {
            $('.nrdc-home').removeClass('nrdc-home-xs');

            $('.nrdc-home-content').removeClass('nrdc-home-content-xs');
            $('.nrdc-home-content').hide();

            $('#' + $('.selected-nrdc-home-tab').data('select')).show();
        }
    }
}