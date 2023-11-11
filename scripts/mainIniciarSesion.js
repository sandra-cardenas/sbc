console.log(" Ingresa tu correo y contraseña para Iniciar Sesión");
//SE TIENE ACCESO A LOS VALORES FORMULARIO
const FORMULARIOINICIOSESION = document.getElementById
("inicioFormularioForm");

 FORMULARIOINICIOSESION.addEventListener("submit", (e)=>{
    e.preventDefault();
//PARA OBTENER VALORES DE LOS INPUTS
let correo = document.getElementById("correoLogin").value;
let password = document.getElementById("contraseñaLogin").value;
// PARA QUE LOS INPUTS SEAN COMPLETADOS EN EL FORMULARIO
if (!validarForm(correo,password)) {
                   
      return false
}
// SE VALIDA SI EL CORREO EXISTE O NO
const unUsuario =conseguirCorreo(usuarios,correo);
console.log("correo recuperado",unUsuario);
if (!unUsuario) {
    Swal.fire({
        icon: "error",
        title: "ERROR AL INICIAR SESIÓN",
        text: " El correo ingresado no esta registrado.\nLo invitamos a registrarse para proceder con su compra",
          });
    return false;
}
// SE CONSIGUE QUE LA CONTRASEÑA SEA IGUAL A LA DEL CORREO INGRESADO
if (!unUsuario.miPassword (password)) {
    Swal.fire({
        icon: "error",
        title: "ERROR AL INICIAR SESIÓN",
        text: " La contraseña ingresada no es correcta",
          });
        return false;
    }
// BIENVENIDA DE INICIO DE SESION
    registrarInicioSesion(unUsuario);
   // window.location = "productos.html"
    unUsuario.inicioSesion = true;

    if ( unUsuario.inicioSesion = true) {
      
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Bienvenido(a), \n"+ unUsuario.obtenerNombreCompleto ()+ " puedes dirigirte a la página de PRODUCTOS para proceder con tu compra.",
            showConfirmButton: false,
            allowOutsideClick: false,
            html:`<a href="./productos.html">PRODUCTOS</a>`
          });
          FORMULARIOINICIOSESION.reset();     
    }
    
      });  

//VALIDA QUE SE INGRESEN DATOS A LOS INPUTS
const validarForm =(correo,password)=>{
   if (correo.length ==0) {
    Swal.fire({
        icon: "warning",
        title: "RECUERDA...",
        text: " Debes ingresar tu correo electronico para iniciar sesión",
          });
    return false
           }
   if (password.length==0) {
    Swal.fire({
        icon: "warning",
        
        title: "RECUERDA...",
        text: " Debes ingresar tu contraseña para iniciar sesión",
          });
    return false
   }
return true
};







