productosMock.forEach((unProducto)=>{
    console.table(unProducto);
})
let mailIngresado = prompt( " Ingrese su correo: ");
let passwordIngresado =prompt(" Ingrese su contraseña: ");
//MUESTRA EN LA CONSOLA LA LISTA TOTAL DE PRODUCTOS
let cantidadProducto1 = 0;
let cantidadProducto2 = 0;
let cantidadProducto3 = 0;
let cantidadProducto4 = 0;
let cantidadProducto5 = 0;
//FUNCION PARA DAR LA BIENVENIDA
function darBienvenida(){
    alert( "Bienvenido(a), "+ usuario1.obtenerNombreCompleto ()+ " puede proceder con su compra.");
}
//FUNCION PARA QUE SEA UN NUMERO Y MAYOR DE CERO 
const validarNaN = (cantidadProductoX)=>{
  if (isNaN(cantidadProductoX)|| cantidadProductoX<=0) {
    return true;
}}
//VALIDAR USUARIO Y CONTRASEÑA
if ( mailIngresado ==usuario1.email && passwordIngresado ==usuario1.contrasenia){
    darBienvenida()
// AÑADIR CANTIDAD DEL PRODUCTO Nº 1
let result = productosMock.find( (item) => (item.id == "Producto 1" ) )
console.table(result)
let addProducto = prompt("¿Desea añadir al carrito el producto Nº 1 ?\nResponde SI o NO");
if ( addProducto.trim().toUpperCase() == "SI" ){
    cantidadProducto1= parseInt(prompt("Ingrese la cantidad que requiere del Producto Nº 1 "));
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
result = productosMock.find( (item) => (item.id == "Producto 2" ) )
console.table(result)
addProducto = prompt("¿Desea añadir al carrito el producto Nº 2 ?\nResponde SI o NO");
if ( addProducto.trim().toUpperCase() == "SI" ){
    cantidadProducto2= parseInt(prompt("Ingrese la cantidad que requiere del Producto Nº 2 "));
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
    result = productosMock.find( (item) => (item.id == "Producto 3" ) )
    console.table(result) 
    
    addProducto = prompt("¿Desea añadir al carrito el producto Nº 3 ?\nResponde SI o NO");
if ( addProducto.trim().toUpperCase() == "SI" ){
    cantidadProducto3= parseInt(prompt("Ingrese la cantidad que requiere del Producto Nº 3 "));
      while (validarNaN(cantidadProducto3)){
      alert( "No añadiste ningún producto Nº 3 al carrito") 
      cantidadProducto3= parseInt(prompt("Ingrese la cantidad que requiere del Producto Nº 3 "));
       } 
 alert (" Se adicionó al carrito "+ cantidadProducto3 + " unidad(es) del producto Nº 3");
  }
     else{
        alert( "No añadiste ningún producto Nº 3 al carrito");
    } 

    // AÑADIR CANTIDAD DEL PRODUCTO Nº 4
    result = productosMock.find( (item) => (item.id == "Producto 4" ) )
    console.table(result) 
    
    addProducto = prompt("¿Desea añadir al carrito el producto Nº 4 ?\nResponde SI o NO");
if ( addProducto.trim().toUpperCase() == "SI" ){
    cantidadProducto4= parseInt(prompt("Ingrese la cantidad que requiere del Producto Nº 4 "));
      while (validarNaN(cantidadProducto4)){
      alert( "No añadiste ningún producto Nº 4 al carrito") 
      cantidadProducto4= parseInt(prompt("Ingrese la cantidad que requiere del Producto Nº 4 "));
       } 
 alert (" Se adicionó al carrito "+ cantidadProducto4 + " unidad(es) del producto Nº 4");
  }
     else{
        alert( "No añadiste ningún producto Nº 4 al carrito");
    } 
        // AÑADIR CANTIDAD DEL PRODUCTO Nº 5
        result = productosMock.find( (item) => (item.id == "Producto 5" ) )
        console.table(result) 
       addProducto = prompt("¿Desea añadir al carrito el producto Nº 5 ?\nResponde SI o NO");
    if ( addProducto.trim().toUpperCase() == "SI" ){
        cantidadProducto5= parseInt(prompt("Ingrese la cantidad que requiere del Producto Nº 5 "));
          while (validarNaN(cantidadProducto5)){
          alert( "No añadiste ningún producto Nº 5 al carrito") 
          cantidadProducto5= parseInt(prompt("Ingrese la cantidad que requiere del Producto Nº 5 "));
           } 
     alert (" Se adicionó al carrito "+ cantidadProducto5 + " unidad(es) del producto Nº 5");
      }
         else{
            alert( "No añadiste ningún producto Nº 5 al carrito");
        } 
    
//SUMAR CANTIDADES DEL CARRITO DE COMPRA
    console.log("Muchas gracias por tu compra");
    const HOY=new Date();
    let cantidadTotal= cantidadProducto1+cantidadProducto2+cantidadProducto3+cantidadProducto4+cantidadProducto5 ;
    cantidadTotal=alert("Tienes un total de: " + cantidadTotal + " producto(s) agregados al carrito \nCantidad del producto Nº 1: " + cantidadProducto1 + " producto(s)\nCantidad del producto Nº 2: "+ cantidadProducto2+ " producto(s)\nCantidad del producto Nº 3: "+ cantidadProducto3 +" producto(s) \nCantidad del producto Nº 4: " + cantidadProducto4 + " producto(s)\nCantidad del producto Nº 5: "+ cantidadProducto5 +" producto(s)\nProceso realizado: "+ HOY.toLocaleString ());
}
else{
    alert("El usuario y/o contraseña no son correctos \nLo invitamos a registrarse para proceder con su compra");
}
