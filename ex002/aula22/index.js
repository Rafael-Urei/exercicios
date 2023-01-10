/*
Operadores Lógicos
&& -> AND -> E (Todas as expressões precisam ser verdadeiras para retornar TRUE)
|| -> OR -> OU
! -> NOT -> NÃO
*/
//const expressaoAnd = true && true && true;
//const expressaoOr = true || false;
//const usuario = 'Luiz';
//const senha = '123456';

/*
FALSY
*false
0
'' "" ``
null / undefined
NaN

*/

//const vailogar = usuario === 'Luiz' && senha === '123456';

const corUsuario = 34
const corPadrao = corUsuario || 'preto';
console.log(corPadrao)