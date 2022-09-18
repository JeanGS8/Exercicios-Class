class Cliente{
   private nome: string;
   private cpf: string;
   private sexo: string;

   constructor(nome: string, cpf: string, sexo: string){
      this.nome = nome;
      this.cpf = cpf;
      this.sexo = sexo;
   }

   // Nome
   public getNome(): string{
      return this.nome;
   }
   
   // CPF
   public getCpf(): string{
      return this.cpf;
   }

   // SEXO
   public getSexo(): string{
      return this.sexo;
   }
}

const nome: string = prompt('Digite seu nome');
const cpf: string = prompt('Digite seu CPF');
const sexo: string = prompt('Digite seu sexo');

const cliente1: Cliente = new Cliente(nome, cpf, sexo);

console.log(`Seu nome é ${cliente1.getNome()}`);
document.write(`Seu nome é ${cliente1.getNome()}`);

console.log(`Seu CPF é ${cliente1.getCpf()}`);
document.write(`<br>Seu CPF é ${cliente1.getCpf()}`);

console.log(`Seu sexo é ${cliente1.getSexo()}`);
document.write(`<br>Seu sexo é ${cliente1.getSexo()}`);