// let pregunta = alert("elige la operacion que deseas realizar en la siguiente ventana");

// let Operacion = parseInt(prompt("1: suma, 2: resta, 3: dividir, 4: multiplicar, 5: potensiacion, 6: Raiz cuadrada, 7: Raiz cubica"));

// const Opera1 = ()=> {
//   if (Operacion == 1) {
//     let num1 = parseInt(prompt("primer numero a sumar"));
//     let num2 = parseInt(prompt("segundo numero a sumar"));
//     let resultado =  num1 + num2;
//     console.log("el resultado es: " + resultado);
//   } 
// }
 
// Opera1 ();

// const Opera2 = ()=> {
//   if (Operacion == 2) {
//     let num1 = parseInt(prompt("primer numero a restar"));
//     let num2 = parseInt(prompt("segundo numero a restar"));
//     let resultado = num1 - num2;
//     console.log("el resultado es: " + resultado)
//   }
// }

// Opera2 ();

// const Opera3 = ()=> {
//   if (Operacion == 3) {
//     let num1 = parseInt(prompt("primer numero a dividir"));
//     let num2 = parseInt(prompt("segundo numero a dividir"));
//     let resultado = num1 / num2;
//     console.log("el resultado es: " + resultado);
//   }
// }

// Opera3 ();

// const Opera4 = ()=> {
//   if (Operacion == 4) {
//     let num1 = parseInt(prompt("primer numero a multiplicar"));
//     let num2 = parseInt(prompt("segundo numero a multiplicar"));
//     let resultado = num1 * num2;
//     console.log("el resultado es: " + resultado);
//   } 
// }

// Opera4 ();

// const Opera5 = ()=> {
//   if (Operacion == 5) {
//     let num1 = parseInt(prompt("primer numero (base)"));
//     let num2 = parseInt(prompt("exponente"));
//     let resultado = num1 ** num2;
//     console.log("el resultado es: " + resultado);
//   } 
// }

// Opera5 ();

// const Opera6 = ()=> {
//   if (Operacion == 6) {
//     let num1 = parseInt(prompt("Raiz cuadrada de..."));
//     let resultado = Math.sqrt(num1);
//     console.log("el resultado es: " + resultado);
//   } 
// }

// Opera6 ();

// const Opera7 = ()=> {
//   if (Operacion == 7) {
//     let num1 = parseInt(prompt("Raiz cubica de..."));
//     let resultado = Math.cbrt(num1);
//     console.log("el resultado es: " + resultado);
//   } 
// }

// Opera7 ();





let pregunta = alert("Elige la operación que deseas realizar en la siguiente ventana");

let Operacion = parseInt(prompt("1: suma, 2: resta, 3: dividir, 4: multiplicar, 5: potenciación, 6: Raíz cuadrada, 7: Raíz cúbica"));

const Opera1 = () => {
  if (Operacion == 1) {
    let num1 = parseInt(prompt("Primer número a sumar"));
    let num2 = parseInt(prompt("Segundo número a sumar"));
    let resultado = num1 + num2;
    console.log("El resultado es: " + resultado);
  }
};

Opera1();

const Opera2 = () => {
  if (Operacion == 2) {
    let num1 = parseInt(prompt("Primer número a restar"));
    let num2 = parseInt(prompt("Segundo número a restar"));
    let resultado = num1 - num2;
    console.log("El resultado es: " + resultado);
  }
};

Opera2();

const Opera3 = () => {
  if (Operacion == 3) {
    let num1 = parseInt(prompt("Primer número a dividir"));
    let num2 = parseInt(prompt("Segundo número a dividir"));
    let resultado = num1 / num2;
    console.log("El resultado es: " + resultado);
  }
};

Opera3();

const Opera4 = () => {
  if (Operacion == 4) {
    let num1 = parseInt(prompt("Primer número a multiplicar"));
    let num2 = parseInt(prompt("Segundo número a multiplicar"));
    let resultado = num1 * num2;
    console.log("El resultado es: " + resultado);
  }
};

Opera4();

const Opera5 = () => {
  if (Operacion == 5) {
    let num1 = parseInt(prompt("Primer número (base)"));
    let num2 = parseInt(prompt("Exponente"));
    let resultado = num1 ** num2;
    console.log("El resultado es: " + resultado);
  }
};

Opera5();

const Opera6 = () => {
  if (Operacion == 6) {
    let num1 = parseInt(prompt("Raíz cuadrada de..."));
    let resultado = Math.sqrt(num1);
    console.log("El resultado es: " + resultado);
  }
};

Opera6();

const Opera7 = () => {
  if (Operacion == 7) {
    let num1 = parseInt(prompt("Raíz cúbica de..."));
    let resultado = Math.cbrt(num1);
    console.log("El resultado es: " + resultado);
  }
};

Opera7();
