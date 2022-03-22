$(function () {
    $(window).scroll(function () {
        set_app();
    });
    $(window).on('load', function () {
        navigationEV();
    });
    xuly();
    $(window).resize(function () {
        xuly();

    });
    $("#top").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 600)
    });
    selectBG();


});

function xuly() {
    if ($(window).width() <= 768) {
        $("body").css("width", $(window).width());
        //header
        $(".header_nav").css("min-width", $(window).width());
        //footer
        $("footer").css({ 'fontSize': $(window).width() * 0.025 });

        //slide
        $("#h1").attr("src", "asm/mobile/slide01.jpg");
        $("#h2").attr("src", "asm/mobile/slide02.jpg");
        $("#h3").attr("src", "asm/mobile/slide03.jpg");
        //servant
        $("#saber").attr("src", "Images/servant/mobile/class_saber.png");
        $("#archer").attr("src", "Images/servant/mobile/class_archer.png");
        $("#lancer").attr("src", "Images/servant/mobile/class_lancer.png");
        $("#rider").attr("src", "Images/servant/mobile/class_rider.png");
        $("#caster").attr("src", "Images/servant/mobile/class_caster.png");
        $("#assassin").attr("src", "Images/servant/mobile/class_assassin.png");
        $("#berserker").attr("src", "Images/servant/mobile/class_berserker.png");
        $("#extra").attr("src", "Images/servant/mobile/class_extra.png");
        //staff
        $("#staff1").attr("src", "Images/staff/title_staff_mobile.png");
        $("#staff1").css("width", $(window).width());
        $("#staff1").css("padding", 0);
        $("#staff2").attr("src", "Images/staff/txt_staff_mobile.png");
        $("#staff2").css("width", $(window).width());
        $("#staff2").css("padding", 0);
        $(".staff").css("width", $(window).width());

        //news
        $(".on").css("display", "none");
        $("#news").css("width", $(window).width());
        $("#twitter").css("width", $(window).width());
        $(".news_wrap").css("width", $(window).width());
        $(".news_wrap").css("text-align", "left");

        $(".tiwtter_wrap").css("width", $(window).width());
        $(".character").css("width", $(window).width());
        $(".container1").css("width", $(window).width());
        $(".container1").css("padding-bottom", $(window).width() * 1.48);


    }
    else {
        $("body").css("width", screen.width);
        //header
        $(".header_nav").css("min-width", screen.width);
        //footer
        $("footer").css({ 'fontSize': 16 });
        //slide
        $("#h1").attr("src", "asm/sl1.jpg");
        $("#h2").attr("src", "asm/sl2.jpg");
        $("#h3").attr("src", "asm/sl3.jpg");
        //servant
        $("#saber").attr("src", "Images/servant/class_saber_off.png");
        $("#archer").attr("src", "Images/servant/class_archer_off.png");
        $("#lancer").attr("src", "Images/servant/class_lancer_off.png");
        $("#rider").attr("src", "Images/servant/class_rider_off.png");
        $("#caster").attr("src", "Images/servant/class_caster_off.png");
        $("#assassin").attr("src", "Images/servant/class_assassin_off.png");
        $("#berserker").attr("src", "Images/servant/class_berserker_off.png");
        $("#extra").attr("src", "Images/servant/class_extra_off.png");
        //staff
        $("#staff1").attr("src", "Images/staff/title_staff.png");
        $("#staff1").css("width", $(window).width() * 0.38);
        $("#staff1").css("padding-left", $(window).width() * 0.31);
        $("#staff2").attr("src", "Images/staff/txt_staff.png");
        $("#staff2").css("width", $(window).width() * 0.76);
        $("#staff2").css("padding-left", $(window).width() * 0.12);
        $(".staff").css("width", $(window).width());
        //news
        $(".on").css("display", "block");
        $(".top_info").css("width", 1120);
        $(".news_wrap").css("width", 540);
        $(".tiwtter_wrap").css("width", 540);
        $(".character").css("width", screen.width);
        $(".container1").css("width", screen.width);
        $(".container1").css("padding-bottom", screen.width * 0.596);

        $("article").css("display", "block");
        $("footer").css("display", "block");
    }
}
//header nav
function navigationEV() {
    $(".header_logo").find(".nav_menu").click(function () {
        if ($(this).attr("class").indexOf("menu_open") > 0) {
            $(this).removeClass("menu_open")
            $(".main_menu").removeClass("menu_open");
            $("article").css("display", "block");
            $("footer").css("display", "block");
           
        }
        else {
            $(".main_menu").addClass("menu_open");
            $(this).addClass("menu_open");
            $(".header_logo").css({ top: 0 });
            $("article").css("display", "none");
            $("footer").css("display", "none");
            $("nav").css("top", "0");
            $("html,body").scrollTop(0);
        }
        
    });
}
//slide
var index;
var slides = document.getElementsByClassName("slide");
var dots = document.getElementsByClassName("dot");
var action;
function slideshow(n) {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (n == -100) {
        index -= 1;
    }
    else if (n == 100) {
        index += 1;
    }
    else if (n >= 0)
        index = n;
    if (index > slides.length - 1)
        index = 0;
    if (index == -1) {
        index = slides.length - 1;
    }
    slides[index].style.display = "block";
    dots[index].className += " active";
    action = setTimeout(slideshow, 3000, index + 1);
}
//hover servant
(function (window, undefined) {
    $(function () {
        $(".chara_wrap").find("li").mouseover(function () {
            $(".chara_wrap").find("li").removeClass("current");
            $(".chara_wrap").find("ul").addClass("over");
            $(this).addClass("current");

        });


        $(".chara_wrap").mouseleave(function () {
            $(".chara_wrap").find("li").removeClass("current");
            $(".chara_wrap").find("ul").removeClass("over");
        });
    });


})(this);
//event download
function set_app() {
    var st = $(window).scrollTop();
    var winHeight = $(window).height();
    var main = 900 - winHeight;
    if (st >= main) {
        $(".over_info").find(".app").addClass('fix');
    } else {
        $(".over_info").find(".app").removeClass('fix');
    }
}

//select background
function selectBG() {
    try {
        if (localStorage.getItem("the") == "#xanh") {
            document.documentElement.style.setProperty('--background-main', 'linear-gradient(aqua,blue)');
            $("#xanh").css("border-left", "5px solid red");
            $("#den").css("border-left", "none");
            $("#hong").css("border-left", "none");
        }
        else if (localStorage.getItem("the") == "#den") {
            document.documentElement.style.setProperty('--background-main', 'linear-gradient(gray,black)');
            $("#den").css("border-left", "5px solid red");
            $("#xanh").css("border-left", "none");
            $("#hong").css("border-left", "none");
        }
        else if (localStorage.getItem("the") == "#hong") {
            document.documentElement.style.setProperty('--background-main', 'linear-gradient(purple,pink)');
            $("#hong").css("border-left", "5px solid red");
            $("#xanh").css("border-left", "none");
            $("#den").css("border-left", "none");
        }
    } catch {

    }

    $(".social").mouseover(function () {
            $(".social__list").addClass("open");
            $(".social").css({ "right": 0 });
    });
    $(".social").mouseout(function () {
            $(".social__list").removeClass("open");
            $(".social").css({ "right": -182 });      
    });
    $("#xanh").click(function () {
        document.documentElement.style.setProperty('--background-main', 'linear-gradient(aqua,blue)');
        $("#xanh").css("border-left", "5px solid red");
        $("#den").css("border-left", "none");
        $("#hong").css("border-left", "none");
        localStorage.setItem("the", "#xanh");

    });
    $("#den").click(function () {
        document.documentElement.style.setProperty('--background-main', 'linear-gradient(gray,black)');
        $("#den").css("border-left", "5px solid red");
        $("#xanh").css("border-left", "none");
        $("#hong").css("border-left", "none");
        localStorage.setItem("the", "#den");
    });
    $("#hong").click(function () {
        document.documentElement.style.setProperty('--background-main', 'linear-gradient(purple,pink)');
        $("#hong").css("border-left", "5px solid red");
        $("#xanh").css("border-left", "none");
        $("#den").css("border-left", "none");
        localStorage.setItem("the", "#hong");
    })

}