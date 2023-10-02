class producto{
    constructor( id,tipo, nombre,material , precio,garantia) {
    this.id= id;
    this.tipo = tipo;
    this.nombre= nombre;
    this.material=material;
    this.precio= precio;
    this.garantia= garantia;
    }
   toString = ()=>{
        return this.id +" "+ this.nombre
    };
}