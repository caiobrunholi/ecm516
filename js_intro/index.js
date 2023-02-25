// // declarando constantes
// const nome = 'José';
// const idade = 27;
// // aspas simples e duplas tem o mesmo sentido
// const sexo= "M";
// const endereco = 'Rua K, 12';
// console.log(nome, idade, sexo, endereco)

// // declarando variaveis 
// // let: variavel local, escopo de bloco
// let a = 2;
// let b = 'abc';
// console.log(a,b);
// // js e python estao nem ai se vc mudar a tipagem da variavel
// b = 20;

// // var: variável global ou com escopo dentro da funcao onde foi criada
// var c = 2 + 3;
// var d = "abcd";
// console.log(c,d)


// console.log(x, a); // antes de declarar o x
// var x = 33;

// if (a > 1){
//     let x = 0; // se for let, nao vai existir fora desse escopo
//     a = 10; // apesar do a s=ter sido criado como let, como foi criado fora desse bloco, funciona dentro desse também
//     console.log(x, a); // dentro da chave
// }

// console.log(x, a); // fora da chave

// // dica de programador: dar preferencia para let, eh mais facil de controlar





// ------------------------------------------------------------------------------




// var linguagem = "Javascript";
// console.log("Aprendendo " + linguagem);
// //nome pode ser redeclarada
// var linguagem = "Java";
// console.log("Aprendendo, " + linguagem);

// //escopo não restrito a bloco
// var idade = 18;
// //exibe undefined. Ou seja, a variável já existe aqui, sónão teve valor atribuído.
// //Ela é içada - do inglês hoist - para fora do bloco if
// console.log(`Oi, ${nome}`);
// if (idade >= 18) {
//  var nome = "João";
//  console.log(`Parabéns, ${nome}. Você pode dirigir`);
//  }
// //ainda existe aqui
// console.log(`Até mais, ${nome}.`);



const n1 = 2;
const n2 = '3';
// coerção implicita de n1, acontece concatenação
const n3 = n1 + n2;
console.log(n3);
// coerção explicita, soma acontece
const n4 = n1 + Number(n2);
console.log(n4);


console.log( 1 == 1); // true
console.log( 1 == '1'); // true
console.log( 1 === 1); // true
console.log( 1 === '1'); // false

console.log (true == 1) //true
console.log (1 == [1])//true
console.log (null == null)//true
console.log (null == undefined)//true
console.log([] == false)//true
console.log ([] == [])//false