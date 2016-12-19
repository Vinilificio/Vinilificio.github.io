/**
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler ○ gmail • com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.3
 */
;(function(f){"use strict";"function"===typeof define&&define.amd?define(["jquery"],f):"undefined"!==typeof module&&module.exports?module.exports=f(require("jquery")):f(jQuery)})(function($){"use strict";function n(a){return!a.nodeName||-1!==$.inArray(a.nodeName.toLowerCase(),["iframe","#document","html","body"])}function h(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}var p=$.scrollTo=function(a,d,b){return $(window).scrollTo(a,d,b)};p.defaults={axis:"xy",duration:0,limit:!0};$.fn.scrollTo=function(a,d,b){"object"=== typeof d&&(b=d,d=0);"function"===typeof b&&(b={onAfter:b});"max"===a&&(a=9E9);b=$.extend({},p.defaults,b);d=d||b.duration;var u=b.queue&&1<b.axis.length;u&&(d/=2);b.offset=h(b.offset);b.over=h(b.over);return this.each(function(){function k(a){var k=$.extend({},b,{queue:!0,duration:d,complete:a&&function(){a.call(q,e,b)}});r.animate(f,k)}if(null!==a){var l=n(this),q=l?this.contentWindow||window:this,r=$(q),e=a,f={},t;switch(typeof e){case "number":case "string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)){e= h(e);break}e=l?$(e):$(e,q);case "object":if(e.length===0)return;if(e.is||e.style)t=(e=$(e)).offset()}var v=$.isFunction(b.offset)&&b.offset(q,e)||b.offset;$.each(b.axis.split(""),function(a,c){var d="x"===c?"Left":"Top",m=d.toLowerCase(),g="scroll"+d,h=r[g](),n=p.max(q,c);t?(f[g]=t[m]+(l?0:h-r.offset()[m]),b.margin&&(f[g]-=parseInt(e.css("margin"+d),10)||0,f[g]-=parseInt(e.css("border"+d+"Width"),10)||0),f[g]+=v[m]||0,b.over[m]&&(f[g]+=e["x"===c?"width":"height"]()*b.over[m])):(d=e[m],f[g]=d.slice&& "%"===d.slice(-1)?parseFloat(d)/100*n:d);b.limit&&/^\d+$/.test(f[g])&&(f[g]=0>=f[g]?0:Math.min(f[g],n));!a&&1<b.axis.length&&(h===f[g]?f={}:u&&(k(b.onAfterFirst),f={}))});k(b.onAfter)}})};p.max=function(a,d){var b="x"===d?"Width":"Height",h="scroll"+b;if(!n(a))return a[h]-$(a)[b.toLowerCase()]();var b="client"+b,k=a.ownerDocument||a.document,l=k.documentElement,k=k.body;return Math.max(l[h],k[h])-Math.min(l[b],k[b])};$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(a){return $(a.elem)[a.prop]()}, set:function(a){var d=this.get(a);if(a.options.interrupt&&a._last&&a._last!==d)return $(a.elem).stop();var b=Math.round(a.now);d!==b&&($(a.elem)[a.prop](b),a._last=this.get(a))}};return p});


//$(document).foundation();


$(document).ready(function(){

    /**
     * This part does the "fixed navigation after scroll" functionality
     * We use the jQuery function scroll() to recalculate our variables as the
     * page is scrolled/
     */
    /*var nav_top = $('.jsSiteNavAnchor').offset().top; console.log(nav_top);
    if ($('.jsMainAnchor').length != 0) {
        var main_top = $('.jsMainAnchor').offset().top;
    }
    $(window).scroll(function(){
        var window_top = $(window).scrollTop(); // the "12" should equal the margin-top value for nav.stick
            if (window_top > nav_top) {
                $('.jsSiteHeader').addClass('site-header-wrapper--hidden');
            } else {
                $('.jsSiteHeader').removeClass('site-header-wrapper--hidden');
            }
            if (window_top > main_top) {
                $('.jsSidebar').addClass('left-sidebar--top');
            } else {
                $('.jsSidebar').removeClass('left-sidebar--top');
            }
    });*/

    var offsetScroll = 140;
    /**
     * This part causes smooth scrolling using scrollto.js
     * We target all a tags inside the nav, and apply the scrollto.js to it.
     */
    $(".jsSidebarLink").click(function(evn){
        evn.preventDefault();
        $('html,body').scrollTo(this.hash, 250, {offset: -offsetScroll/2});
    });

     /**
     * This part handles the highlighting functionality.
     * We use the scroll functionality again, some array creation and
     * manipulation, class adding and class removing, and conditional testing
     */
    var aChildren = $(".jsSidebarLink"); // find the a children of the list items
    var aArray = []; // create the empty aArray
    for (var i=0; i < aChildren.length; i++) {
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    }

    $(window).scroll(function(){
        var didScroll = true;
        if (didScroll === true) {
            //$('.main').css('background', "#fff");
            didScroll = false;
        }

        var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
        var windowHeight = $(window).height(); // get the height of the window
        var docHeight = $(document).height();

        for (var i=0; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPos = $(theID).offset().top - offsetScroll; // get the offset of the div from the top of page

            var theIDNext = aArray[i+1];

            if (i<aArray.length-1) {
                var divPosNext = $(theIDNext).offset().top - offsetScroll;
            }

            if (windowPos >= divPos && windowPos < divPosNext) {
                $("a[href='" + theID + "']").addClass("left-sidebar__link--active");
            } else {
                $("a[href='" + theID + "']").removeClass("left-sidebar__link--active");
            }
        }
// PER L'ULTIMO ELEMENTO DELLA LISTA
//        if(windowPos + windowHeight == docHeight) {
//            if (!$("nav li:last-child a").hasClass("nav-active")) {
//                var navActiveCurrent = $(".nav-active").attr("href");
//                $("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
//                $("nav li:last-child a").addClass("nav-active");
//            }
//        }
    });





//    $('#link1').mouseover(function(){
//        $('.qwe1').addClass('qwe--active');
//    });

    $('#link1').click(function(){
        $('.slideshow').slick('slickGoTo',1, true);
    });

    $('#link2').click(function(){
        $('.slideshow').slick('slickGoTo',2, true);
    });

    $('#link3').click(function(){
        $('.slideshow').slick('slickGoTo',3, true);
    });



    $('#link2').mouseover(function(){
        $('.qwe2').addClass('qwe--active');
    });

//    $('#link1').mouseleave(function(){
//        $('.qwe1').removeClass('qwe--active');
//    });

    $('#link2').mouseleave(function(){
        $('.qwe2').removeClass('qwe--active');
    });

$('.site-header__logo').mouseover(function(){
    $('.site-header__logo a').addClass('is-playing');
})

$('.site-header__logo').mouseleave(function(){
    $('.site-header__logo a').removeClass('is-playing');
})


});


// ====================
//   Home Video
// =======================

var homeVideos = $('.js-home-video video');
$('.js-home-video').mouseover(function(){
    $('.js-home-video').removeClass('selected');
    homeVideos.each(function(){
        this.pause();
    })
    $(this).addClass('selected');
    var videoSelected = $(this).children();
    videoSelected[0].play();
});



