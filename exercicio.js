function Veiculo(modelo, fabricante, ano) {
     this.modelo = modelo;
     this.fabricante = fabricante;
     this.ano = ano;
}

function Carro(modelo, fabricante, ano, portas) {
     Veiculo.call(this, modelo, fabricante, ano);

     this.portas = portas;
}

function Moto(modelo, fabricante, ano, tipo) {
     Veiculo.call(this, modelo, fabricante, ano);

     this.tipo = tipo;
}

const Carro1 = new Carro('Fiesta', 'Ford', 2020, 4);
const Carro2 = new Carro('Logan', 'Renault', 2024, 4);

const Moto1 = new Moto('Fazer', 'Yamaha', 2019, 'Esportiva');
const Moto2 = new Moto('Honda', 'CG', 2022, 'Street');

console.log(Carro1);
console.log(Moto2);