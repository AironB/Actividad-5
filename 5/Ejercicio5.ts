abstract class Persona{
    protected nombre:string
    protected apellido:string
    protected direccion: string
    protected telefono: string
    protected edad: number
    
    constructor(nombre:string, apellido:string, direccion:string, telefono: string, edad:number){
        this.nombre=nombre;
        this.apellido=apellido;
        this.direccion=direccion;
        this.telefono=telefono;
        this.edad=edad;

    }
    mayoriaEdad(){
        if (this.edad>=18){
            console.log(`La persona es mayor de edad`)
        }
        else{
            console.log(`La persona es menor de edad`)
        }
    }
    abstract imprimirDatos():void;

}
class Airon extends Persona{
    protected empleado:boolean;
    private sueldo: number;
    constructor(nombre:string, apellido:string, direccion:string, telefono:string, edad:number){
    super(nombre, apellido, direccion, telefono, edad);
    this.empleado = this.empleado;
    this.sueldo=this.sueldo;
    }
    setSueldo(sueldo:number){
        this.sueldo=sueldo
    }
    getSueldo(sueldo:number):number{
        return this.sueldo=sueldo
    }
    imprimirDatos(): void {
        console.log(`los datos de la persona son:\nNombre:${this.nombre}\nApellido:${this.apellido}\nDirección:${this.direccion}\nTelefono:${this.telefono}\nEdad:${this.edad}\nEmpleado:${this.empleado}\nSueldo${this.sueldo}`);
    }
}