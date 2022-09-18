class Aviao{
   private modelo: String;
   private fabricante: String;
   private qtdPassageiros: Number;

   constructor(modelo: String, fabricante: String, qtdPassageiros: Number){
      this.modelo = modelo;
      this.fabricante = fabricante;
      this.qtdPassageiros = qtdPassageiros;
   }

   // MODELO
   public getModelo(): String{
      return this.modelo;
   }

   // FABRICANTE
   public getFabricante(): String{
      return this.fabricante;
   }

   // PASSAGEIROS
   public getPassageiros(): Number{
      return this.qtdPassageiros;
   }
}

const modelo: String = prompt('Digite o modelo do avião: ');
const fabricante: String = prompt('Digite o fabricante do avião: ');
const qtdPassageiros: Number = Number(prompt('Digite quantas passageiros estão no avião: '));

const aviao: Aviao = new Aviao(modelo, fabricante, qtdPassageiros);

console.log(`O modelo do avião é: ${aviao.getModelo()}`);
document.write(`O modelo do avião é: ${aviao.getModelo()}`);

console.log(`O fabricante do avião é: ${aviao.getFabricante()}`);
document.write(`<br>O fabricante do avião é: ${aviao.getFabricante()}`);

console.log(`A quantidade de passageiros é: ${aviao.getPassageiros()}`);
document.write(`<br>A quantidade de passageiros é: ${aviao.getPassageiros()}`);