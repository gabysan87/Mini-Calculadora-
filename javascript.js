const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const botonApretado = boton.textContent;
    // guardar el valor del boton apretado y mostrarlo en la pantalla

    //cuando le de click al boton "c" se reinicie la pantalla y devuelva a 0
    if (boton.id === "c") {
      pantalla.textContent = "0";
      return;
    }

    if (boton.id === "borrar") {
      if (
        pantalla.textContent.length === 1 ||
        pantalla.textContent === "ERROR"
      ) {
        //muestre "0" si la pantalla tiene un solo caracter o si es "ERROR"
        pantalla.textContent = "0";
      } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
        //borra el ultimo caracter de la pantalla
      }
      return;
    }

    //
    if (boton.id === "igual") {
      // cuando le de click al boton igual, este ejecute la operacion
      try {
        pantalla.textContent = eval(pantalla.textContent);
      } catch {
        pantalla.textContent = "ERROR";
      }
      return;
    }

    // muestre el valor del boton apretado en la pantalla
    if (pantalla.textContent === "0" || pantalla.textContent === "ERROR") {
      pantalla.textContent = botonApretado;
    } else {
      pantalla.textContent += botonApretado;
    }
  });
});

// eval es un funcion de javascript que evalua una cadena de texto como si fuera codigo JS.
// en este caso, evalua la cadena de texto que se encuentra en la pantalla y devuelve el resultado de la operacion.
// otra forma de usar eval seria con una funcion con un objeto que contenga las operaciones y los numeros ejemplo:

// const operaciones = {
//   "+": (a, b) => a + b,
//   "-": (a, b) => a - b,
//   "*": (a, b) => a * b,
//   "/": (a, b) => b !== 0 ? a / b : "ERROR",
// };
