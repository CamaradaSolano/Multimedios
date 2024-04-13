function calcular(operacion) {
  let a = parseInt(document.getElementById("dato1").value);
  let b = parseInt(document.getElementById("dato2").value);
  let resultado;

  const operations = {
    suma: (a, b) => a + b,
    resta: (a, b) => a - b,
    multiplicacion: (a, b) => a * b,
    division: (a, b) => a / b,
    mayormenor: (a, b) => {
      if (a > b) {
        return "El primer número es mayor que el segundo.";
      } else if (a < b) {
        return "El segundo número es mayor que el primero.";
      } else {
        return "Ambos números son iguales.";
      }
    },
    default: () => "Operación no válida"
  };

  resultado = operations[operacion] ? operations[operacion](a, b) : operations.default();

  document.getElementById("resultado").innerHTML = resultado;
}

function reset() {
  // Limpiar los campos de entrada y el resultado
  document.getElementById("dato1").value = "";
  document.getElementById("dato2").value = "";
  document.getElementById("resultado").innerHTML = "";
}

function divisionSinDivision(dato1, dato2) {
  
  if (dato2 == 0) {

    document.getElementById("resultado").innerHTML = "No se puede dividir por cero.";
      return;
  }

  let cociente = 0;
  let resto = dato1;

  while (resto >= dato2) {
      resto -= dato2;
      cociente++;
  }

  document.getElementById("resultado").innerHTML = cociente;
}


  