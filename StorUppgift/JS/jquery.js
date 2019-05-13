$(document).ready(function() {

  var ett = false;

  var två = false;

  var tre = false;

  var fyra = false;

  var pris = 0;

  var antal = 0;

  var tidpunkt;


  $('#välkommenMid').hide();

  $('#välkommenMid').slideDown(1200);


  $('#plan1').click(function() {


    if (ett == false) {


      pris += 100;
      antal += 1;
      ett = true;



    } else {

      pris -= 100;
      antal -= 1;
      ett = false;
    }


    $('#pris').text("Pris: " + pris + "kr");
    $('#antal').text("Antal Planer: " + antal + "st")

  });

  $('#plan2').click(function() {

    if (två == false) {


      pris += 100;
      antal += 1;
      två = true;


    } else {

      pris -= 100;
      antal -= 1;
      två = false;
    }


    $('#pris').text("Pris: " + pris + "kr");
    $('#antal').text("Antal Planer: " + antal + "st")

  });

  $('#plan3').click(function() {


    if (tre == false) {


      pris += 50;
      antal += 1;
      tre = true;


    } else {

      pris -= 50;
      antal -= 1;
      tre = false;
    }


    $('#pris').text("Pris: " + pris + "kr");
    $('#antal').text("Antal Planer: " + antal + "st")


    $('#pris').text("Pris: " + pris + "kr");
    $('#antal').text("Antal Planer: " + antal + "st")

  });

  $('#plan4').click(function() {

    if (fyra == false) {
      pris += 50;
      antal += 1;
      fyra = true;
    } else {

      pris -= 50;
      antal -= 1;
      fyra = false;
    }


    $('#pris').text("Pris: " + pris + "kr");
    $('#antal').text("Antal Planer: " + antal + "st")


  });

  $('#betala').click(function() {

    tidpunkt = $("#datum").val();


    alert("Du har bokat en tid: " + tidpunkt + "\nDet kommer att kosta: " + pris + "kr"  );





  });

});
