//1._El uso de la consola
//console.log("Conexión activa")

//2._Variables y tipos de datos
//Variables: Es un espacio en memoria temporal donde
//vamos a guardar información de utilidad para nuestro programa

//3._Formas que tengo disponibles para declarar variables dentro de JS

//3.1._var
/*var nombre = "Ricardo" //string o cadena de texto
var edad = 24 //number o numérico
var boolean = true // false booleano
var indefinido = undefined // indefinido o undefined
var nulo = null // null o nulo
console.log("Mi nombre es " + nombre + " mi edad es: " + edad)*/

//3.2._ let
/*let nombre = "Ricardo" //string o cadena de texto
nombre = "Gustavo"
let edad = 24 //number o numérico
let boolean = true // false booleano
let indefinido = undefined // indefinido o undefined
let nulo = null // null o nulo
console.log("Mi nombre es " + nombre + " mi edad es: " + edad)*/

//3.3._ const
//TIPOS DE DATOS PRIMITIVOS
/*let nombre = undefined //string o cadena de texto
const edad = 24 //number o numérico*/
const boolean = true // false booleano
const indefinido = undefined // indefinido o undefined
const nulo = null // null o nulo
//console.log(nombre)
//nombre = 'Ricardo'

//TIPOS DE DATOS COMPUESTOS
//Puedo almacenar múltiples tipos de datos
//Objeto: atributo, valor, método
const usuario = { //objeto
    nombre : 'Ricardo',
    edad: 24,
    email:'email@email.com',
    obtenerNombre: function(){//métodos
        console.log('Ricardo')
    }
}
//acceso por punto (para un solo atributo)
console.log(usuario.nombre)

//desestructuración (múltiples atributos)
const {nombre, edad} = usuario
console.log(nombre)