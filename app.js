// for => Definimos la cantidad de veces que el ciclo va a recorrerse.
// While => No definimos de antemano la cantidad de veces que va a repetir el ciclo,
//          sino que lo hace de manera dinámica.
/*
 for(1; 2 ;3)
 
 
 1
while(2){

    3
}

*/

/*
let pregunta = "si"

while(pregunta === "si"){
    
    //    Proceso
    
    pregunta = prompt("Querés continuar cargando?")  // pregunta = "no"
}
*/

/*
let pregunta

do{
    // Proceso
    pregunta = prompt("Querés continuar cargando?")
}while(pregunta === "si")
*/

/*
let pregunta

pregunta = prompt("Arrancas a cargar datos?")

while(pregunta === "si"){
    
    //    Proceso
    
    pregunta = prompt("Querés continuar cargando?")
}
*/
/*
let monto, resultado = 0, continuar = "si"

while(continuar === "si"){
    // Arranca el Proceso
    monto = prompt("Ingresa el valor de la factura")
    resultado = resultado + parseInt(monto)
    // Finaliza el proceso 

    continuar = prompt("Queres cargar otra factura?")
}

console.log("EL monto total es ", resultado)
*/

/*
monto = 0

// Ingresa porque la comparación es TRUE
while(monto === 0){
    console.log("LEYENDA")
}

// No ingresa porque monto es 0 (es FALSY)
while(monto){
    console.log("LEYENDA")
}
*/

/*
let monto, resultado = 0, continuar

do{
    // Arranca el Proceso
    monto = prompt("Ingresa el valor de la factura")
    resultado = resultado + parseInt(monto)
    // Finaliza el proceso 

    continuar = prompt("Queres cargar otra factura?")
}while(continuar === "si")

console.log("EL monto total es ", resultado)
*/

/* 
    Simular el ciclo for
    for(i=0; i< 10; i++)
    mostrar i
*/
/*
Referencia : for(1; 2 ;3)
1
do{
    
    3
}while(2)

let i = 0
do{
    console.log(i)
    i++
}while(i<10)

----------------------------------------

1
while(2){
    3
}

let j = 0
while(j<10){
    console.log(j)
    j++
}

*/