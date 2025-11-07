// comentario ctrl e ;

//Javascript é uma linguagem fracamente tipada!

var texto = "Olá"; // aspas duplas sempre contêm uma string
let texto2 = 'Mundo'; //ponto e vírgula é opcional
const texto3 = "!"; // aspas simples também serve para string!

console.log(texto, texto2, texto3);
// vírgula concatena com espaço, enquanto o sinal de + deixa tudo junto


texto = "Hello";

let msg = `${texto} ${texto2} ${texto3}`;
//use a crase  junto de ${} para concatenar
// também 

console.log(msg);

// texto3 = "teste"
// O exemplo acima mostra que é impossível reatribuir um novo alor a uma contante


let numero = 4;
console.log(typeof numero);
// typeof diz o tipo da variável


let obj = { nome: "Letícia", idade: 19 };

console.log("Nome da pessoa:", obj.nome,
    " | idade da meliante:", obj.idade
);

console.log(typeof obj);
// objeto é sempre elemento chave/valor

let arr = ['Letícia', 'C.', 'D.', 'Oliveira'];
console.log(arr[0], arr[3]);
console.log(typeof arr);