class Funcionario{
   private nome: String;
   private empresa: String;
   private funcao: String;
   private salario: Number;

   constructor(nome: String, empresa: String, funcao: String, salario: Number){
      this.nome = nome;
      this.empresa = empresa;
      this.funcao = funcao;
      this.salario = salario;
   }

   // NOME
   public getNome(): String{
      return this.nome;
   }

   // EMPRESA
   public getEmpresa(): String{
      return this.empresa;
   }

   // FUNCAO
   public getFuncao(): String{
      return this.funcao;
   }

   // SALARIO
   public getSalario(): Number{
      return this.salario;
   }
}

const nome = prompt('Digite seu nome: ');
const empresa = prompt('Digite o nome da empresa que trabalha: ');
const funcao = prompt('Digite sua função na empresa: ');
const salario = Number(prompt('Digite seu salário: '));

const funcionario1: Funcionario = new Funcionario(nome, empresa, funcao, salario);

console.log('-=-= Dados do funcionário =-=-');
document.write('-=-= Dados do funcionário =-=-');

console.log(`Nome: ${funcionario1.getNome()}`);
document.write(`<br>Nome: ${funcionario1.getNome()}`);

console.log(`Empresa que trabalha: ${funcionario1.getEmpresa()}`);
document.write(`<br>Empresa que trabalha: ${funcionario1.getEmpresa()}`);

console.log(`Função na empresa: ${funcionario1.getFuncao()}`);
document.write(`<br>Função na empresa: ${funcionario1.getFuncao()}`);

console.log(`Salário: ${funcionario1.getSalario()}`);
document.write(`<br>Salário: ${funcionario1.getSalario()}`);