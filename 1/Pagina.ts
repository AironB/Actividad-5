class Pagina {
    protected titulo:string;
    protected color:string;
    protected fuente:string;
    private orientacion: string;

    constructor(titulo:string, color:string, fuente:string, orientacion:string){
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.orientacion= orientacion;
    }
    setOrientacion(orientacion:string){
        this.orientacion=orientacion;
       // return orientacion;
    }
    getOrientacion(){
        return this.orientacion;
    }

    imprimirPropiedades(titulo:string, color:string, fuente:string){
        this.titulo=titulo;
        this.color=color;
        this.fuente=fuente;
        return `Las propiedades de la pagina son\nTitulo:${titulo}\nColor:${color}\nFuente:`;
    }
}
let propiedad = new Pagina("Desarrollo web", "Azul","Arial Black","");
propiedad.setOrientacion("Izquierda");
console.log(propiedad);
