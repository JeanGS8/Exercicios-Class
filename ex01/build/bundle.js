var Cliente = /** @class */ (function () {
    function Cliente(nome, cpf, sexo) {
        this.nome = nome;
        this.cpf = cpf;
        this.sexo = sexo;
    }
    // Nome
    Cliente.prototype.getNome = function () {
        return this.nome;
    };
    // CPF
    Cliente.prototype.getCpf = function () {
        return this.cpf;
    };
    // SEXO
    Cliente.prototype.getSexo = function () {
        return this.sexo;
    };
    return Cliente;
}());
var nome = prompt('Digite seu nome');
var cpf = prompt('Digite seu CPF');
var sexo = prompt('Digite seu sexo');
var cliente1 = new Cliente(nome, cpf, sexo);
console.log("Seu nome \u00E9 ".concat(cliente1.getNome()));
document.write("Seu nome \u00E9 ".concat(cliente1.getNome()));
console.log("Seu CPF \u00E9 ".concat(cliente1.getCpf()));
document.write("<br>Seu CPF \u00E9 ".concat(cliente1.getCpf()));
console.log("Seu sexo \u00E9 ".concat(cliente1.getSexo()));
document.write("<br>Seu sexo \u00E9 ".concat(cliente1.getSexo()));
