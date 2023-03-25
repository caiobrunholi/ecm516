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




// ------------------------------------------------------------------------------
// Aula 3


// function f(){
//     let nome = 'João';
//     function g () {
//         console.log(nome);
//     }
//     g()
// }
// f()


// function ola() {
//     let nome = 'João';
//     return function () {
//         console.log('Olá, João');
//     }
// }

// let olaResult = ola();
// /*perceba que aqui a função ola já terminou.
// É de se esperar que a variável nome já não
// possa ser acessada.*/
// olaResult();

// function saudacoesFactory(saudacao, nome){
//     return function(){
//         console.log(saudacao + ', ' + nome)
//     }
// }

// let olaJoao = saudacoesFactory('Ola', 'João');
// let tchauJoao = saudacoesFactory('Tchau', 'João');
// olaJoao();
// tchauJoao();


// function eAgora() {
//     let cont = 1;
//     function f1() {
//         console.log(cont);
//     }
//     cont++;
//     function f2() {
//         console.log(cont);
//     }
//     //JSON contendo as duas funções
//     return { f1, f2 }
// }

// let eAgoraResult = eAgora();
// eAgoraResult.f1(); // O resultado será 2, pois o eAgora não executa a função f1, ela é apenas declarada, portanto o cont é criado e acrescentado, sem que f1 e f2 rodem.
// eAgoraResult.f2();


// let pessoa = {
//     nome: "João",
//     idade: 17,
// }
// //o acesso a propriedades pode ser feito com ponto
// console.log("Me chamo " + pessoa.nome);
// //e com [] também
// console.log("Tenho " + pessoa["idade"] + " anos");

// let pessoaComEndereco = {
//     nome: "Maria",
//     idade: 21,
//     endereco: {
//         logradouro: "Rua B",
//         numero: 121,
//     },
// };
// console.log(
//     `Sou ${pessoaComEndereco.nome},
//  tenho ${pessoaComEndereco.idade} anos
//  e moro na rua ${pessoaComEndereco.endereco["logradouro"]}
//  número ${pessoaComEndereco["endereco"]["numero"]}`
// );

// let concessionaria = {
//     cnpj: "00011122210001-45",
//     endereco: {
//         logradouro: "Rua A",
//         numero: 10,
//         bairro: "Vila J",
//     },
//     veiculos: [
//         {
//             marca: "Ford",
//             modelo: "Ecosport",
//             anoDeFabricacao: 2018,
//         },
//         {
//             marca: "Chevrolet",
//             modelo: "Onix",
//             anoDeFabricacao: 2020,
//         },
//         {
//             marca: "Volkswagen",
//             modelo: "Nivus",
//             anoDeFabricacao: 2020,
//         },
//     ],
// };

// for (let veiculo of concessionaria.veiculos) {
//     console.log(`Marca: ${veiculo.marca}`);
//     console.log(`Modelo: ${veiculo.modelo}`);
//     console.log(`Ano de Fabricação:
//     ${veiculo.anoDeFabricacao}`);
// }


// let calculadora = {
//     //pode ser arrow function
//     soma: (a, b) => a + b,
//     //e função comum também
//     subtracao: function (a, b) {
//         return a - b;
//     },
// };
// console.log(`2 + 3 = ${calculadora.soma(2, 3)}`);
// console.log(`2 - 3 = ${calculadora.subtracao(2, 3)}`);



// FUNÇÕES SINCRONAS E ASSINCRONAS
// function demorada() {
//     const atualMais2Segundos = new Date().getTime() + 2000
//     //não esqueça do ;, única instrução no corpo do while
//     while (new Date().getTime() <= atualMais2Segundos);
//     const d = 8 + 4
//     return d
// }
// const a = 2 + 3
// const b = 5 + 9
// const d = demorada()
// /*
// o valor de e não depende do valor devolvido
// pela função demorada.
// */
// const e = 2 + a + b
// console.log(e)

// function demorada() {
//     const atualMais2Segundos = new Date().getTime() + 2000
//     //não esqueça do ;, única instrução no corpo do while
//     while (new Date().getTime() <= atualMais2Segundos);
//     const d = 8 + 4
//     return d
// }
// const a = 2 + 3
// const b = 5 + 9
// //função será executada depois de, pelo menos, 500 milissegundos
// setTimeout(function () {
//     const d = demorada()
//     console.log(d)
// }, 500)

// //enquanto isso, essas linhas prosseguem executando
// //sem ficar esperando
// const e = 2 + a + b
// console.log(e)


// setTimeout(function(){
//     console.log('dentro da timeout', 0)
// })
// const a = new Date().getTime() + 1000
// while (new Date().getTime() <= a);
// console.log('fora da timeout')




// ------------------------------------------------------------------------------
// Aula 4
// function demorada(tempo) {
//     console.log(`demorada ${tempo}`);
//     const atualMaisTempo = new Date().getTime() + tempo;
//     //não esqueça do ;, única instrução no corpo do while
//     while (new Date().getTime() <= atualMaisTempo);
//     const d = 8 + 4;
//     return d;
// }
// setTimeout(function () { demorada(2000) }, 2000);
// setTimeout(function () { demorada(1000) }, 1000);
// console.log("chegou ao fim do script principal");


// const fs = require("fs");
// const abrirArquivo = function (nomeArquivo) {
//     const exibirConteudo = function (erro, conteudo) {
//         if (erro) {
//             console.log(`Deu erro: ${erro}`);
//         } else {
//             console.log(conteudo.toString());
//         }
//     };
//     fs.readFile(nomeArquivo, exibirConteudo);
// };
// //crie um arquivo chamado arquivo.txt com o conteúdo ''2'' (sem as aspas)
// //no mesmo diretório em que se encontra seu script
// abrirArquivo("arquivo.txt");


// const fs = require("fs");
// const abrirArquivo = function (nomeArquivo) {
//     const exibirConteudo = function (erro, conteudo) {
//         if (erro) {
//             console.log(`Deu erro: ${erro}`);
//         } else {
//             console.log(conteudo.toString());
//             const dobro = conteudo.toString() * 2;
//             const finalizar = function (erro) {
//                 if (erro) {
//                     console.log('Deu erro tentando salvar o dobro')
//                 }
//                 else {
//                     console.log("Salvou o dobro com sucesso");
//                 }
//             }
//             fs.writeFile('dobro.txt', dobro.toString(), finalizar);
//         }
//     };

//     fs.readFile(nomeArquivo, exibirConteudo);
// };
// abrirArquivo("arquivo.txt");


// function calculoDemorado(numero) {
//     return new Promise(function (resolve, reject) {
//         let res = 0
//         for (let i = 1; i <= numero; i++) {
//             res += i;
//         }
//         resolve(res)
//     })
// }
// calculoDemorado(10).then((resultado) => {
//     console.log(resultado)
// })


// function calculaRapidinho (numero){
//     return Promise.resolve((numero * (numero+1))/2)
// }
// calculaRapidinho(10).
//     then(resultado => {
//         console.log(resultado)
//     })
// console.log('Esperando...')

// function calculoRapidinho(numero) {
//     return numero >= 0
//         ? Promise.resolve((numero * (numero + 1)) / 2)
//         : Promise.reject("Somente valores positivos, por favor");
// }

// calculoRapidinho(10)
//     .then((resultado) => {
//         console.log(resultado);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// calculoRapidinho(-1)
//     .then((resultado) => {
//         console.log(resultado);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// console.log("esperando...");







// ------------------------------------------------------------------------------
// Aula 5
// API KEY OPENWEATHERMAP: 187e76d9b6c8bdafe9bf023428fed59e

const axios = require('axios')

const appid = '187e76d9b6c8bdafe9bf023428fed59e';
const q = 'Itu'
const units = 'metric'
const lang = 'pt_BR'
// quantidade de resultados
const cnt = '10'

const url = `https://api.openweathermap.org/data/2.5/forecast?q=${q}&units=${units}&appid=${appid}&lang=${lang}&cnt=${cnt}`;

axios
    .get(url)
    .then((res) => {
        console.log(res)
        return res.data
    })
    .then((res) => {
        // mostra o total e devolve o resultado
        console.log(res.cnt)
        return res
    })
    .then((res) =>{
        // devolve somente a lista de previsões
        console.log('aqui', res)
        return res['list'];
    })
    .then((res) =>{
        // para cada resultado mostra algumas informações
        for (let previsao of res){
            console.log(`
                ${new Date(previsao.dt * 1000).toLocaleString()},
                ${'Min: '+previsao.main.temp_min}\u00B0C,
                ${'Max: '+previsao.main.temp_max}\u00B0C,
                ${'Umi: '+previsao.main.humidity}%.
                ${previsao.weather[0].description}
            `)
        }
    })
    .catch((err) => {
        console.log(err)
    })