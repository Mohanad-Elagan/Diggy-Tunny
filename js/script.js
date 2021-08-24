// Some Essential Vars

var nav = document.getElementById("nav");
var myMediaQuery = window.matchMedia("(max-width: 600px)");

// Resposinve nav bar

function openNav() {
    if (nav.className === "") {
        nav.className += "responsive_nav";
    } else {
        nav.className = "";
    }
}

// Navbar animation

if (myMediaQuery.matches) {
    $(".nav_dark").removeClass("nav_dark");
} else {
    $(document).ready(function() {
        $(window).scroll(function() {
            if ($(window).scrollTop() > 30) {
                $(".nav_dark").css("background-color", "rgba(0, 0, 0, 1)");
            } else {
                $(".nav_dark").css("background-color", "rgba(0, 0, 0, 0.25)");
            }
        });
    });
}

// Scroll Indicator

window.onscroll = function() {
    IndicateScroll();
    ShowScrollFunction();
};

function IndicateScroll() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

// Paragraph animation

$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".article_animation");

    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];

        if ($(tag).position().top < pageBottom - 70) {
            $(tag).addClass("visible");
        } else {
            $(tag).removeClass("visible");
        }
    }
});

// Scrolltop Button

var scrollTopSpan = document.getElementById("scrolltop");
var scrollTopBtn = document.getElementById("scrollTopBtn");

// window.onscroll = function() { ShowScrollFunction() };

function ShowScrollFunction() {
    if (document.body.scrollTop || document.documentElement.scrollTop > 30) {
        scrollTopSpan.style.display = "block";
    } else {
        scrollTopSpan.style.display = "none";
    }
}

function ScrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}