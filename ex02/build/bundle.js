var Aviao = /** @class */ (function () {
    function Aviao(modelo, fabricante, qtdPassageiros) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.qtdPassageiros = qtdPassageiros;
    }
    // MODELO
    Aviao.prototype.getModelo = function () {
        return this.modelo;
    };
    // FABRICANTE
    Aviao.prototype.getFabricante = function () {
        return this.fabricante;
    };
    // PASSAGEIROS
    Aviao.prototype.getPassageiros = function () {
        return this.qtdPassageiros;
    };
    return Aviao;
}());
var modelo = prompt('Digite o modelo do avião: ');
var fabricante = prompt('Digite o fabricante do avião: ');
var qtdPassageiros = Number(prompt('Digite quantos passageiros estão no avião: '));
var aviao = new Aviao(modelo, fabricante, qtdPassageiros);
console.log("O modelo do avi\u00E3o \u00E9: ".concat(aviao.getModelo()));
document.write("O modelo do avi\u00E3o \u00E9: ".concat(aviao.getModelo()));
console.log("O fabricante do avi\u00E3o \u00E9: ".concat(aviao.getFabricante()));
document.write("<br>O fabricante do avi\u00E3o \u00E9: ".concat(aviao.getFabricante()));
console.log("A quantidade de passageiros \u00E9: ".concat(aviao.getPassageiros()));
document.write("<br>A quantidade de passageiros \u00E9: ".concat(aviao.getPassageiros()));
