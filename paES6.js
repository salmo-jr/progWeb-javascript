const valorInicial = 13;
const razao = 5;
const quantidade = 5;
let soma = 0;
let elemento;

elemento = valorInicial;
for (let contador = 0; contador < quantidade; contador++)
{
    console.log(elemento);
    soma += elemento;
    elemento += razao;
}
console.log(`Soma = ${soma}`);