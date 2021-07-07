var valorInicial = 13;
var razao = 5;
var quantidade = 5;
var soma = 0;
var elemento;

elemento = valorInicial;
for (var contador = 0; contador < quantidade; contador++)
{
    console.log(elemento);
    soma += elemento;
    elemento += razao;
}
console.log(`Soma = ${soma}`);