class ProdutoEletronico{
   private nome: String;
   private preco: Number;

   constructor(nome: String, preco: Number){
      this.nome = nome;
      this.preco = preco;
   }

   // NOME
   public getNome(): String{
      return this.nome;
   }

   // PREÇO
   public getPreco(): Number{
      return this.preco;
   }
}

const nome: String = prompt('Digite o nome do produto: ');
const preco: Number = Number(prompt('Digite o preço do produto: '));

const produto: ProdutoEletronico = new ProdutoEletronico(nome, preco);

console.log(`Produto: ${produto.getNome()}`);
document.write(`Produto: ${produto.getNome()}`);

console.log(`Preço: R$ ${produto.getPreco()}`);
document.write(`<br>Preço: R$ ${produto.getPreco()}`);