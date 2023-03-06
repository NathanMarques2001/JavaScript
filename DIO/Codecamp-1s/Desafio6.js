//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let arr = gets().split(', ')

const list = {
    Reflorestamento: gets(),
    EsgotoTratado: gets(),
    EmissaoDeCarbono: gets(),
    EnergiaSustentavel: gets(),
}

//TODO: Print no console "Multa", "Avaliação de progresso" ou "Não multar" dependendo do valor 
//de cada uma das chaves a serem verificadas da lista arr
for (let i = 0; i < arr.length; i++) {
  if (list[arr[i]] === 'Não feito') {
    console.log('Multa');
  } else if (list[arr[i]] === 'Em progresso') {
    console.log('Avaliação de progresso');
  } else {
    console.log('Não multar');
  }
}
