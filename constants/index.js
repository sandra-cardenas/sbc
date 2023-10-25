//PARA ACTUALIZAR LISTA DE USUARIOS
const LOCALSTORAGECORREO ="usuarios";
const actualizarListaStorage =(lista =[])=>{
   localStorage.setItem(LOCALSTORAGECORREO,JSON.stringify
(lista));
};
// PARA OBTENER DATOS DE LOS USUARIOS INGRESADOS
const RECUPERARLISTASTORAGE = () =>{
  const recuperados = JSON.parse(localStorage.getItem(LOCALSTORAGECORREO))
  if (recuperados) {
    return recuperados.map((e)=>{
    return new Usuario(e.nombres,e.apellidoPaterno,e.apellidoMaterno,e.dni,e.correo,e.password);
    });
    
  }
   return [];
};
let usuarios= RECUPERARLISTASTORAGE();
//MUESTRA LA LISTA DE USUARIOS EN LA CONSOLA
console.table(usuarios)

//VERIFICA QUE NO HAYA DUPLICADO DE CORREOS REGISTRADOS
const CORREOREGISTRADO = (usuarios = [], identificador = 
    "") => {
      return usuarios.some(
        (unUsuario) =>
          unUsuario.correo.toLowerCase() === identificador.toLowerCase() 
      );
    };
    const conseguirCorreo = (usuarios = [], identificador = "") => {
        return usuarios.find((unUsuario) =>unUsuario.correo === identificador);
        };

// PARA PODER DIRIGIR EL INICIO DE SESION

const USER_LOGED = "usuarioLogueado" ;
const registrarInicioSesion =(unUsuario)=>{
    sessionStorage.setItem(USER_LOGED, JSON.stringify(unUsuario))
}

const recuperarUsuarioLogueado =()=>{
    return JSON.parse(sessionStorage.getItem(USER_LOGED)) || false;
}
const userLogueado = recuperarUsuarioLogueado ();
const isUserlogueado =()=>{
  return !!userLogueado;
}