class Aviao{
   private modelo: string;
   private fabricante: string;
   private qtdPassageiros: number;

   constructor(modelo: string, fabricante: string, qtdPassageiros: number){
      this.modelo = modelo;
      this.fabricante = fabricante;
      this.qtdPassageiros = qtdPassageiros;
   }

   // MODELO
   public getModelo(): string{
      return this.modelo;
   }

   // FABRICANTE
   public getFabricante(): string{
      return this.fabricante;
   }

   // PASSAGEIROS
   public getPassageiros(): number{
      return this.qtdPassageiros;
   }
}

const modelo: string = prompt('Digite o modelo do avião: ');
const fabricante: string = prompt('Digite o fabricante do avião: ');
const qtdPassageiros: number = Number(prompt('Digite quantos passageiros estão no avião: '));

const aviao: Aviao = new Aviao(modelo, fabricante, qtdPassageiros);

console.log(`O modelo do avião é: ${aviao.getModelo()}`);
document.write(`O modelo do avião é: ${aviao.getModelo()}`);

console.log(`O fabricante do avião é: ${aviao.getFabricante()}`);
document.write(`<br>O fabricante do avião é: ${aviao.getFabricante()}`);

console.log(`A quantidade de passageiros é: ${aviao.getPassageiros()}`);
document.write(`<br>A quantidade de passageiros é: ${aviao.getPassageiros()}`);