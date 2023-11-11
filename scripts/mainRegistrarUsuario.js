console.log("Registrar tus datos para poder proceder con la compra");
//OBTIENE LOS DATOS DEL FORMULARIO
const FORMULARIOREGISTRAR = document.getElementById("registroDeUsuarioForm");

 FORMULARIOREGISTRAR.addEventListener("submit", (e)=>{
    e.preventDefault();
// OBTIENE LOS VALORES DE LOS INPUTS
    let nombres= document.getElementById("ingresoNombre").value;
    let apellidoP = document.getElementById("ingresoApellidoP").value;
    let apellidoM= document.getElementById("ingresoApellidoM").value;
    let dni = document.getElementById("ingresoDni").value.trim();
    let correo = document.getElementById("ingresoCorreo").value.trim();
    let password = document.getElementById("ingresoContrasena").value.trim();
    let repetirPassword = document.getElementById("repetirContrasena").value.trim();

if (registrarUsuario(nombres, apellidoP,apellidoM,dni,correo,password,repetirPassword
)) {
    FORMULARIOREGISTRAR.reset();
     Swal.fire({
     icon: "success",
     text: "El usuario se registró satisfactoriamente",
       });

      } else{
       // alert("Verificar el ingreso de los datos")
      }
      }); 
      const CARACTERESMINIMOS = 8;
      const validarFormRegistro =(
     nombres ="",
     apellidoP="",
     apellidoM="",
     dni="",
     correo="",
     password="",
     repetirPassword="" 
        
) =>{
//COMPRUEBA QUE LOS INPUTS NO ESTEN VACIOS
     if (nombres.length== 0){
        Swal.fire({
            icon: "warning",
            text: "No completaste tus Nombres para el registro",
              });
      return false
     }
     if (apellidoP.length== 0){
        Swal.fire({
            icon: "warning",
            text: "No completaste tu Apellido Paterno para el registro",
              });
        
         return false
     }
     if (apellidoM.length== 0){
        Swal.fire({
            icon: "warning",
            text: "No completaste tu Apellido Materno para el registro",
              });
                
         return false
     }
     if (dni.length== 0){
        Swal.fire({
            icon: "warning",
            text: "No completaste tu DNI para el registro",
              });
         return false  
     }
     if (correo.length== 0){
        Swal.fire({
            icon: "warning",
            text: "No completaste tu correo para el registro",
              });
         return false
     }
     if (password.length== 0){
        Swal.fire({
            icon: "warning",
            text: "No completaste tu contraseña para el registro",
              });
        
         return false
     }
     //LA CONTRASEÑA NO DEBE TENER MENOS DE 8 CARACTERES
     if (password.length< CARACTERESMINIMOS) {
        Swal.fire({
            icon: "warning",
            text: "La contraseña debe tener como minimo "+ CARACTERESMINIMOS+ " caracteres",
              });
         return false
         
     }
     if (repetirPassword.length== 0){
        Swal.fire({
            icon: "warning",
            text: "El campo repetir contraseña debe ser completado",
              });
        
         return false
     }
     // PARA COMPROBAR QUE SE INGRESE LA MISMA CONTRASEÑA
     if (password != repetirPassword) {
        Swal.fire({
            icon: "warning",
            text: "Las contraseñas deben ser las mismas",
              });
         return false
     }
     return true;
     
      };

      const registrarUsuario =(
        nombres,
        apellidoPaterno,
        apellidoMaterno,
        dni,
        correo,
        password,
        repetirPassword
     ) =>{
        const errores = validarFormRegistro(
            nombres,
            apellidoPaterno,
            apellidoMaterno,
            dni,
            correo,
            password,
            repetirPassword 
        );
        if (!errores) {
           return false;
        }
        //VERIFICAR QUE NO HAYA DUPLICADO DE CORREOS
        if (CORREOREGISTRADO(usuarios,correo)) {

            Swal.fire({
                icon: "warning",
                text: "El correo ingresado ya se encuentra registrado",
                  });

            return false;
        }
        //GUARDA LOS DATOS INGRESADOS PARA LA CREACION DE UN NUEVO USUARIO
        let unUsuario = new Usuario(nombres,apellidoPaterno,apellidoMaterno,dni,correo.toLowerCase(),password);
        usuarios.push(unUsuario)
        actualizarListaStorage(usuarios);
        return true;
      
     };
