class Cuenta {
    protected nombre: string;
    protected cantidad: number;
    protected tipocta: string;
    protected numcta: string;
    private saldo: number;
    constructor(nombre: string, cantidad:number, tipocta:string, numcta:string,saldo:number)
    {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipocta = tipocta;
        this.numcta = numcta;
        this.saldo=saldo;
    }
setSaldo(saldo:number){
    this.saldo = saldo;
}
getSaldo(){
    return this.saldo;
}
depositar(){
    let deposito = 100;
    if (this.cantidad>=0.01){
        this.cantidad=deposito;
        console.log(`Depositaste: ${this.cantidad}`)
    }
    else{

    }
}
retirar(){
    this.cantidad = 5;
    if (this.saldo==0){
        console.log(`primero debes depositar`)
    }else{
        this.saldo=this.saldo - this.cantidad;
        return `retiro realizado con exito te quedan ${this.saldo}`
    }
    
    
}

}
let transaccion=new Cuenta("Airon Bautista", 0, "Corriente","20158963",0)
transaccion.setSaldo(100);
console.log(transaccion);
console.log(transaccion.getSaldo());
transaccion.depositar();
let retiro = new Cuenta("Airon Bautista", 5, "corriente", "20158963", 100)
retiro.setSaldo(0);
console.log(retiro)
console.log(retiro.getSaldo());
retiro.retirar();