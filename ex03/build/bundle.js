var ProdutoEletronico = /** @class */ (function () {
    function ProdutoEletronico(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    // NOME
    ProdutoEletronico.prototype.getNome = function () {
        return this.nome;
    };
    // PREÇO
    ProdutoEletronico.prototype.getPreco = function () {
        return this.preco;
    };
    return ProdutoEletronico;
}());
var nome = prompt('Digite o nome do produto: ');
var preco = Number(prompt('Digite o preço do produto: '));
var produto = new ProdutoEletronico(nome, preco);
console.log("Produto: ".concat(produto.getNome()));
document.write("Produto: ".concat(produto.getNome()));
console.log("Pre\u00E7o: R$ ".concat(produto.getPreco()));
document.write("<br>Pre\u00E7o: R$ ".concat(produto.getPreco()));
