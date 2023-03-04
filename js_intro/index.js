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



// const n1 = 2;
// const n2 = '3';
// // coerção implicita de n1, acontece concatenação
// const n3 = n1 + n2;
// console.log(n3);
// // coerção explicita, soma acontece
// const n4 = n1 + Number(n2);
// console.log(n4);


// console.log( 1 == 1); // true
// console.log( 1 == '1'); // true
// console.log( 1 === 1); // true
// console.log( 1 === '1'); // false

// console.log (true == 1); //true
// console.log (1 == [1]); //true
// console.log (null == null); //true
// console.log (null == undefined); //true
// console.log([] == false); //true
// console.log ([] == []); //false


// ------------------------------------------------------------------------------
// Aula 2
// // Vetor
// v1 = [];
// v1[0] = 3.4
// v1[10] = 'abc';
// console.log(v1.length);
// console.log(v1);

// v2 = [2, 'abc', true]; // Inicializando na criação
// console.log(v2);

// // Iterando
// for (let i = 0; i < v2.length; i++){
//     console.log(v2[i])
// }

// // Métodos utilitário dos vetores
// const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex",
// "Cristina"];
// // Filter
// const apenasComA = nomes.filter((n) => n.startsWith("A"));
// console.log(apenasComA);

// // Map 
// const res = nomes.map((nome) => nome.charAt(0));
// console.log(res);

// // Every
// const todosComecamComA = nomes.every((n) => n.startsWith("A"));
// console.log(todosComecamComA);

// // Reduce
// const valores = [1,2,3,4];
// const soma = valores.reduce((ac, v) => ac + v); // pega uma posição, a próxima, passa para ac+v que as soma e substitui as posições por um único valor ac+v
// console.log(soma);

// // Funcoes
// function hello(){
//     console.log('Hello World');
// }
// hello();

// // CUIDADO aqui a funcao hello() sem parametros eh redefinida
// function hello(nome){
//     console.log('Oi '+nome);
// }
// hello('Pedro');
// console.log(hello('Silva')); // Como a função hello não possui retorno, o retorno dela é undefined

// function soma(a, b){
//     return a + b;
// }
// const res = soma(2,3);
// console.log(res);
// console.log(soma(2,2));


// // Funcoes Anonimas
// const dobro = function(n){
//     return n*2
// }

// const triplo = function (n = 5) {
//     return 3 * n;
//     };
// console.log(triplo());
// console.log(triplo(10));


// // Arrow functions
// const hello = () => console.log('Hello')
// hello();

// const dobro = valor => {return valor*2} // Se tiver {} PRECISA usar o return 
// console.log(dobro(2));

// const triplo = valor =>{
//     return valor*3
// }
// console.log(triplo(10));

// const ehPar = n =>{
//     return n % 2 === 0
// }
// console.log(ehPar(10));

// // Closures
// // Uma função pode ser atribuída a uma variável
// let umaFuncao = function () {
//     console.log('Fui armazenda em uma variável');
// }
// umaFuncao();

// // f recebe uma função como parametro e por isso é uma função de alta ordem.
// // Por devolver uma função, g também é de alta ordem

// function f (funcao){
//     // Chamada da função
//     // Note como a tipagem dinâmica tem seu preço
//     funcao();
// }

// function g() {
//     function outraFuncao() {
//         console.log('Fui criada em g')
//     }
//     return outraFuncao;
// }

// // f pode ser chamada assim:
// f(function(){
//     console.log('Estou sendo passada para f')
// })

// // E g pode ser chamada assim:
// const gResult = g()
// gResult()
// // E assim também
// g()() // O primeiro () executa uma função e o segundo () executa o retorno de g, que é outra função


// //outros testes
// // f chama g, que somente devolve uma função. Nada é exibido
// f(g)
// // f chama a função devolvida por g. "Fui criada por g" é exibido
// f(g())
// // f tenta chamar o que a função criada por g devolve. Ela não devolve coisa alguma. Por isso, um erro - somente em tempo de execução - acontece. 
// f(g()())
// // O que acontece?
// f(1)