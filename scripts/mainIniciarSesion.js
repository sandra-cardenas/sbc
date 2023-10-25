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
    alert ("Ingresa los campos requeridos para iniciar sesión")
    return false
}
// SE VALIDA SI EL CORREO EXISTE O NO
const unUsuario =conseguirCorreo(usuarios,correo);
console.log("correo recuperado",unUsuario);
if (!unUsuario) {
alert("El correo ingresado no esta registrado\nLo invitamos a registrarse para proceder con su compra");
    return false;
}
// SE CONSIGUE QUE LA CONTRASEÑA SEA IGUAL A LA DEL CORREO INGRESADO
if (!unUsuario.miPassword (password)) {
    alert("La contraseña ingresada no es correcta");
        return false;
    }
// BIENVENIDA DE INICIO DE SESION
    registrarInicioSesion(unUsuario);
   unUsuario.inicioSesion = true;
    window.location = "productos.html"
    function darBienvenida(){
        alert( "Bienvenido(a), \n"+ unUsuario.obtenerNombreCompleto ()+ " puede proceder con su compra.");
    }
    darBienvenida()

      }); 

//VALIDA QUE SE INGRESEN DATOS A LOS INPUTS
const validarForm =(correo,password)=>{
   if (correo.length ==0) {
    alert("Ingresa tu correo electronico")
    return false
           }
   if (password.length==0) {
    alert("Ingresa tu contraseña")
    return false
   }
return true
};







