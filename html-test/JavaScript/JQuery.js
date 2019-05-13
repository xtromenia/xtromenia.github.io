$(document).ready(function() {



  $('#höger').click(function() {

    var rv = $('#imgs').css('right');

    if (rv == "750px") { //om x värdet åt höger är lika med 800px så skall det inte gå att röra sig mer åt höger.

      $("#imgs").animate({
        right: "+=0px"
      }); //Ökar distansen åt höger med 0px, alltså stannar bilden där den är.

    } else { //Om rv inte är 800px skall detta ske.
      $("#imgs").animate({
        right: "+=375px"
      }); //Förflytta bilden 200px åt höger för att få fram nästa bild i kön.


    };
  });

  $('#vänster').click(function() {

      var rv = $('#imgs').css('right');

    if (rv == "0px") { //om rights värde är 0

      $("#imgs").animate({
        right: "+=0px" //Skall den icke flytta sig åt vänster.
      });

    } else {

      $("#imgs").animate({
        right: "+=-375px" //Om den inte är 0, flytta -200 åt höger alltså 200px åt vänster.
      });

    }
  });


  var ett=false;
  var två=false;
  var tre=false;
  var fyra=false;
  var pris=0;
  var antal=0;
  var datum;

  $('#plan1').click(function () {

    datum = $('#tidpunkt').val();
    $('#datum').text("Datum: "+datum);


    if(ett==false){

      pris+=500;
      antal+=1;
      ett=true;

    }

    else {

      pris-=500;
      antal-=1;
      ett=false;


    }

    $('#pris').text("Pris: "+pris+"kr");

    $('#antal').text("Antal Planer: "+antal);

  })

  $('#plan2').click(function () {

    datum = $('#tidpunkt').val();
    $('#datum').text("Datum: "+datum);


    if(två==false){

      pris+=500;
      antal+=1;
      två=true;

    }

    else {

      pris-=500;
      antal-=1;
      två=false;


    }

    $('#pris').text("Pris: "+pris+"kr");

    $('#antal').text("Antal Planer: "+antal);

  })

  $('#plan3').click(function () {

    datum = $('#tidpunkt').val();
    $('#datum').text("Datum: "+datum);


    if(tre==false){

      pris+=250;
      antal+=1;
      tre=true;

    }

    else {

      pris-=250;
      antal-=1;
      tre=false;


    }

    $('#pris').text("Pris: "+pris+"kr");

    $('#antal').text("Antal Planer: "+antal);

  });


  $('#plan4').click(function () {

    datum = $('#tidpunkt').val();
    $('#datum').text("Datum: "+datum);


    if(fyra==false){

      pris+=250;
      antal+=1;
      fyra=true;


      console.log(pris);
    }

    else {

      pris-=250;
      antal-=1;
      fyra=false;


    }

  $('#pris').text("Pris: "+pris+"kr");

    $('#antal').text("Antal Planer: "+antal);

  });


  $('#boka').click(function () {

  alert("Du har bokat "+antal+"st planer "+datum+" glöm ej att ta med dig " +pris+"kr \nOCH framförallt! att Ha kul!");

  });

});
