let lista1 = gets().split(', ');
let lista2 = gets().split(', ');
let lista3 = gets().split(', ')

let arr = [lista1, lista2, lista3];

const moleculaPrejudicial = ['NO2', 'SO2', 'CO', 'FHO'];
let qualMolecula;
let qualFiltro = false;

// Verifica se alguma molécula prejudicial está presente nas listas
for(let i = 0; i < arr.length; i++){
  if(arr[i].some(item => moleculaPrejudicial.includes(item))) {
    qualMolecula = arr[i].find(item => moleculaPrejudicial.includes(item));
    qualFiltro = true;
  }
}

// Verifica qual filtro deve ser utilizado de acordo com as moléculas prejudiciais encontradas
if(qualFiltro) {
  console.log(`Filtro Específico para a Molécula ${qualMolecula}`);
} else {
  console.log("Filtro Simples");
}
