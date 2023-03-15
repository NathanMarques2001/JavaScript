function validatCNPJ(cnpj){
    const finalCnpj = cnpj;
    const multiplyArray = [5,4,3,2,9,8,7,6,5,4,3,2];
    const secondArray = [6,5,4,3,2,9,8,7,6,5,4,3,2];
    let digitoVerificador = 0;
    //1 retirar os dois ultimos numeros
    //2 multiplicar pelo primeiro array
    //3 o resultado é dividido por 11
    //4 pegar o resto da divisao
    //5 Se o resto for menor que 2, o digito será 0,
    //caso contrario pegar o 11 e subtrair pelo resto
    //que resultara no digito
    //6 no segundo caso multiplicar o cnpj + novo digito pelo segundo array
    //7 dividir novamente por 11
    //8 se o resto desta divisao for menor que 2 considerar 0
    //Caso seja maior que 2 pegar o inteiro da divisao e subtrair por 11
    //9 o resultado da subtração por 11 sera o ultimo digito
}
