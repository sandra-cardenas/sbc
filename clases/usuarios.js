class usuario{
constructor( name,apellidoPaterno,apellidoMaterno,dni, correo,password) {
this.nombre= name;
this.apellidoP = apellidoPaterno;
this.apellidoM= apellidoMaterno;
this.cedula=dni;
this.email = correo;
this.contrasenia= password;
}
obtenerNombreCompleto = ()=>{
    return this.nombre +" "+ this.apellidoP
};

 


}
const usuario1 = new usuario( "Sandra", "Cardenas","Paredes",
"76293433","user1@gmail.com","1234")
   
   
