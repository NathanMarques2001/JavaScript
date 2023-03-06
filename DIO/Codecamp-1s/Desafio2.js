//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let id = parseInt(gets());

//TODO: Print no console para qual Barraca o CleanCoder deve ir

if(id % 2 == 0) {
  console.log('Barraca da Direita');
} else {
  console.log('Barraca da Esquerda');
}
