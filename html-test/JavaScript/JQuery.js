$(document).ready(function() {
    $("#höger").show(); $("#vänster").show(); $("#höger").click(function() {
        "300%" == $("#imgs").css("right") ? $("#imgs").animate({
            right: "+=0%"
        }) : $("#imgs").animate({
            right: "+=100%"
        })
    }), $("#vänster").click(function() {
        "0%" == $("#imgs").css("right") ? $("#imgs").animate({
            right: "+=0%"
        }) : $("#imgs").animate({
            right: "+=-100%"
        })
    });
    var t, a = !1,
        n = !1,
        i = !1,
        l = !1,
        r = 0,
        e = 0;
    $("#plan1").click(function() {
        t = $("#tidpunkt").val(), $("#datum").text("Datum: " + t), a = 0 == a ? (r += 500, e += 1, !0) : (r -= 500, e -= 1, !1), $("#pris").text("Pris: " + r + "kr"), $("#antal").text("Antal Planer: " + e)
    }), $("#plan2").click(function() {
        t = $("#tidpunkt").val(), $("#datum").text("Datum: " + t), n = 0 == n ? (r += 500, e += 1, !0) : (r -= 500, e -= 1, !1), $("#pris").text("Pris: " + r + "kr"), $("#antal").text("Antal Planer: " + e)
    }), $("#plan3").click(function() {
        t = $("#tidpunkt").val(), $("#datum").text("Datum: " + t), i = 0 == i ? (r += 250, e += 1, !0) : (r -= 250, e -= 1, !1), $("#pris").text("Pris: " + r + "kr"), $("#antal").text("Antal Planer: " + e)
    }), $("#plan4").click(function() {
        t = $("#tidpunkt").val(), $("#datum").text("Datum: " + t), 0 == l ? (r += 250, e += 1, l = !0, console.log(r)) : (r -= 250, e -= 1, l = !1), $("#pris").text("Pris: " + r + "kr"), $("#antal").text("Antal Planer: " + e)
    }), $("#boka").click(function() {


        alert("Du har bokat " + e + "st planer " + t + " glöm ej att ta med dig " + r + "kr \nOCH framförallt! att Ha kul!")


    })
    $("#backToTop").click(function () {

      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;

    })
});
