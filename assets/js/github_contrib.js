(function ($) {
    "use strict";

    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue
        }
        return array
    }

    $(window).on("load", function () {
        $.get("https://api.github.com/repos/prest/prest/contributors", function (data) {
            $("#github-team").loadTemplate($("#github-contrib-tmpl"), shuffle(data), {
                append: true
            })
        })
    })
})(jQuery);
