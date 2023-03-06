//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const arr = gets().split(', ')
let qualFiltro = 0;

//TODO: Print no console qual filtro deve ser utilizado de acordo com as moléculas na entrada

if(arr[0].length <= 5) {
  console.log("O filtro deve ser: Filtro Normal");
} else if(arr[0].length > 5 && arr[0].length <= 10) {
  console.log("O filtro deve ser: Filtro Específico");
} else {
  console.log("O filtro deve ser: Filtro Duplo Específico");
}
