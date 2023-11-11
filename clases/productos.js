class producto{
    constructor( nombre,descripcion,precio,id, tipo,material ,garantia) {
    this.nombre= nombre;
    this.descripcion = descripcion;
    this.precio= precio;
    this.id= id;
    this.tipo = tipo;
       this.material=material;
      this.garantia= garantia;
    }
   toString = ()=>{
        return this.id +" "+ this.nombre
    };
}