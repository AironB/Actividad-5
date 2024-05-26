class Calculadora {
    protected num1:number;
    protected num2:number;
    private resultado: number;

    constructor(num1:number, num2:number){
        this.num1=8;
        this.num2=5;
        this.resultado=0;
    }
    setResultado(result:number){
        this.resultado=result;
    }
    sumar(){
        let result=0;
        result=this.num1+this.num2;
        console.log(`El resultado de la suma es:${result}`);
    }
    restar(){
        let result=0;
        result=this.num1-this.num2;
        console.log(`El resultado de la resta es:${result}`);
    }
    multiplicar(){
        let result=0;
        result=this.num1*this.num2;
        console.log(`El resultado de multiplicar es:${result}`);
    }
    dividir(){
        let result=0;
        result=this.num1/this.num2;
        console.log(`el resultado de dividir es: ${result}`);
    }
    potencia(){
        let result=0;
        for (let i = 0; i=this.num2;i++){
            result=this.num1*this.num1;
        }
        console.log(`El resultado de la potencia es: ${result}`);
    }
    factorial(num1: number): number {
       num1=this.num1
       if (num1 === 0) {
           return 1;
       } else {
           return num1 * this.factorial(num1 - 1);
       }
   }
   calculate() {
       let result=0
       if (this.num1 < 0) {
           console.log('El número debe ser no negativo');
       } else {
           result = this.factorial(this.num1);
           console.log(`El factorial de ${this.num1} es ${result}`);
       }
   }
}

let suma=new Calculadora(5,5);
console.log(suma);
suma.sumar();
let resta=new Calculadora(5,5);
console.log(resta);
resta.restar();
let multi=new Calculadora(5,5);
console.log(multi);
multi.multiplicar();
let div=new Calculadora(5,5);
console.log(div);
div.dividir();
let exponente=new Calculadora(5,5);
console.log();
exponente.potencia();
let factori = new Calculadora(5,8);
console.log();
factori.calculate();