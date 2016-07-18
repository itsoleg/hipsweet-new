$(document).ready(function () {

    //tabs
    (function () {

        var flag = true;

        $('.team__tabs_item_link').on('click', function (e) {
            e.preventDefault();

            var
                $this = $(this),
                item = $this.closest('.team__tabs_item'),
                container = $this.closest('.container'),
                content = container.find('.team__content_list_item'),
                ndx = item.index(),
                reqItem = content.eq(ndx),
                activeItem = content.filter('.team__content_list_item_active');

            if (flag) {

                flag = false;

                if (!item.hasClass('team__tabs_item_active')) {

                    item.addClass('team__tabs_item_active')
                        .siblings()
                        .removeClass('team__tabs_item_active');


                    activeItem.fadeOut(300, function () {
                        reqItem.fadeIn(300, function () {
                            $(this).addClass('team__content_list_item_active')
                                .siblings()
                                .removeClass('team__content_list_item_active');
                            flag = true;
                        });

                    });
                } else {
                    alert('Вкладка итак открыта, не надо на нее жмакать просто так :)');
                    flag = true;
                }


            }

        });

    }());


//accord
    (function () {

        $('li.section__5_accord_item')
            .first()
            .addClass('section__5_accord_item-active')
            .children()
            .slideDown(500);

    }());

    (function () {
        var flag = true;


        $('.accord_trigger').on('click', function (e) {
            e.preventDefault();

            var
                $this = $(this),
                container = $this.closest('.section__5_accord'),
                item = $this.closest('.section__5_accord_item'),
                currentContent = item.find('.section__5_accord_item_desc'),
                duration = 500;


            if (flag) {

                flag = false;
                if (!item.hasClass('section__5_accord_item-active')) {

                    item
                        .addClass('section__5_accord_item-active')
                        .siblings()
                        .removeClass('section__5_accord_item-active')
                        .find('.section__5_accord_item_desc')
                        .slideUp(duration);
                    currentContent.slideDown(duration, function () {
                        flag = true;
                    });

                } else {

                    item.removeClass('section__5_accord_item-active');
                    currentContent.slideUp(duration, function () {
                        flag = true;
                    });

                }
            }

        });

    }());

//other
    (function () {


    }());


    //slider

    $('.section__1_slider_list')
        .slick({
            dots: true,
            arrows: false
        })
        .find('.slick-dots')
        .children()
        .addClass('slick_slider_control_item')

});

//Ymap

// Yandex map
(function() {
    ymaps.ready(init);
    var
        myMap,
        myPlacemark;

    function init(){
        myMap = new ymaps.Map("map", {
            center: [56.78435142301739,60.52886217366544],
            zoom: 15,
            controls: []
        });
        myMap.controls.add('zoomControl');
        myPlacemark = new ymaps.Placemark([56.78011106389915,60.53113668691006], {
            hintContent: 'Екатеринбург'
        },{
            iconLayout: 'default#image',
            iconImageHref: 'img/marker.png',
            iconImageSize: [42, 59],
            iconImageOffset: [-20, -55]
        });
        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable('scrollZoom');
    }
})();








