function sum() {
    let a = parseInt(document.getElementById("dato1").value);
    let b = parseInt(document.getElementById("dato2").value);
    let resultado = a + b;
    document.getElementById("resultado").innerHTML = resultado;
  }
  
  function rest() {
    let a = parseInt(document.getElementById("dato1").value);
    let b = parseInt(document.getElementById("dato2").value);
    let resultado = a - b;
    document.getElementById("resultado").innerHTML = resultado;
  }
  
  function multipli() {
    let a = parseInt(document.getElementById("dato1").value);
    let b = parseInt(document.getElementById("dato2").value);
    let resultado = a * b;
    document.getElementById("resultado").innerHTML = resultado;
  }
  
  function divide() {
    let a = parseInt(document.getElementById("dato1").value);
    let b = parseInt(document.getElementById("dato2").value);
    let resultado = a / b;
    document.getElementById("resultado").innerHTML = resultado;
  }

  function reset() {
    // Limpiar los campos de entrada y el resultado
    document.getElementById("dato1").value = "";
    document.getElementById("dato2").value = "";
    document.getElementById("resultado").innerHTML = "";

}

function evaluarMayorMenor() {
  let a = parseInt(document.getElementById("dato1").value);
  let b = parseInt(document.getElementById("dato2").value);

  if (a > b) {
      document.getElementById("resultado").innerHTML = "El primer número es mayor que el segundo.";
  } else if (a < b) {
      document.getElementById("resultado").innerHTML = "El segundo número es mayor que el primero.";
  } else {
      document.getElementById("resultado").innerHTML = "Ambos números son iguales.";
  }
}


  