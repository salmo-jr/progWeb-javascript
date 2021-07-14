/*
function nome(){ }

// ARROW FUNCTION
const nome = () => { }
*/

const pa = ({
    valorInicial,
    razao,
    quantidade}) => {
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
}

pa({
    valorInicial: 13,
    razao: 5,
    quantidade: 5
});
