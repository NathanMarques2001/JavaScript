//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let amostra = gets().split(',')

//TODO: Print no console, para cada índice da lista, os parâmetros
//se a amostra está bom, aceitável ou inaceitável
amostra.forEach(function(item) {
    if(item >= 75) {
    console.log("Descartar da lista");
  }   else {
    if(item >= 50 && item < 75) {
      console.log("Manter sob observação");
    }   else {
      console.log("Isolar e iniciar protocolo de cuidados");
    }
  }
});
