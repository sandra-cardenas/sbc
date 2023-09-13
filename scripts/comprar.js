const MAIL = "user1@gmail.com"
const PASSWORD = "1234"
let mailIngresado = prompt( " Ingrese su correo: ");
let passwordIngresado =prompt(" Ingrese su contraseña: ");
let cantidadProducto1 = 0;
let cantidadProducto2 = 0;
let cantidadProducto3 = 0;


function darBienvenida(){
    alert( "Bienvenido(a), puede proceder con su compra.");

}

if ( mailIngresado ==MAIL && passwordIngresado ==PASSWORD){
    darBienvenida()

// AÑADIR CANTIDAD DEL PRODUCTO Nº 1
let addProducto1 = prompt("¿Desea añadir al carrito el producto Nº 1 ?\nResponde SI o NO");
if ( addProducto1.trim().toUpperCase() == "SI" ){
    cantidadProducto1= parseInt(prompt("Ingrese la cantidad que requiere del Producto Nº 1 "));
    function validarNaN(cantidadProducto1) {
  if (isNaN(cantidadProducto1)|| cantidadProducto1<=0) {
    return true;
  }
  return false;
}
    while (validarNaN(cantidadProducto1)){
                      alert( "No añadiste ningún producto Nº 1 al carrito") 
        cantidadProducto1= parseInt(prompt("Ingrese la cantidad que requiere del Producto Nº 1 "));
     }  
     alert (" Se adicionó al carrito "+ cantidadProducto1 + " unidad(es) del producto Nº 1");
    }
     else{
        alert( "No añadiste ningún producto Nº 1 al carrito");
    } 

// AÑADIR CANTIDAD DEL PRODUCTO Nº 2
let addProducto2 = prompt("¿Desea añadir al carrito el producto Nº 2 ?\nResponde SI o NO");
if ( addProducto2.trim().toUpperCase() == "SI" ){
    cantidadProducto2= parseInt(prompt("Ingrese la cantidad que requiere del Producto Nº 2 "));
    function validarNaN(cantidadProducto2) {
  if (isNaN(cantidadProducto2)|| cantidadProducto2<=0) {
    return true;
  }
    return false;
}
    while (validarNaN(cantidadProducto2)){
                      alert( "No añadiste ningún producto Nº 2 al carrito") 
        cantidadProducto2= parseInt(prompt("Ingrese la cantidad que requiere del Producto Nº 2 "));
     }  
     alert (" Se adicionó al carrito "+ cantidadProducto2 + " unidad(es) del producto Nº 2");
    }
     else{
        alert( "No añadiste ningún producto Nº 2 al carrito");
    } 


    // AÑADIR CANTIDAD DEL PRODUCTO Nº 3
let addProducto3 = prompt("¿Desea añadir al carrito el producto Nº 3 ?\nResponde SI o NO");
if ( addProducto3.trim().toUpperCase() == "SI" ){
    cantidadProducto3= parseInt(prompt("Ingrese la cantidad que requiere del Producto Nº 3 "));
    function validarNaN(cantidadProducto3) {
  if (isNaN(cantidadProducto3)|| cantidadProducto3<=0) {
    return true;
  }
    return false;
}
    while (validarNaN(cantidadProducto3)){
                      alert( "No añadiste ningún producto Nº 3 al carrito") 
        cantidadProducto3= parseInt(prompt("Ingrese la cantidad que requiere del Producto Nº 3 "));
     }  
     alert (" Se adicionó al carrito "+ cantidadProducto3 + " unidad(es) del producto Nº 3");
    }
     else{
        alert( "No añadiste ningún producto Nº 3 al carrito");
    } 

    let cantidadTotal= cantidadProducto1+cantidadProducto2+cantidadProducto3 ;
    cantidadTotal=alert("Tienes un total de: " + cantidadTotal + " producto(s) agregados al carrito \nCantidad del producto Nº 1: " + cantidadProducto1 + " producto(s)\nCantidad del producto Nº 2: "+ cantidadProducto2+ " producto(s)\nCantidad del producto Nº 3: "+ cantidadProducto3 +" producto(s)");


}
else{
    alert("El usuario y/o contraseña no son correctos \nLo invitamos a registrarse para proceder con su compra");
}
