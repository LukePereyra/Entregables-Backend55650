class contador {
    static contadorGlobal = 0;
    constructor(nombre) {
        this.nombre = nombre
        this.valor = 0;
    
    }
    incrementarValor() {
        this.valor++;
        contador.contadorGlobal++;
    }
    decrementarValor() {
        this.valor--;
        contador.contadorGlobal--;
    }
    getResponsable() {
        return this.nombre;
    }
    getCuentaIndividual() {
        return this.valor;
    }
    getCuentaGlobal () {
        return contador.contadorGlobal;
    }
}

const primerContador = new contador("Lucas")
const segundoContador = new contador("Sol")
const tercerContador = new contador("Bautista")

console.log(primerContador.getResponsable())
console.log(segundoContador.getResponsable())
console.log(tercerContador.getResponsable())


primerContador.incrementarValor()
primerContador.incrementarValor()
primerContador.incrementarValor()
primerContador.incrementarValor()
primerContador.incrementarValor()
console.log(primerContador.getCuentaIndividual())

segundoContador.incrementarValor()
segundoContador.incrementarValor()
segundoContador.incrementarValor()
console.log(segundoContador.getCuentaIndividual())
console.log(segundoContador.getCuentaGlobal())

primerContador.decrementarValor()
primerContador.decrementarValor()
segundoContador.decrementarValor()
tercerContador.incrementarValor()
tercerContador.incrementarValor()
tercerContador.incrementarValor()
tercerContador.incrementarValor()
tercerContador.incrementarValor()
tercerContador.incrementarValor()
tercerContador.incrementarValor()
tercerContador.incrementarValor()

console.log(tercerContador.getCuentaIndividual())
console.log(tercerContador.getCuentaGlobal())
