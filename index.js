// EXEMPLO DE INTERFACE - TYPESCRIPT
interface Endereco {
    logradouro: String;
    numero: String;
    bairro: String;
}

interface Pessoa {
    nome: String;
    idade: Number;
    assinante: Boolean;
    enderecos: Endereco[];
}

// EXEMPLO JSON
var pessoa: Pessoa = {
    nome: "Mario",
    idade: 25,
    assinante: true,
    enderecos: [
        {
            logradouro: "Rua asfaltada",
            numero: 234,
            bairro: "Jardim florido",
        },
        {
            logradouro: "Rua asfaltada",
            numero: 234,
            bairro: "Jardim florido",
        },
        {
            logradouro: "Rua asfaltada",
            numero: 234,
            bairro: "Jardim florido",
        }
    ]
};

var rua1 = pessoa.enderecos[0].logradouro;
var rua2 = pessoa.enderecos[1].logradouro;

var contador = 1;
var limite = 3;
var confirmado = false;
console.log('### WHILE');
while (confirmado && limite > 0)
{
    console.log(limite);
    limite--;
}

limite = 3;
contador = 1;
console.log('### DO WHILE');
do
{
    console.log(contador);
    contador++;
}
while (contador <= limite);

console.log('### FOR');
for (var i = 1; i <= limite; i++)
{
    console.log(i);
}
