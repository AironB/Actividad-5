class Cancion{
    protected titulo:string
    protected genero:string
    private autor:string

    constructor(titulo:string,genero:string,autor:string){//         this.titulo=titulo;
        this.titulo=titulo;
        this.genero=genero;
        this.autor=autor;
    }
    setAutor(autor:string){
        this.autor=autor;
    }
    getAutor(){
        return this.autor="";
    }
    mostrarDatos(){
        console.log(`Cancion:${this.titulo}\n Genero:${this.genero}\nAutor:${this.autor}`);
        
    }
}
let rola = new Cancion("Cruel Silencio","Simphonyc/Gothic Metal","Aggelos");
console.log(rola);