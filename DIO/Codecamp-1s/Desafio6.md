# 🌱 Sobre o Desafio
A equipe jurídica que está acompanhando vocês sugeriu que aplicassem, através da justiça, multas para a Oil Corp caso eles não comecem a tratar todas as formas que estão poluindo a região. Além de realizar protocolos de reflorestamento e cuidados com a fauna e a flora do vale, respeitando a natureza.

As atividades que demandam tratamento e atenção são: Reflorestamento, Esgoto Tratado, Emissão de Carbono e Energia Sustentável. Para cada uma delas existem três critério: Não feito, Em progresso e Feito. O que não foi feito deve receber multa, o que está em progresso avaliação de progresso e o que está feito não multar.

Crie um código que analise cada uma dessas atividades e print no console o que deverá ser feito.

Nosso amigo e CleanCoder Felipão nos ajudou com um pedaço do código. Ele criou a Arrow Function findItem. O que ela faz é criar um filtro para encontrar as chaves no nosso objeto. Podemos notar que os parâmetros dela não estão exatamente ao lado como uma função normal: function exemplo(parametros), mas funciona exatamente do mesmo jeito.

A utilização dela é feita da mesma forma: findItem(objeto, index). Porém isso irá nos retornar a chave. Para termos o valor da chave precisamos fazer dessa forma: list[findItem(objeto, index)].

# 🌅 Entradas e Saídas 
As entradas serão: Uma lista de objetos a serem verificados e os valores das chaves de um objeto. A saída deverá ser "Multa", "Avaliação de progresso" ou "Não multar" dependendo do valor de cada uma das chaves a serem verificadas.

# 🌳 Exemplo 

| Entrada                       | Saída              |
|-------------------------------|--------------------|
| Reflorestamento, EsgotoTratado| Não multar         |
|                               | Avaliação de progresso |
| Feito                         |                    |
| Em progresso                  |                    |
| Não feito                     |                    |
| Não feito                     |                    |
|                               |                    |
| Reflorestamento, EsgotoTratado, EmissaoDeCarbono | Multa              | 
| Não feito                     | Não multar         |
| Feito                         | Avaliação de progresso |
| Em progresso                  |                    |
| Feito                         |                    |

         
