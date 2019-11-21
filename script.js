
let intentos = 5;
      let datos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      let c = 0; num = 1;
      let d = 0;
      let perdiste = false;
      let aciertos = 0;
      let anterior = false;
      let numanterior;
      let posanterior;
    iniciar();
    function iniciar() {

      while (c < 8 || d < 2) {
        d = 0;

        while (d < 2) {
          var random = Math.floor((Math.random() * 16));
          if (datos[random] == 0) {
            datos[random] = num;
            console.log("posicion " + random + ":" + num);
            d++;

          }

        }
        c++;
        num++;
      }

    }
    function IMGclick(pos) {

      if (!perdiste) {
        var imagen;
        switch (pos) {
          case 0: imagen = document.getElementById("img1");
            break;
          case 1: imagen = document.getElementById("img2");
            break;
          case 2: imagen = document.getElementById("img3");
            break;
          case 3: imagen = document.getElementById("img4");
            break;
          case 4: imagen = document.getElementById("img5");
            break;
          case 5: imagen = document.getElementById("img6");
            break;
          case 6: imagen = document.getElementById("img7");
            break;
          case 7: imagen = document.getElementById("img8");
            break;
          case 8: imagen = document.getElementById("img9");
            break;
          case 9: imagen = document.getElementById("img10");
            break;
          case 10: imagen = document.getElementById("img11");
            break;
          case 11: imagen = document.getElementById("img12");
            break;
          case 12: imagen = document.getElementById("img13");
            break;
          case 13: imagen = document.getElementById("img14");
            break;
          case 14: imagen = document.getElementById("img15");
            break;
          case 15: imagen = document.getElementById("img16");
            break;

        }
        imagen.src = datos[pos].toString() + ".png";

        // check(pos, imagen);
        setTimeout(check.bind(null, pos), 1000);

      }

    }

    function check(pos) {
      //pausecomp(2000);
      if (anterior) {
        if (posanterior == pos) {
          alert("debes dar vuelta otra diferente");
        } else {
          if (numanterior == datos[pos]) {
            aciertos++;
            anterior = false;
          } else {
            anterior = false;
            var imgANT = document.getElementById("img" + (posanterior + 1).toString()).src = "a.png";
            var imgACT = document.getElementById("img" + (pos + 1).toString()).src = "a.png";
            //imagen.src = "a";
            intentos--;
            var intent = document.getElementById("intt");
            intent.value = intentos;
            if (intentos == 0) {
              alert("perdiste");
              perdiste = true;


            }
          }
        }
      } else {
        anterior = true;
        posanterior = pos;
        numanterior = datos[pos];
      }
      gano();
    }

    function gano() {
      if (aciertos == 8) {
        alert("GANO!!");
        var wall = document.getElementById("wall");
        wall.hidden=false;

      }
    }

    function Reiniciar() {
      intentos = 5;
      var intent = document.getElementById("intt");
      intent.value = intentos;
      aciertos = 0;
      perdiste = false;
      var img;
      for (var i = 1; i < 16; i++) {
        img = document.getElementById("img" + (i).toString()).src = "a.png";

      }
      for(var i=0;i<16;i++){
        datos[i]=0;
      }
       c = 0; num = 1;
       d = 0;

       anterior = false;
      iniciar();
    }
    
