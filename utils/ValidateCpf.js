function Validate(cpf) {
    let cpfValido = 0;
    //Se os caracteres do cpf forem iguais incrementa
    for (let i = 0; i < cpf.length; i++) {
        if (cpf[i] === cpf[i + 1]) {
            cpfValido++;
        }
    }
    if (cpfValido === 10 || cpf.length > 11) {
        console.log("FORMATO DE CPF INVALIDO!");
        return false;
    } else {
        //Armazena o cpf no formato int
        const finalCpf = parseInt(cpf.join(''));
        let arrMult = [10, 9, 8, 7, 6, 5, 4, 3, 2];
        let digito;
        let soma = 0;

        //Retira os dois ultimos digitos
        cpf.pop();
        cpf.pop();

        //multiplica os valores de 10 a 2 pelos 9 primeiros digitos do cpf
        for (let i = 0; i < cpf.length; i++) {
            soma += arrMult[i] * cpf[i];
        }
        digito = (soma * 10) % 11;

        //Adiciona os calculos no final do array do cpf
        cpf.push(digito);

        //Adiciona o valor 11 no começo do array de multiplicações
        arrMult.unshift(11);
        soma = 0;

        //A partir daqui faz a mesma coisa que anteriormente
        for (let i = 0; i < cpf.length; i++) {
            soma += arrMult[i] * cpf[i];
        }
        digito = (soma * 10) % 11;

        cpf.push(digito);

        //Formata o array de cpf e salva na variavel como int
        const reformatCpf = parseInt(cpf.join(''));

        //Se o numero resultado de todas as operações anteriores
        //for igual ao cpf salvo no começo da função o cpf é valido
        if (reformatCpf === finalCpf) {
            console.log("CPF VALIDO!");
            return true;
        }
        console.log("CPF INVALIDO!");
        return false;
    }

}
//INVALIDO
primeiro = 40519751000;
//FORMATO INVALIDO - TODOS OS NUMEROS IGUAIS
segundo = 11111111111;
//VALIDO
terceiro = 52998224725;
//INVALIDO
quarto = 78945612348;
//FORMATO INVALIDO - MAIS DE 11 NUMEROS
quinto = 12345678910561231546;

myArr = primeiro.toString().split('').map(num => parseInt(num));
Validate(myArr);

myArr = segundo.toString().split('').map(num => parseInt(num));
Validate(myArr);

myArr = terceiro.toString().split('').map(num => parseInt(num));
Validate(myArr);

myArr = quarto.toString().split('').map(num => parseInt(num));
Validate(myArr);

myArr = quinto.toString().split('').map(num => parseInt(num));
Validate(myArr);
