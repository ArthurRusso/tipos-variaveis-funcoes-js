// parâmetros de função

               //2   //2
function soma (num1, num2){
    return num1 + num2;
}

// console.log(soma(2,2));
// console.log(soma(10,23));
// console.log(soma(223,-412));

// paramêtros x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`
}

// console.log(nomeIdade(18, "Arthur"))

function multiplica(num1 = 1, num2 = 1){
    return num1 * num2;
}

                            //9         
console.log(multiplica(soma(4, 5)))
