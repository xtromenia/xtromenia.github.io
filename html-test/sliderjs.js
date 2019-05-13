    $(document).ready(function() { //Ser till att dokumentet är färdigt-laddat innan js körs.


      //De sex raderna nedan tar bort css display:none.

      $("#start").show();
      $("#stop").show();
      $("#knapp1").show();
      $("#knapp2").show();
      $("#window").show();
      $("#window2").show();

      //Döljer de bilderna som hade visats om man inte hade js. Ger dem display:none.
      $('#utanjs').hide();
      $(" h1").hide();


      $("#knapp2").click(function() { //Den högra knappen, ger div-taggen knapp2 en klickbar-funktion.

        $('#knapp2').attr("disabled", "disabled"); //Stänger av knappen efter tryck.

        setTimeout('$("#knapp2").removeAttr("disabled")', 500); //Sätter igång knappen igen efter 500ms har passerat.

        var rv = $('#imgs').css('right'); //Får ut värdet för right i css. rv=("right value")

        if (rv == "800px") { //om x värdet åt höger är lika med 800px så skall det inte gå att röra sig mer åt höger.

          $("#imgs").animate({
            right: "+=0px"
          }); //Ökar distansen åt höger med 0px, alltså stannar bilden där den är.

        } else { //Om rv inte är 800px skall detta ske.



          $("#imgs").animate({
            right: "+=200px"
          }); //Förflytta bilden 200px åt höger för att få fram nästa bild i kön.

          $("#räknare").animate({
            right: "+=40px"
          }, 0); //Flyttar räknaren ett steg åt höger från t.ex 1/5 -> 2/5, detta görs direkt pga duration = 0

        }

      });



    });

    $(document).ready(function() {

      $("#knapp1").click(function() { //Funktionen för den Vänstra knappen, gör div "knapp1" till en knapp.

        $('#knapp1').attr("disabled", "disabled"); //Stänger av knappen efter tryck.

        setTimeout('$("#knapp1").removeAttr("disabled")', 500); //Sätter igång knappen igen efter 500ms har passerat.
        //Fixar den buggen som uppstod när man spammklickade en knapp och resulterade i att man åkte ur window's border.
        //Genom att sätta en timeout på knappen går det inte längre att spammklicka.
        var rv = $('#imgs').css('right'); //Tar ut rights värde.

        if (rv == "0px") { //om rights värde är 0

          $("#imgs").animate({
            right: "+=0px" //Skall den icke flytta sig åt vänster.
          });

        } else {

          $("#imgs").animate({
            right: "+=-200px" //Om den inte är 0, flytta -200 åt höger alltså 200px åt vänster.
          });
          $("#räknare").animate({
            right: "+=-40px"
          }, 0); //Flyttar räknaren bakåt ett steg, 40px åt vänster.

        }
      });
    });

    $(document).ready(function() {

      $("#start").click(function() { //Startknappen för att bildspelet ska starta.

        $('#start').attr("disabled", "disabled"); //Stänger av knappen efter tryck.

        setTimeout('$("#start").removeAttr("disabled")', 10000); //Sätter igång knappen igen efter 10000ms har passerat.
        //hade egentligen tänkt mig att pausa knappen tills att stopp blev klickad på, men lyckades inte med det.
        //10000ms ger en iaf tid att se till att bildspelet rör på sig.

        var rv = $('#imgs').css('right');

        auto = setInterval(automat, 4000); //Använder ej var innan för att göra variabeln public, kör automat varje 4000ms


        function automat() { //Skapar funktionen automat som sedan skall kallas på med ett intervall.

          var rv = $('#imgs').css('right');

          if (rv == "800px") { //om rv är 800

            $("#räknare").animate({
              right: "0"
            }, 0); //Samma sak händer med räknaren, den flyttas tillbaka till punkt 0.
            $("#imgs").animate({
              right: "0"
            }, 600); //Förflytta imgs tillbaks till dess startplats.

          } else {

            $("#imgs").animate({
              right: "+=200"
            }, 1000); //annars flyttas den vidare med 200px
            $("#räknare").animate({
              right: "+=40px"
            }, 0); // räknare 40px.


          }

        }

      });



      $("#stop").click(function() { //Funktionen för att stoppa animationer.

        $('#stop').attr("disabled", "disabled"); //Stänger av knappen efter tryck.

        setTimeout('$("#stop").removeAttr("disabled")', 1500); //Sätter igång knappen igen efter 1500ms har passerat.


        clearInterval(auto); //Stoppar intervallet som kör "automat".

        $("#imgs").stop(false, true); //Stoppar animationen som images påverkas av, boleean "true" gör så att animationen



      });
    });
