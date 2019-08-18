'use strict';

(function () {

    // Definujemy funkcję initMap w zakresie globalnym (czyli jako właściwość obiektu window).
    window.initMap = function () {


        var wroclaw = {
            lat: 51.097,
            lng: 17.034
        };

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            center: wroclaw
        });

        // Definiujemy marker jako nową instancję obiektu Marker.
        var marker = new google.maps.Marker({
            // I podajemy opcje tego markera, np. na której mapie ma być dodany oraz jakie są jego współrzędne.
            position: wroclaw,
            map: map
        });
    }

})();
