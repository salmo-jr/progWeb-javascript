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
