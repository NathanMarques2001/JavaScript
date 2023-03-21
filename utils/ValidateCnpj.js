function validatCNPJ(cnpj) {
    const multiplyArray = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let resto = 0;

    if (cnpj.length == 14) {
        const finalCnpj = parseInt(cnpj.join(''));
        let digito;
        let soma = 0;

        cnpj.pop();
        cnpj.pop();

        for (let i = 0; i < cnpj.length; i++) {
            soma += multiplyArray[i] * cnpj[i];
        }
        resto = soma % 11;

        if (resto >= 2) {
            digito = 11 - resto;
        } else {
            digito = 0;
        }

        cnpj.push(digito);

        multiplyArray.unshift(6);
        soma = 0;

        for (let i = 0; i < cnpj.length; i++) {
            soma += multiplyArray[i] * cnpj[i];
        }
        resto = soma % 11;

        if (resto >= 2) {
            digito = 11 - resto;
        } else {
            digito = 0;
        }

        cnpj.push(digito);

        const reformatCnpj = parseInt(cnpj.join(''));

        if (reformatCnpj == finalCnpj) {
            console.log("CPF VALIDO!");
            return true;
        } else {
            console.log("CPF INVALIDO!");
        }
    }
}

primeiro = '11111111000111';

myArr = primeiro.toString().split('').map(num => parseInt(num));
validatCNPJ(myArr);
