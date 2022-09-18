var Funcionario = /** @class */ (function () {
    function Funcionario(nome, empresa, funcao, salario) {
        this.nome = nome;
        this.empresa = empresa;
        this.funcao = funcao;
        this.salario = salario;
    }
    // NOME
    Funcionario.prototype.getNome = function () {
        return this.nome;
    };
    // EMPRESA
    Funcionario.prototype.getEmpresa = function () {
        return this.empresa;
    };
    // FUNCAO
    Funcionario.prototype.getFuncao = function () {
        return this.funcao;
    };
    // SALARIO
    Funcionario.prototype.getSalario = function () {
        return this.salario;
    };
    return Funcionario;
}());
var nome = prompt('Digite seu nome: ');
var empresa = prompt('Digite o nome da empresa que trabalha: ');
var funcao = prompt('Digite sua função na empresa: ');
var salario = Number(prompt('Digite seu salário: '));
var funcionario1 = new Funcionario(nome, empresa, funcao, salario);
console.log('-=-= Dados do funcionário =-=-');
document.write('-=-= Dados do funcionário =-=-');
console.log("Nome: ".concat(funcionario1.getNome()));
document.write("<br>Nome: ".concat(funcionario1.getNome()));
console.log("Empresa que trabalha: ".concat(funcionario1.getEmpresa()));
document.write("<br>Empresa que trabalha: ".concat(funcionario1.getEmpresa()));
console.log("Fun\u00E7\u00E3o na empresa: ".concat(funcionario1.getFuncao()));
document.write("<br>Fun\u00E7\u00E3o na empresa: ".concat(funcionario1.getFuncao()));
console.log("Sal\u00E1rio: ".concat(funcionario1.getSalario()));
document.write("<br>Sal\u00E1rio: ".concat(funcionario1.getSalario()));
