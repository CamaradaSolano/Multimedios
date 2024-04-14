function divisionSinDivision(dividendo, divisor) {
  // Manejo de casos especiales
  if (divisor === 0) {
      throw new Error("No se puede dividir por cero");
  } else if (divisor === 1) {
      return dividendo;
  } else if (divisor === -1) {
      return -dividendo;
  }

  // Determinar el signo del resultado
  const signo = Math.sign(dividendo) * Math.sign(divisor);

  // Tomar el valor absoluto de los números
  dividendo = Math.abs(dividendo);
  divisor = Math.abs(divisor);

  // Inicializar el contador del resultado
  let resultado = 0;

  // Restar el divisor del dividendo hasta que el dividendo sea menor que el divisor
  while (dividendo >= divisor) {
      dividendo -= divisor;
      resultado++;
  }

  // Aplicar el signo al resultado
  return signo * resultado;
}

function calcular(operacion) {
  const dato1 = parseFloat(document.getElementById("dato1").value);
  const dato2 = parseFloat(document.getElementById("dato2").value);
  let resultado;

  switch (operacion) {
      case "suma":
          resultado = dato1 + dato2;
          break;
      case "resta":
          resultado = dato1 - dato2;
          break;
      case "multiplicacion":
          resultado = dato1 * dato2;
          break;
      case "division":
          try {
              resultado = divisionSinDivision(dato1, dato2);
          } catch (error) {
              alert(error.message);
              return;
          }
          break;
      case "mayormenor":
          resultado = dato1 > dato2 ? "El primer número es mayor" : dato1 < dato2 ? "El segundo número es mayor" : "Los números son iguales";
          break;
      default:
          alert("Operación no válida");
          return;
  }

  document.getElementById("resultado").textContent = resultado;
}

function reset() {
  document.getElementById("dato1").value = "";
  document.getElementById("dato2").value = "";
  document.getElementById("resultado").textContent = "";
}



  