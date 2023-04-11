
class Animal {
  constructor(nome) {
    if (this.constructor === Animal) {
      throw new Error("A classe Animal é abstrata e não pode ser instanciada diretamente.");
    }
    this.nome = nome;
  }
  
  comer() {
    console.log(`${this.nome} está comendo.`);
  }
}

class Cachorro extends Animal {
  latir() {
    console.log(`${this.nome} está latindo.`);
  }
}

class Gato extends Animal {
  miar() {
    console.log(`${this.nome} está miando.`);
  }
}

class Passaro extends Animal {
  voar() {
    console.log(`${this.nome} está voando.`);
  }
}

const rex = new Cachorro("Rex");
rex.comer(); // "Rex está comendo."
rex.latir(); // "Rex está latindo."

const felix = new Gato("Felix");
felix.comer(); // "Felix está comendo."
felix.miar(); // "Felix está miando."

const pipa = new Passaro("Pipa");
pipa.comer(); // "Pipa está comendo."
pipa.voar(); // "Pipa está voando."

const garfield = new Gato("Garfield");
garfield.comer(); // "Garfield está comendo."
garfield.miar(); // "Garfield está miando."