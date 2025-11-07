let n1 = 2;
let n2 = 5;

//Pascal Case = NomeVariavel 
//(primeira letra da palavra é sempre maiuscula)

//Camel Case = nomeVariavel 
//(primeira letra da palavra é minuscula e o restante começa com maiuscula)

//Kebab Case = nome-variavel
//(tanto faz se começa com maiuscula ou minuscula, o importante é separar por hífen)

//Snake Case = nome_variavel
//(tanto faz se começa com maiuscula ou minuscula, o importante é separar por underline)


function Soma() {
    console.log(5 + 14);
}

Soma();
//função simples que não recebe parâmetros


function SomaComParametros(v1, v2) {
    let resultado = v1 + v2;
    return resultado;
}

console.log(SomaComParametros(n1, n2));