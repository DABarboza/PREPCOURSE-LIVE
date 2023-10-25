// for

// for (var i = 0; i >= 10; i++) {
//   console.log(i);
// }

// for (var i = 10; i >= 0; i--) {
//   console.log(i);
// }

// function encontrarVocalA(string) {
//   for(var i = 0; i < string.length; i++) {
//     console.log(string[i]);

//     if(string[i] === 'A') {
//       return "Voila, la encontré"
//     }
//   }
// }

// console.log(encontrarVocalA('hola AAAAA'));
// console.log(encontrarVocalA('hola como estas'));

//bucle infinito

// for(var i = 0; i >= 0; i++) {
//   console.log(i);
// }

//while

// var contador = 9;

// while (contador <= 9) {
//   console.log(contador);
//   contador++;
// }

//do-while

// var contador = 0;

// do {
//   contador++;
//   console.log(contador);
// }while(contador <= 9)

//switch

// var color = 'negro';

// switch (color) {
//   case 'rojo':
//     console.log('el color es rojo');
//     break;
//   case 'amarillo':
//     console.log('el color es amarillo');
//     break;
//   case 'azul':
//     console.log('el color es azul');
//     break;
//   default:
//     console.log('el color es desconocido');
// }

// if(color === 'rojo') {
//     console.log('el color es rojo');
// } else if (color === 'amarillo') {
//     console.log('el color es amarillo');
// }

// arrays

// var comidas = ['Pizza', 'Hamburguesa', 'Pastas', 'Lasagna'];

// console.log(comidas);

// console.log(comidas[0]);

// comidas[2] = 'Empanada';
// comidas[3] = 'Hot Dog';
// comidas[4] = 'Soda';

// console.log(comidas);

// for (var i = 0; i < comidas.length; i++) {
//   console.log(comidas[i]);
// }

//for ... of

// for (comida of comidas) {
//   console.log(comida);
// }

//! PUSH
//Agrega al final

// var comidas = ["Pizza", "Hamburguesa", "Pastas", "Lasagna"];
// console.log(comidas);

// comidas.push("HotDog", "Empanada");

// console.log(comidas);

//! POP
// Elimina al final
// comidas.pop();
// comidas.pop();
// console.log(comidas);

//! Unshift
//Agrega al inicio
// comidas.unshift("Sopa", "Milanesa");
// console.log(comidas);

//! Shift
//Elimina al inicio
// comidas.shift();
// console.log(comidas);

//! forEach
// var autos = ["Ford", "Chevrolet", "Toyota", "Audi", "Mazda"];

//Primera forma
// autos.forEach(function (auto) {
//   console.log("Este es mi auto:", auto);
// });

//Segunda forma (callback)
// function mostrarAuto(auto) {
//   console.log("Este es mi auto:", auto);
// }

// function venderAuto(auto) {
//   if (auto.length === 4) {
// console.log("Este auto esta a la venta:", auto);
//   }
// }

// autos.forEach(mostrarAuto);
// autos.forEach(venderAuto);

//! Map
// var numeros = [2, 4, 6, 8, 10];

// Primera forma

// var dobles = numeros.map(function (numero) {
//   return numero * 2;
// });

// console.log(dobles);
// console.log(numeros);

// Forma dos (callback)
// var autos = ["Ford", "Chevrolet", "Toyota", "Audi", "Mazda"];

// function venderAuto(auto) {
//   if (auto.length === 4) {
//     return "Auto vendido";
//   } else {
//     return auto;
//   }
// }

// var autosSinVender = autos.map(venderAuto);
// console.log(autos);
// console.log(autosSinVender);

//! Reduce

// var numeros = [2, 4, 6, 8, 10];
// //             a * b
// //             a=8 * b
// //             a=48 * b
// //             a=384 * b
// //             #3840

// function multiplicarNumeros(a, b) {
//   return a * b;
// }

// var totalProducto = numeros.reduce(multiplicarNumeros);

// console.log(totalProducto);
// console.log(numeros);

// var palabras = ["Hola", "como", "Estas", "?"];

// console.log(palabras[palabras.length - 1]);

// function saludar(a, b) {
//   return a + " " + b;
// }

// var frase = palabras.reduce(saludar);
// console.log(frase);

//! Arguments

// function saludar(nombre, apellido) {
//   console.log("Hola,", nombre, apellido);
// console.log(arguments);
// console.log(arguments[0]);
// console.log(arguments[1]);
// console.log(arguments.length);

//   for (var i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// }

// saludar("Alejo", "Mejia");

//! Objetos

var usuario = {
  nombre: "Daniel",
  edad: 31,
  email: "Bardanii7@gmail.com",
  pais: "Argentino",
  instructor: true,
  password: "chao123",
};

// console.log(usuario);

//? Acceder

//dot(punto)

// console.log(usuario.nombre);
// console.log(usuario.instructor);

//? Bracket

// console.log(usuario["email"]);
// console.log(usuario["pais"]);
// console.log(usuario["password"]);

//Asignar y modificar

//dot

usuario.telefono = 3764608249;
usuario.pais = "Peru";

//bracket

var password = "hola123";

usuario["estrato"] = 3;
usuario["password"] = "mail123";
usuario[password] = "mail321";

//eliminar

//dor
delete usuario.password;
//bracket
delete usuario["email"];

//metodo

usuario.saludar = function (nombre) {
  console.log(
    "Hola me llamo..." + this.nombre + " tengo " + this.edad + " años"
  );
};

usuario.saludar("Luis");

usuario.despedir = function () {
  this.saludar = function () {
    console.log("soy de " + this.pais + ", " + " Chao me voy");
  };
};
usuario.pais = "Argentina";
usuario.despedir();
usuario.saludar();

//hasOwnProperty

// console.log(usuario.hasOwnProperty("profesion"));
// console.log(usuario.hasOwnProperty("pais"));

// console.log(usuario);
