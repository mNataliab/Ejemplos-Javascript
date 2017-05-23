/* este es un comentario 
   multilinea
 */
// comentario en una sola línea

/*---------------------------------------------------------------------------------*/
document.write("DECLARACIONES DE LAS VARIABLES  <br> <br>".bold());


/* DECLARACIONES VAR */
/* var no tiene ambito de bloque crea una variable */
var resultado = [2,3,4,5,6,7,8,9,10];
document.write("La variable : " + resultado[0] + "<br>  ");


/* DECLARACIONES LET */
/* let declara la variable en su propio ambito*/
var vari = 0;
for (let i = vari; i < 10; i++) {
	document.write( " <br> El for es" +i );
	i++;
}


/* DECLARACIONES CONST */
/* una constante*/
const c = { nombre : "Juan", edad : 30 };
c.nombre = "Lucho"; 
document.write("<br> <br> La constante es " +c.nombre);

/*---------------------------------------------------------------------------------*/

document.write(" <br> <br> TIPOS DE DATOS <br> <br> ".bold());


/* TIPO DE DATOS BOOLEAN */
var desicion = true;
if(desicion === true){
	document.write("La variable desicion  es true <br> ");
	desicion=false;
}else{
	document.write("La variable desicion es false <br> ");
}


/* TIPOS DE DATOS UNDEFINED */
var datos;
if(datos === undefined){
	alert("La variable datos es indefinida ");
}


/* TIPO DE DATOS NULL */
var variable = null;
if(variable === null){
document.write(" <br>  La variable es null <br> ");
}else{
document.write("");
}



/* TIPO DE DATOS NUMERICO */
var num = parseInt(prompt("Por favor ingrese el primer valor numerico "));
var num2 = parseInt(prompt("Por favor ingrese el segundo valor numerico"));
if(isNaN(num) || isNaN(num2)){
	document.write(" <br> Algunos de los variables no son numericas <br>");
}else{
	var suma = num+num2;
	document.write(" <br> La suma del numero " + num + " y el numero " + num2 + " es: " + suma );
}



/* TIPO DE DATOS STRING */
var nombre = "MARIA NATALIA BENAVIDES SANABRIA";
document.write("  <br> <br> Mi nombre es : " + nombre + "Es de tipo string");



/* TIPO DE DATOS OBJECT*/
var person = { firstName: "John", lastName : "Doe", id :  5566 };
document.write(" <br> <br> su nombre es " + person.firstName + " Es de tipo object");


/* TIPO DE DATOS SYMBOL*/
/* Los Symbols son tipo de dato único que es inmutable y puede ser utilizado como 
identificador de propiedades de objeto. Estos son como los tipos Number, String, y Boolean primitivos */


/*---------------------------------------------------------------------------------*/

document.write(" <br> <br> LITERALES <br> <br> ".bold());


/* ARRAY*/
var array = ["Natalia",18,"3123509510"];
document.write("El array contiene la siguiente informacion <br> " + array[0] + " <br>" +  array[1] + " <br>" +  array[2] );




/*BOOLEAN*/
var nombre2 = prompt("Por favor digite su nombre completo");
if(isNaN(nombre2)){
	if(nombre2.length > 10  ){
	document.write(" <br> <br> El nombre ingresado "+nombre2+  " contiene mas de 10 caracteteres por lo tanto es true  <br> <br>");
}else{
	document.write(" <br> <br> La sentencia es falsa por lo que " +nombre2+ " no contiene mas de 10 caracteres <br> <br>");
}
}



/*INTEGERS*/
var numero = parseInt(prompt("Digite por favor el radio del circulo"));
const pi = 3.1416;
var perimetro = (2*(pi*numero));
var area = (pi*Math.pow(numero,2));
document.write("  <br> <br> El perimetro del circulo es " + perimetro + " <br> El area del circulo es " +area );




/*FLOAT*/
var numero = parseFloat(prompt("Digite un numero decimal para dividirlo "));
if(numero % 1 != 0){
var division = numero / 13.8;
document.write(" <br> <br>  La division del numero " + numero + " con el numero 13.8 es " +division );
}else{
	document.write(" <br> <br> La vaibale " +numero + " No es un numero por favor digite la variable correctamente para hacer la division")
}




/* OBJETO*/
//https://www.desarrolloweb.com/articulos/literales-objeto-javascript.html
/* Los objetos definen subtipos, los cuales son: String, Number, Boolean, Object, Function, Array , Date, RegExp, Error */
var obj = {nombre: prompt("Por favor digite su nombre"),edad : parseInt(prompt("Por favor digite su edad"))}
	document.write(" <br> <br> Su nombre es " + obj.nombre + " objeto");




/* REGEXP*/
//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
var myRe = new RegExp("d(b+)d", "g"); /* caracteres a buscar en un string */
var myArray = myRe.exec("cdbbdbsbz");
document.write(" <br> <br> El valor de la expresion regular es  : " + myRe.lastIndex + "<br> <br>");




/*STRING*/
document.write( "El gato de Jhon".length);


/*-----------------------------------------------------------------------------------------------------*/

document.write(" <br> <br> SENTENCIA CONDICIONALES <br> <br> ".bold());



/*if/else*/
var numero3 = parseInt(prompt("Ingrese un numero"));
if(numero3 % 2 === 0){
document.write("El numero " + numero3  + " es par <br> <br>") ;
}else{
document.write("El numero no es par <br> <br>" ) ;
}




/*SWITCH*/
var option = parseInt(prompt("Eliga una opcion   1. BEBIDAS  2.FRUTAS   "));
switch(option){
case 1:
var option2 = parseInt(prompt(" Eliga una opcion  1. MARTINI    2. REDS  "));
switch(option2){
case 1:
document.write (" USTED HA ELEGIDO LA BEBIDA MARTINI <br> <br> ");
break;
case 2: 
document.write (" USTED HA ELEGIDO LA BEBIDA REDS <br> <br> ");
break;
default:
document.write("ORDEN NO VALIDA <br> <br>");
}
break;
case 2:
var option = parseInt(prompt(" Eliga una opcion  1.MANZANA     2. MANDARINA "));
switch(option){
case 1:
document.write (" USTED HA ELEGIDO LA FRUTA MANZANA <br> <br>");
break;
case 2: 
document.write (" USTED HA ELEGIDO LA FRUTA MANDARINA <br> <br> ");
break;
default:
document.write("ORDEN NO VALIDA <br> <br>");
}
break;
default:
document.write("NUMERO INCORRECTO <br> <br>");
}



/*-----------------------------------------------------------------------------------------------------*/

document.write(" <br> <br> SENTENCIA DE CAPTURA DE ERROR <br> <br> ".bold());
//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Control_de_flujo_y_manejo_de_errores



/*throw */
//nosotros indicamos un mensaje
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
var mes = parseInt(prompt("Por favor ingrese el NUMERO del mes en que nacio"));
   mes = mes - 1; // Ajustar el número de mes al índice del arreglo (1 = Ene, 12 = Dic)
   var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
      "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciciembre");
	if (meses[mes] != null) {
      document.write( "Usted nacio en el mes " + meses[mes]);
   } else {      
 try {
  throw new Error('Numero invalido!');
} catch (e) {
  document.write(e.name + ': ' + e.message);
}
   }





/*try-catch*/
//la declaración try...catch marca un bloque de instrucciones para intentar (try), y especifica una respuesta si se produce una excepción (catch). 
//https://developer. mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/try...catch
//http://www.anieto2k.com/2009/03/06/el-arte-de-lanzar-errores-en-javascript/
//tipo de error https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/TypeError
let json2 = {name :"John", age: 30}; 
document.write("<br> <br>" +json2.name ); 
try {
	var json = { age: 12 }; //recibe un texto
  document.wite(json.name); //no hay nombre
	
} catch (e) {
  alert(e.message);
  alert(e.RangeError);
}


/*-----------------------------------------------------------------------------------------------------*/


document.write(" <br> <br> CICLOS E ITERACIONES <br> <br> ".bold());
//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Bucles_e_iteraci%C3%B3n#sentencia break


/*for*/
alert("Por favor escribe tres lugares favoritos");
for (let i = 1; i < 4 ; i++) {
var lugar =  prompt( i + " Lugar favorito es: ");

document.write("El" + i + " lugar es " + lugar + "<br>")	
}


/*while*/
var boolen = true
while(boolen){
	document.write("<br> <br>  HOLA ADSI <br> <br>");
	boolen = false;
}



/*do-while*/
var color = "";
var opcion = "";
do{
	  color = prompt("Dame un color "); 
	  opcion = prompt("Escriba 'si' si desea continuar o 'no' en caso contrario ");
	  document.write(" Color ingresado fue " +color);	
}while(opcion != "no");


/*labels para ciclos y continue*/
/*Un label proporciona una sentencia con un identificador 
que permite referirse a él desde cualquier lugar de su programa. 
Por ejemplo, usted puede usar un label para identificar un bucle, 
y usar las sentencias break o continue para indicar si el programa 
debe interrumpir un bucle o continuar su ejecución.*/
document.write("<br>");

checkiandj:
var i = 3;
var j = 7;

  while (i < 4) {
    i += 1;
   checkj:
      while (j > 6) {
        j -= 1;
        if ((j % 2) == 0) {
          
          continue checkj;
        }

      }
     document.write(" <br>  i = " + i );
     document.write(" <br> j = " + j + "<br>");
  }

  /*Una sentencia etiquetada checkiandj 
  contiene una sentencia etiquetada checkj. Si se encuentra 
  continue, el programa termina la iteración en curso de checkj
  y empieza la siguiente iteración. Cada vez que continue es encontrado, 
  checkj reitera hasta que su condición devuelve false. 
  Y cuando devuelve false, el resto de la sentencia checkiandj es completada, 
  y checkiandj reitera hasta que su condición devuelve false. Cuando esto ocurre el programa 
  continua en la siguiente sentencia después de checkiandj.*/




/*break 
break;
break label;
La primera forma de la sintaxis finaliza con lo encerrado por el 
bucle o switch; la segunda finaliza lo especificado por 
la sentencia label.*/
var x = 0;
var z = 0
labelCancelLoops: 
  while (true) {
  document.write(" <br> Primer while: " + x);
  x += 1;
  z = 1;
  while (true) {
    document.write("<br> Segundo while: " + z );
    z += 1;
    if (z === 4 ) {
      break labelCancelLoops; //finaliza cuando z = 4
    } else if (z === 4) { //itera hasta encontrar que x = 2 y z = 4
      break;
    }
  }
}




/*for -- in */


var myObj = { primervalor : "HOLA", segundovalor : "MUNDO", tercervalor : "DESDE JavaScript"}
document.write( " <br> <br> Primero imprime las propiedes del objeto ---");
for( var valorcadauna in myObj ){
 document.write(myObj[valorcadauna] )  
}// hola  mundo desde javascript y en un array muestra las posiciones

 var my = { animal : 1, carro : 2, otros : 3}, myArr = [], i = 0;
 for( myArr[i++] in my );
 document.write("<br> Segundo imprime las caracteristicas ---- "+ myArr + "<br>" );




/*for -- of*/ 
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/for...of
var otro = ["maria","velandia"]
for (let i of otro){
document.write("<br> " + i);
}






/*-----------------------------------------------------------------------------------------------------*/


document.write(" <br> <br> FUNCIONES <br> <br> ".bold());
//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Funciones



/*Expresion de una funcion*/
function square1 (number) {
  return number * number
};



/*llamando una funcion*/
document.write("El valor de la funcion es " +square1(4) +" <br>");



/*Alcance de variable*/
var nombre = "Mauricio";
function obtenerPuntaje () {
  var num1 = 8,
      num2 = 10;
    function agregar() {
    return nombre + " puntaje " + (num1 + num2);
  }
return agregar();
}
document.write("<br> " + obtenerPuntaje());




//recursividad
//es donde una funcion se llama asi misma con factorial 1*2*3..n
function factorial(num)
{
    if (num < 0) {
        return -1;
    } else if (num == 0) {
        return 1;
    }
    else {
        return (num * factorial(num - 1)); //aqui 
    }
}
var result = factorial(8);
document.write("<br> <br> recursividad " +result);




//clausuras
var pet = function(name) {          // La funtion externa define una variable llamada "name"
      var getName = function() {
        return name;                // La funtion interna tiene aceso a la variable "name" de la funcion externa
      }
      return getName;               // Devolver la funtion interna, por lo tanto exponiendola a un ambito exterior
    },
    myPet = pet("Hola");
    
document.write ("<br> <br> " + myPet());


/*-----------------------------------------------------------------------------------------------------*/


document.write(" <br> <br> COLECCIONES <br> <br> ".bold());

//Colecciones (Array, Metodos Array, Matrices,
//Maps, Sets).

//array
var frutas=["naranja","pera","manzana","mango",88];


//Metodos Array
var numeros=[2,"tres",4,"nueve"];
numeros.push("ocho");//une
numeros.pop()//elimina el utimo elemnto
numeros.length()//muestra cuantos hay en total
numeros.sort()//ordena los valores alfabeticamente
numeros.reverse()//ordena de la z a la a



//matrices
var colores=["verde","rojo"];
var col=["azul","amarillo"];
var colo=["neglo","blanco"];

var caja=[colores,col,colo];

//maps
new Map([iterable])
//iterable es un array o cualquier otro objeto iterable cuyos elementos son pares clave-valor (arrays de 2 elementos). Cada
// par clave-valor será agregado al nuevo Map.

//set
new Set([iterable]);
//Si un objeto iterable es pasado, todos sus elementos serán añadidos a un nuevo Set. null es tratado como `undefined`.
/*Los objetos Set son colecciones de valores, se puede iterar sus elementos en el orden de su inserción. Un valor en un Set sólo puede estar
 una vez; éste es único en la colección Set.*/
 




/*-----------------------------------------------------------------------------------------------------*/


document.write(" <br> <br> OPERADORES <br> <br> ".bold());


//Adignacion x = y,x += y,x -= y,x *= y,x /= y,x %= y,x **= y
var n3=5;
n3*= 5;
document.write( n3);


//Comparacion:
/*igual a ==
no igual !=
> mayor que
< menor que
>= mayor o igual que
<= menor igual que*/
var num=2;
var num1=3;
if (num<=num1) {
document.write(" <br> <br> El numero " +num+ "es menor que " +num1);
}


//tipos de operadores:Aritmeticos son:suma, resta, divicion,multiplicacion
var suma=4+4;
var resta=5-4;
var multiplicacion=5*4;
var divicion=4/2;
document.write(" <br> <br>" +suma);



//Logicos: &&,||,
var n1=2;
var n2=3;
if (n1<n2 && n1>n2) {
document.write(" <br> <br>" + n1);

} else {
  if (n1<n2 || n1>n2) {
alert(" <br> <br>" + n2);
}


//ternario
var a = 11;
var numberLiteral = a == 5 ? 'Five' :
                    a == 7 ? 'Seven' :
                    a == 11 ? 'Eleven' :
                    a == 15 ? 'Fifteen' :
                    'Other Number';
 
document.write( " <br> <br>" +numberLiteral ); // Eleven


//string:
 var nombre:"NATALIA";


//delete
var trees = ["redwood","bay","cedar","oak","maple"];
delete trees[3];

//typeof
var miFuncion = new Function("5+2")
var forma="redonda"
var tamano=1

//El operador typeof devuelve los siguientes resultados para estas variables
typeof miFuncion == 'function'   
typeof forma == 'string'
typeof tamano == 'number'



//this
function f1(){
  return this;
}


//void
<a href ='javascript:void(0)'> Haga click aquí para no hacer nada </a>







