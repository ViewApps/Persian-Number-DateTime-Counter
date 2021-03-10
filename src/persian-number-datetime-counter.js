
$(function () {
    // $(".fa-dt-counter").each((index, item) => {
    //     var $dateTime = $(item).attr('data-dateTime'),
    //         enDigit = $(item).hasClass('en-digit-counter'),
    //         $days = $(item).find(".fa-dt-counter-days"),
    //         $hours = $(item).find(".fa-dt-counter-hours"),
    //         $minutes = $(item).find(".fa-dt-counter-minutes"),
    //         $seconds = $(item).find(".fa-dt-counter-seconds");
    //     endTime = Date.parse($dateTime) / 1000,
    //         now = Date.now() / 1000;
    //     var timeLeft = endTime - now;

    //     makeTimer = function () {
    //         //alert('makeTimer ' + index)
    //         var endTime = (Date.parse($dateTime) / 1000),
    //             now = Date.now() / 1000;
    //         var timeLeft = endTime - now;

    //         var days = Math.floor(timeLeft / 86400);
    //         var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    //         var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    //         var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    //         if (days < "10") days = "0" + days;
    //         if (hours < "10") hours = "0" + hours;
    //         if (minutes < "10") minutes = "0" + minutes;
    //         if (seconds < "10") seconds = "0" + seconds;

    //         if (timeLeft > 0) {
    //             if (!enDigit) {
    //                 $days.text(convertToFaDigit(days));
    //                 $hours.text(convertToFaDigit(hours));
    //                 $minutes.text(convertToFaDigit(minutes));
    //                 $seconds.text(convertToFaDigit(seconds));
    //             }
    //             else {
    //                 $days.text(days);
    //                 $hours.text(hours);
    //                 $minutes.text(minutes);
    //                 $seconds.text(seconds);
    //             }
    //         } else {
    //             if (!enDigit) {
    //                 $days.text(convertToFaDigit("00"));
    //                 $hours.text(convertToFaDigit("00"));
    //                 $minutes.text(convertToFaDigit("00"));
    //                 $seconds.text(convertToFaDigit("00"));
    //             }
    //             else {
    //                 $days.text("00");
    //                 $hours.text("00");
    //                 $minutes.text("00");
    //                 $seconds.text("00");
    //             }
    //             clearInterval(dateCounterSetInterval);
    //         }
    //     };
    //     var dateCounterSetInterval = setInterval(makeTimer, 1000);
    //     makeTimer();
    //     if (endTime) $(item).css('visibility', 'visible');
    // });
    // $(".fa-dt-counter-up").each((index, item) => {
    //     var $dateTime = $(item).attr('data-dateTime'),
    //         enDigit = $(item).hasClass('en-digit-counter'),
    //         $days = $(item).find(".fa-dt-counter-days"),
    //         $hours = $(item).find(".fa-dt-counter-hours"),
    //         $minutes = $(item).find(".fa-dt-counter-minutes"),
    //         $seconds = $(item).find(".fa-dt-counter-seconds");
    //     var beginTime = (Date.parse($dateTime) / 1000),

    //         makeTimer = function () {
    //             //alert('makeTimer ' + index)
    //             var beginTime = (Date.parse($dateTime) / 1000),
    //                 now = Date.now() / 1000;
    //             var timeLeft = now - beginTime;

    //             var days = Math.floor(timeLeft / 86400);
    //             var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    //             var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    //             var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    //             if (days < "10") days = "0" + days;
    //             if (hours < "10") hours = "0" + hours;
    //             if (minutes < "10") minutes = "0" + minutes;
    //             if (seconds < "10") seconds = "0" + seconds;

    //             if (!enDigit) {
    //                 $days.text(convertToFaDigit(days));
    //                 $hours.text(convertToFaDigit(hours));
    //                 $minutes.text(convertToFaDigit(minutes));
    //                 $seconds.text(convertToFaDigit(seconds));
    //             }
    //             else {
    //                 $days.text(days);
    //                 $hours.text(hours);
    //                 $minutes.text(minutes);
    //                 $seconds.text(seconds);
    //             }
    //         };
    //     var dateCounterSetInterval = setInterval(makeTimer, 1000);
    //     makeTimer();

    //     if (beginTime) $(item).css('visibility', 'visible');
    // });

});

; (function ($) {
    $.fn.initDateCounters = function (callBack) {
        var root = this;
        $(root).each((i, item) => {
            var $dateTime = $(item).attr('data-dateTime'),
                enDigit = $(item).hasClass('en-digit-counter'),
                $days = $(item).find(".fa-dt-counter-days"),
                $hours = $(item).find(".fa-dt-counter-hours"),
                $minutes = $(item).find(".fa-dt-counter-minutes"),
                $seconds = $(item).find(".fa-dt-counter-seconds");
            endTime = Date.parse($dateTime) / 1000,
                now = Date.now() / 1000;
            var timeLeft = endTime - now;

            makeTimer = function () {
                //alert('makeTimer ' + i)
                var endTime = (Date.parse($dateTime) / 1000),
                    now = Date.now() / 1000;
                var timeLeft = endTime - now;

                var days = Math.floor(timeLeft / 86400);
                var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
                var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
                var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

                if (days < "10") days = "0" + days;
                if (hours < "10") hours = "0" + hours;
                if (minutes < "10") minutes = "0" + minutes;
                if (seconds < "10") seconds = "0" + seconds;

                if (timeLeft > 0) {
                    if (!enDigit) {
                        $days.text(convertToFaDigit(days));
                        $hours.text(convertToFaDigit(hours));
                        $minutes.text(convertToFaDigit(minutes));
                        $seconds.text(convertToFaDigit(seconds));
                    }
                    else {
                        $days.text(days);
                        $hours.text(hours);
                        $minutes.text(minutes);
                        $seconds.text(seconds);
                    }
                } else {
                    if (!enDigit) {
                        $days.text(convertToFaDigit("00"));
                        $hours.text(convertToFaDigit("00"));
                        $minutes.text(convertToFaDigit("00"));
                        $seconds.text(convertToFaDigit("00"));
                    }
                    else {
                        $days.text("00");
                        $hours.text("00");
                        $minutes.text("00");
                        $seconds.text("00");
                    }
                    clearInterval(dateCounterSetInterval);

                    if (callBack && $.isFunction(callBack)) {
                        callBack(item);
                    }
                }
            };
            var dateCounterSetInterval = setInterval(makeTimer, 1000);
            makeTimer();
            if (endTime) $(item).css('visibility', 'visible');
        });
        return root;
    }

    $.fn.initUpDateCounters = function () {
        var root = this;
        $(root).each((i, item) => {
            var $dateTime = $(item).attr('data-dateTime'),
                enDigit = $(item).hasClass('en-digit-counter'),
                $days = $(item).find(".fa-dt-counter-days"),
                $hours = $(item).find(".fa-dt-counter-hours"),
                $minutes = $(item).find(".fa-dt-counter-minutes"),
                $seconds = $(item).find(".fa-dt-counter-seconds");
            var beginTime = (Date.parse($dateTime) / 1000),

                makeTimer = function () {
                    //alert('makeTimer ' + i)
                    var beginTime = (Date.parse($dateTime) / 1000),
                        now = Date.now() / 1000;
                    var timeLeft = now - beginTime;

                    var days = Math.floor(timeLeft / 86400);
                    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
                    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
                    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

                    if (days < "10") days = "0" + days;
                    if (hours < "10") hours = "0" + hours;
                    if (minutes < "10") minutes = "0" + minutes;
                    if (seconds < "10") seconds = "0" + seconds;

                    if (!enDigit) {
                        $days.text(convertToFaDigit(days));
                        $hours.text(convertToFaDigit(hours));
                        $minutes.text(convertToFaDigit(minutes));
                        $seconds.text(convertToFaDigit(seconds));
                    }
                    else {
                        $days.text(days);
                        $hours.text(hours);
                        $minutes.text(minutes);
                        $seconds.text(seconds);
                    }
                };
            var dateCounterSetInterval = setInterval(makeTimer, 1000);
            makeTimer();

            if (beginTime) $(item).css('visibility', 'visible');
        });
        return root;
    }

    $.fn.initNumberCounter = function (callBack) {

        var item = this;
        var counterTo = Number($(item).attr('data-counter-to')),
            intravel = Number($(item).attr('data-intravel')) * 1000,
            enDigit = $(item).hasClass('en-digit-counter'),
            counter = 1;
        var intravelStep = Math.round(intravel / counterTo);

        if (intravelStep < 101) {
            intravelStep = 100;
            counter += Math.round(counterTo / (intravel / intravelStep));
        }
        //alert('counterTo: ' + counterTo + ', intravel: ' + intravel + 'ms, intravelStep: ' + intravelStep + 'ms, counter: ' + counter)

        if (!enDigit) {
            $(item).text(convertToFaDigit(0))
        } else {
            $(item).text('0');
        }
        $(item).attr('data-counter-current', 0);

        makeTimer = function () {
            var current = Number($(item).attr('data-counter-current')) + counter;
            //alert(index +', '+current)

            if (current >= counterTo) {
                clearInterval(numberCounterSetInterval);

                if (!enDigit) {
                    $(item).text(convertToFaDigit(counterTo, true));
                } else {
                    $(item).text(splitterDigit(counterTo));
                }
                $(item).attr('data-counter-current', counterTo);

                if (callBack && $.isFunction(callBack)) {
                    callBack(item);
                }
            }
            else {
                if (!enDigit) {
                    $(item).text(convertToFaDigit(current, true))
                } else {
                    $(item).text(splitterDigit(current));
                }
                $(item).attr('data-counter-current', current);
            }
        };

        var numberCounterSetInterval = setInterval(makeTimer, intravelStep);

        return item;
    }

    $.fn.initGroupNumberCounter = function (callBack) {
        var root = this;
        var intravel = Number($(root).attr('data-intravel')) * 1000;

        $(root).find('.fa-num-counter-item').each((i, item) => {

            var counterTo = Number($(item).attr('data-counter-to')),
                enDigit = $(item).hasClass('en-digit-counter'),
                counter = 1;
            var intravelStep = Math.round(intravel / counterTo);

            if (intravelStep < 101) {
                intravelStep = 100;
                counter += Math.round(counterTo / (intravel / intravelStep));
            }
            //alert('counterTo: ' + counterTo + ', intravel: ' + intravel + 'ms, intravelStep: ' + intravelStep + 'ms, counter: ' + counter)

            if (!enDigit) {
                $(item).text(convertToFaDigit(0))
            } else {
                $(item).text('0');
            }
            $(item).attr('data-counter-current', 0);

            makeTimer = function () {
                var current = Number($(item).attr('data-counter-current')) + counter;

                if (current >= counterTo) {
                    clearInterval(numberCounterSetInterval);
                    if (!enDigit) {
                        $(item).text(convertToFaDigit(counterTo, true));
                    } else {
                        $(item).text(splitterDigit(counterTo));
                    }
                    $(item).attr('data-counter-current', counterTo);
                }
                else {
                    if (!enDigit) {
                        $(item).text(convertToFaDigit(current, true));
                    } else {
                        $(item).text(splitterDigit(current));
                    }
                    $(item).attr('data-counter-current', current);
                }
            };

            var numberCounterSetInterval = setInterval(makeTimer, intravelStep);
        });

        if (callBack && $.isFunction(callBack)) {

            setTimeout(() => { callBack(root) }, intravel);
        }
        return root;
    }
})(jQuery);



function convertToFaDigit(str, splitter = false) {
    var b = '' + str;
    if (splitter) {
        b = splitterDigit(b);
    }
    for (var c = 48; c <= 57; c++) {
        var d = String.fromCharCode(c);
        var e = String.fromCharCode(c + 1728);
        b = b.replace(new RegExp(d.toString(), "g"), e.toString())
    }
    return b;
}

function splitterDigit(num) {
    return num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
}