/**
 * ScrollTo()
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler ○ gmail • com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.3
 */
;(function(f){"use strict";"function"===typeof define&&define.amd?define(["jquery"],f):"undefined"!==typeof module&&module.exports?module.exports=f(require("jquery")):f(jQuery)})(function($){"use strict";function n(a){return!a.nodeName||-1!==$.inArray(a.nodeName.toLowerCase(),["iframe","#document","html","body"])}function h(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}var p=$.scrollTo=function(a,d,b){return $(window).scrollTo(a,d,b)};p.defaults={axis:"xy",duration:0,limit:!0};$.fn.scrollTo=function(a,d,b){"object"=== typeof d&&(b=d,d=0);"function"===typeof b&&(b={onAfter:b});"max"===a&&(a=9E9);b=$.extend({},p.defaults,b);d=d||b.duration;var u=b.queue&&1<b.axis.length;u&&(d/=2);b.offset=h(b.offset);b.over=h(b.over);return this.each(function(){function k(a){var k=$.extend({},b,{queue:!0,duration:d,complete:a&&function(){a.call(q,e,b)}});r.animate(f,k)}if(null!==a){var l=n(this),q=l?this.contentWindow||window:this,r=$(q),e=a,f={},t;switch(typeof e){case "number":case "string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)){e= h(e);break}e=l?$(e):$(e,q);case "object":if(e.length===0)return;if(e.is||e.style)t=(e=$(e)).offset()}var v=$.isFunction(b.offset)&&b.offset(q,e)||b.offset;$.each(b.axis.split(""),function(a,c){var d="x"===c?"Left":"Top",m=d.toLowerCase(),g="scroll"+d,h=r[g](),n=p.max(q,c);t?(f[g]=t[m]+(l?0:h-r.offset()[m]),b.margin&&(f[g]-=parseInt(e.css("margin"+d),10)||0,f[g]-=parseInt(e.css("border"+d+"Width"),10)||0),f[g]+=v[m]||0,b.over[m]&&(f[g]+=e["x"===c?"width":"height"]()*b.over[m])):(d=e[m],f[g]=d.slice&& "%"===d.slice(-1)?parseFloat(d)/100*n:d);b.limit&&/^\d+$/.test(f[g])&&(f[g]=0>=f[g]?0:Math.min(f[g],n));!a&&1<b.axis.length&&(h===f[g]?f={}:u&&(k(b.onAfterFirst),f={}))});k(b.onAfter)}})};p.max=function(a,d){var b="x"===d?"Width":"Height",h="scroll"+b;if(!n(a))return a[h]-$(a)[b.toLowerCase()]();var b="client"+b,k=a.ownerDocument||a.document,l=k.documentElement,k=k.body;return Math.max(l[h],k[h])-Math.min(l[b],k[b])};$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(a){return $(a.elem)[a.prop]()}, set:function(a){var d=this.get(a);if(a.options.interrupt&&a._last&&a._last!==d)return $(a.elem).stop();var b=Math.round(a.now);d!==b&&($(a.elem)[a.prop](b),a._last=this.get(a))}};return p});

/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!function(e){var n;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var t=window.Cookies,o=window.Cookies=e();o.noConflict=function(){return window.Cookies=t,o}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var t=arguments[e];for(var o in t)n[o]=t[o]}return n}return function n(t){function o(n,r,i){if("undefined"!=typeof document){if(arguments.length>1){"number"==typeof(i=e({path:"/"},o.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var c=JSON.stringify(r);/^[\{\[]/.test(c)&&(r=c)}catch(e){}r=t.write?t.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var f="";for(var a in i)i[a]&&(f+="; "+a,!0!==i[a]&&(f+="="+i[a].split(";")[0]));return document.cookie=n+"="+r+f}for(var p={},u=function(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)},s=document.cookie?document.cookie.split("; "):[],d=0;d<s.length;d++){var l=s[d].split("="),C=l.slice(1).join("=");this.json||'"'!==C.charAt(0)||(C=C.slice(1,-1));try{var g=u(l[0]);if(C=(t.read||t)(C,g)||u(C),this.json)try{C=JSON.parse(C)}catch(e){}if(p[g]=C,n===g)break}catch(e){}}return n?p[n]:p}}return o.set=o,o.get=function(e){return o.call(o,e)},o.getJSON=function(){return o.apply({json:!0},arguments)},o.remove=function(n,t){o(n,"",e(t,{expires:-1}))},o.defaults={},o.withConverter=n,o}(function(){})});

// Cookie consent
var cookieBanner = document.querySelector('.cc-cookie');
var cookieDismiss = document.querySelector('.cc-dismiss');
if ( !Cookies.get('cookieConsent') ) {
    cookieBanner.style.display = 'block';
    cookieDismiss.onclick = function() {
        cookieBanner.style.display = 'none';
        Cookies.set('cookieConsent', true, { expires: 365 });
    }
}

$(document).ready(function(){
    var offsetScroll = 200;

    function setActiveAnchor() {
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
                $("a[href='" + theID + "']").addClass("sidebar__link--active");
            } else {
                $("a[href='" + theID + "']").removeClass("sidebar__link--active");
            }
        }
        // Last element in the list
        if(windowPos + windowHeight >= docHeight) {
            if (!$(".sidebar__item:last-child a").hasClass("sidebar__link--active")) {
                var navActiveCurrent = $(".sidebar__link--active").attr("href");
                $("a[href='" + navActiveCurrent + "']").removeClass("sidebar__link--active");
                $(".sidebar__item:last-child a").addClass("sidebar__link--active");
            }
        }
    }

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
    * manipulation, class adding and class removing, and conditional testing.
    * Check setActiveAnchor().
    */
    var aChildren = $(".jsSidebarLink"); // find the a children of the list items
    var aArray = []; // create the empty aArray
    for (var i=0; i < aChildren.length; i++) {
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    }

    //Set active anchor and header background color if scrolling inside '.main'
    $(window).scroll(function(){
        setActiveAnchor();
    });

    /**
    * Home page slideshow
    */
    $('.sidebar__action').each(function(i, el){
        $(el).click(function(){
            $('.slideshow').slick('slickGoTo', i+1, true);
        });
    });

    /**
    * Logo turn-tableism
    */
    $('.site-header__logo').mouseover(function(){
        console.log('sdsdsadasdas');
        $('.site-header__logo a').addClass('is-playing');
    });
    $('.site-header__logo').mouseleave(function(){
        $('.site-header__logo a').removeClass('is-playing');
    });


    /**
    * Mobile menu
    */

    $('.jsMobileMenuToggle').click( function() {
        $('.jsMobileMenu').toggle();
    });


    /**
    * Site header Headroom
    */
    var siteHeader = document.querySelector(".jsSiteHeader");
    // construct an instance of Headroom, passing the element
    var headroom  = new Headroom(siteHeader, {
        tolerance: {
            down : 10,
            up : 20
        },
        offset : 40,
        classes : {
            // when element is initialised
            initial : "site-header",
            // when scrolling up
            pinned : "site-header--pinned",
            // when scrolling down
            unpinned : "site-header--unpinned"
        },
        onTop : function() {
            this.elem.classList.remove('site-header--pinned')
        },
    });
    // initialise
    headroom.init();
}); /* /doc-ready */
