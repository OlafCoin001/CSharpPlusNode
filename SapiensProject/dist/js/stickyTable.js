﻿jQuery(document).on("stickyTable", function () { var t, s = ((t = document.createElement("a").style).cssText = "position:sticky;position:-webkit-sticky;position:-ms-sticky;", -1 !== t.position.indexOf("sticky")), i = function () { var t = $('<div dir="rtl" style="font-size: 14px; width: 4px; height: 1px; position: absolute; top: -1000px; overflow: scroll">ABCD</div>').appendTo("body")[0], s = "reverse"; return t.scrollLeft > 0 ? s = "default" : (t.scrollLeft = 1, 0 === t.scrollLeft && (s = "negative")), $(t).remove(), s }(); s || (navigator.userAgent.match(/Trident\/7\./) && $(".sticky-table").on("mousewheel", function (t) { console.log(t), t.preventDefault(); var s = t.originalEvent.wheelDelta, i = $(this).scrollTop(); $(this).scrollTop(i - s) }), $(".sticky-table").scroll(function () { $(this).find("table tr.sticky-header th").css("top", $(this).scrollTop()), $(this).find("table tr.sticky-header td").css("top", $(this).scrollTop()); var t = $(this).find("table").prop("clientHeight") - $(this).prop("clientHeight"); $(this).find("table tr.sticky-footer th").css("bottom", t - $(this).scrollTop()), $(this).find("table tr.sticky-footer td").css("bottom", t - $(this).scrollTop()) }).scroll(), $(".sticky-ltr-cells").scroll(function () { $(this).find("table th.sticky-cell").css("left", $(this).scrollLeft()), $(this).find("table td.sticky-cell").css("left", $(this).scrollLeft()); var t = $(this).find("table").prop("clientWidth") - $(this).prop("clientWidth"); $(this).find("table th.sticky-cell-opposite").css("right", t - $(this).scrollLeft()), $(this).find("table td.sticky-cell-opposite").css("right", t - $(this).scrollLeft()) }).scroll()), !$(".sticky-rtl-cells").length || s && "negative" == i || (s && ($(".sticky-rtl-cells table th.sticky-cell").css("position", "relative"), $(".sticky-rtl-cells table td.sticky-cell").css("position", "relative"), $(".sticky-rtl-cells table th.sticky-cell-opposite").css("position", "relative"), $(".sticky-rtl-cells table td.sticky-cell-opposite").css("position", "relative"), $(".sticky-table").scroll(function () { $(this).find("table tr.sticky-header .sticky-cell").css("top", $(this).scrollTop()), $(this).find("table tr.sticky-header .sticky-cell-opposite").css("top", $(this).scrollTop()); var t = $(this).find("table").prop("clientHeight") - $(this).prop("clientHeight"); $(this).find("table tr.sticky-footer .sticky-cell").css("bottom", t - $(this).scrollTop()), $(this).find("table tr.sticky-footer .sticky-cell-opposite").css("bottom", t - $(this).scrollTop()) }).scroll()), $(".sticky-rtl-cells").scroll(function () { var t = $(this).find("table").prop("clientWidth") - $(this).prop("clientWidth"); switch (i) { case "default": $(this).find("table th.sticky-cell").css("right", t - $(this).scrollLeft()), $(this).find("table td.sticky-cell").css("right", t - $(this).scrollLeft()), $(this).find("table th.sticky-cell-opposite").css("left", $(this).scrollLeft()), $(this).find("table td.sticky-cell-opposite").css("left", $(this).scrollLeft()); break; case "negative": $(this).find("table th.sticky-cell").css("right", -1 * $(this).scrollLeft()), $(this).find("table td.sticky-cell").css("right", -1 * $(this).scrollLeft()), $(this).find("table th.sticky-cell-opposite").css("left", t + $(this).scrollLeft()), $(this).find("table td.sticky-cell-opposite").css("left", t + $(this).scrollLeft()); break; case "reverse": $(this).find("table th.sticky-cell").css("right", $(this).scrollLeft()), $(this).find("table td.sticky-cell").css("right", $(this).scrollLeft()), $(this).find("table th.sticky-cell-opposite").css("left", t - $(this).scrollLeft()), $(this).find("table td.sticky-cell-opposite").css("left", t - $(this).scrollLeft()) } }).scroll()), $(window).resize(function () { $(".sticky-table").scroll() }) }), $(document).ready(function () { $(document).trigger("stickyTable") });