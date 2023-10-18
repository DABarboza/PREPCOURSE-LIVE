//! Estoy creando variables
var edad = 25;
var nombre = Daniel; // No es permitida, porque felipe no es un tipo de dato aceptado, lo toma como si fuera una variable
//! Tipos de datos Primitivos
//? Numbers
var numero1 = 5;
var numero2 = 7.9;
var numero3 = -2;
var numero4 = Infinity;
//? Strings
var nombre1 = "Felipe";
var nombre2 = "Lautaro";
var nombre3 = "MATIAS";
var nombre4 = "eduardo";
var frase = "Y en su lecho de muerte dijo: 'Nooooo'.";
var frase2 = 'Y en su lecho de muerte dijo: "Nooooo".';
var frase3 = '';

//? Undefined
var algo; // Defino una variable y no le doy un valor
algo = "Lo que sea";
//? Null
var vacio = null;
//? Not Defined
// Estoy tratando de usar una variable que no esta declarada ni definida, es decir, practicamente, podemos decir que no existe
// Muy peligroso porque nos rompe el codigo
console.log (email);
// console.log → imprimir por pantalla
//? Boolean
var boolean1 = true;
var boolean2 = false;
// Otros tipos de datos → Todo en JS es un objeto
// arrays, objetos, etc → 

//! Operadores
//? Operadores Aritmeticos
// Suma, Resta, Multiplicacion, Division, Modulo, Exponetne
//   +     -           *            /        %         ^
var operacion1 = 24 - 4;
console.log(operacion1) // 20
var operacion2 = 24 * 4;
console.log(operacion2) // 96
var operacion3 = 2 ^ 3 // 2 * 2 * 2 = 8
var operacion4 = 15 / 2 // 7
var operacion5 = 15 % 2 // 1

//* Precedencia de Operadores // → El orden de prioridades de los operadores
// Resuelve lo siguiente: 2 + 3 * 5 - 1
// () ^ / * + -
//* Asociatividad // → ( 2 + 3 ) * ( 5 - 1 )
//                           5     *     4
//? Operadores de Comparacion
//* < menor que
2 < 3 // → true 
5 < 4 // → false
//* > mayor que
2 > 8 // → false
49 > 5 // → true
7 > 7 // → false
//* >> doble igual → compara el valor
7 == 7 // true
4 == "4" // true
"9" == 9 // true
//* === triple igual → compara el valor y el tipo de dato
44 === "44" // false
2 === 2 // true
//* <= Menor o Igual
2 <= 8 // true
2 <= 1 // false
2 <= 2 // true
//* >= Mayor o igual
3 <= 8 // false
3 <= 3 // true
//* != Un signo de admiracion (!) y un igual (=) → Diferente en el valor
3 != 4 // true
3 != "3" // false
"6" != 6 // false
//* !== Un signo de admiracion (!) y dos iguales (==) → Diferente en el valor y el tipo de dato
3 !== "3" // true
9 !== 9 // false

//? Operadores Logicos
// 1. Hoy es jueves
// 2. Estamos en clase
// 3. Esta jugando argentina
// 4. Esta jugando Colombia
//* AND → Es verdadero si ambas sentencias son verdaderas
//   1    AND    2    → false 
// false        true
// 2      AND    3    → true
    //Ampersand → &&
    (1 < 2) && (2 < 3) // → true
//   true       true
//* OR → Es falso si ambas sentencias son falsas
//   1    OR    2 → true
// false      true
//   1    OR    4 → falso
    (10 < 1) || (1 > 2) // → false
//* NOT → Niega la sentencia
// negar 1. → Hoy no es Jueves
// Negar → !
//* !1.
(2 < 1) // false
!(2 < 1) // true

//? Funciones → Una maquinita
// Para poder ejecutar una funcion, tengo que invocarla → darle combustible | energia
// Definir la maquina, darle una estructura
function sumar(a, b) {
    // a = 10, b = 24
    var operacion = a + b;
    // operacion = 34
    return operacion;
}
var resultado = sumar(10, 24);
console.log(resultado);

//? Controladores de flujo
// 1. Hoy es Jueves
// 2. Estamos en e
// 3. Si es martes en la noche, tengo que ver la clase
if(2 < 1){
    console.log("2 es menor que 4")
} else if (2 < 0){
    console.log("dos es menor que 6")
} else {
    console.log("no se cumplio nada")
}

