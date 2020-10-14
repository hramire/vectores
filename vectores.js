class Vector {
    constructor() {
        this.array;
    }
    llenar(array) {
        this.array = array;
        for (let i = 0; i <= 9; i++) {
            array[i] = (i + 1);
        }
        for (let x = 0; x <= array.length; x++) {
            if ((array[x] % 2) != 0) {
                array.splice(x, 1);
            }
        }
    }
    mostrar() {
        return (this.array);
    }
    girarDerecha() {
        let numFinal = this.array[(this.array.length - 1)];
        this.array.splice(0, 0, numFinal);
        this.array.splice((this.array.length - 1), 1);
        return (this.array);
    }
    girarIzquierda() {
        let numInicial = this.array[0];
        this.array.splice(this.array.length, 0, numInicial);
        this.array.splice(0, 1);
        return (this.array);
    }
    invertir() {
        for (let i = 0; i <= this.array.length; i++) {
            let numFinal = this.array[(this.array.length - 1)];
            this.array.splice(i, 0, numFinal);
            this.array.splice((this.array.length - 1), 1);
        }
        return (this.array);
    }
}

let vector = new Vector;
vector.llenar(new Array);
console.log(`El vector con números pares es: ${vector.mostrar()}`);
console.log(`El vector girado a la derecha: ${vector.girarDerecha()}`);
console.log(`El vector girado a la izquierda: ${vector.girarIzquierda()}`);
console.log(`El vector invertido ${vector.invertir()}`);