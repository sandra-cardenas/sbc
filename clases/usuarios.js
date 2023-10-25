class Usuario {
constructor( nombres,apellidoPaterno,apellidoMaterno,dni, correo,password) {
this.nombres= nombres;
this.apellidoPaterno = apellidoPaterno;
this.apellidoMaterno= apellidoMaterno;
this.dni=dni;
this.correo = correo;
this.password= password;
this.inicioSesion= false;
}
obtenerNombreCompleto = ()=>{
    return this.nombres +" "+ this.apellidoPaterno+" "+this.apellidoMaterno
};
miPassword = (password="") =>{
    return this.password === password
}

}
