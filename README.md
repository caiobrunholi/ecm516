# Aula 1 de JS

## Declarando constantes

``` javascript
const nome = 'José';
const idade = 27;
``` 

### Aspas simples e duplas tem o mesmo sentido

``` javascript
const sexo= "M";
const endereco = 'Rua K, 12';
``` 

<br>

## Declarando variaveis 
### let: variavel local, escopo de bloco

``` javascript
let a = 2;
```

<br />
<br />

### var: variável global ou com escopo dentro da funcao onde foi criada

```javascript
var c = 2 + 3;
``` 

``` javascript

if (a > 1){
    let x = 0; // se for let, nao vai existir fora desse escopo
    a = 10; // apesar do a s=ter sido criado como let, como foi criado fora desse bloco, funciona dentro desse também
}
``` 

<br />
<br />

> ### Dica de programador: dar preferencia para let, eh mais facil de controlar

<br />
<br />

## Exibição
### Como fazer o log de uma variável no terminal:

```javascript
 console.log(`Oi, ${nome}`);
```

<br />
<br />

## JSON

```javascript
{
    alunos: [{
        nome: 'João',
        idade: 27
    },
    {
        nome: 'Caio',
        idade: 21  
    }]
}
```

<br />
<br />

## Coerção
### Coerção implicita de n1, acontece concatenação  


```javascript
const n3 = n1 + n2;
```  

### Coerção explicita, soma acontece

```javascript
const n4 = n1 + Number(n2);
```

```javascript
console.log( 1 == 1); // true
console.log( 1 == '1'); // true
console.log( 1 === 1); // true
console.log( 1 === '1'); // false, compara tipo
```


<br />
<br />

# Aula 2 de JS
## Vetores (Array)
### Funciona parecido com o python
```javascript
v2 = [2, 'abc', true]; // Inicializando na criação
console.log(v2);

// Iterando
for (let i = 0; i < v2.length; i++){
    console.log(v2[i])
}
```

```
const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex",
"Cristina"];
const apenasComA = nomes.filter((n) => n.startsWith("A"));
```

> `=>` é uma arrow function, também conhecida como função lambda, vai retornar um true ou false 

<br />

### Métodos Utilitários
```javascript
// Filter
const apenasComA = nomes.filter((n) => n.startsWith("A"));
console.log(apenasComA);

// Map 
const res = nomes.map((nome) => nome.charAt(0));
console.log(res);

// Every
const todosComecamComA = nomes.every((n) => n.startsWith("A"));
console.log(todosComecamComA);

// Reduce
const valores = [1,2,3,4];
const soma = valores.reduce((ac, v) => ac + v); // pega uma posição, a próxima, passa para ac+v que as soma e substitui as posições por um único valor ac+v
console.log(soma);
```

<br />
<br />

##  Funções 
```javascript
function hello(){
    console.log('Hello World');
}
hello();

// CUIDADO aqui a funcao hello() sem parametros eh redefinida
function hello(nome){
    console.log('Oi '+nome);
}
hello('Pedro');
console.log(hello('Silva')); // Como a função hello não possui retorno, o retorno dela é undefined
```
> O JS usa a última função definida

<br />

### Funções Anônimas, são as que não possuem nome, a seguinte por exemplo não tem nome e foi atribuída a uma variável:
```
const dobro = function(n){
    return n*2
}
```

<br />

### Arrow Functions
> Se a função estiver entre `{}` ela PRECISA possuir um `return`
```javascript
const hello = () => console.log('Hello')
hello();

const dobro = valor => {return valor*2} // Se tiver {} PRECISA usar o return 
console.log(dobro(2))

```

> Quando passamos uma função como parâmetro de uma função `console.log(triplo(10))`, na realidade estamos passando o resultado dessa função entre parênteses como parâmetro


<br />
<br />

## Closures

### Higher Order Functions usam outras functions para funcionar

``` javascript
// f recebe uma função como parametro e por isso é uma função de alta ordem.
// Por devolver uma função, g também é de alta ordem

function f (funcao){
    // Chamada da função
    // Note como a tipagem dinâmica tm seu preço
    funcao();
}

function g() {
    function outraFuncao() {
        console.log('Fui criada em g')
    }
    return outraFuncao;
}

// f pode ser chamada assim:
f(function(){
    console.log('Estou sendo passada para f')
})

// E g pode ser chamada assim:
const gResult = g()
gResult()

// E assim também
g()() // O primeiro () executa uma função e o segundo () executa o retorno de g, que é outra função
```

<br />
<br />

# Aula 3
## Funções Aninhadas
``` js
function saudacoesFactory(saudacao, nome){
    return function(){
        console.log(saudacao + ', ' + nome)
    }
}

let olaJoao = saudacoesFactory('Ola', 'João');
let tchauJoao = saudacoesFactory('Tchau', 'João');
olaJoao();
tchauJoao();
```
> Ao executar a variável olaJoao, ele executa a função resultado de saudacoesFactory

<br />
<br />

## Closure
```js
function eAgora() {
    let cont = 1;
    function f1() {
        console.log(cont);
    }
    cont++;
    function f2() {
        console.log(cont);
    }
    //JSON contendo as duas funções
    return { f1, f2 }
}

let eAgoraResult = eAgora();
eAgoraResult.f1(); // O resultado será 2, pois o eAgora não executa a função f1, ela é apenas declarada, portanto o cont é criado e acrescentado, sem que f1 e f2 rodem.
eAgoraResult.f2();
```

<br />
<br />

## JSON
```js 
let concessionaria = {
    cnpj: "00011122210001-45",
    endereco: {
        logradouro: "Rua A",
        numero: 10,
        bairro: "Vila J",
    },
    veiculos: [
        {
            marca: "Ford",
            modelo: "Ecosport",
            anoDeFabricacao: 2018,
        },
        {
            marca: "Chevrolet",
            modelo: "Onix",
            anoDeFabricacao: 2020,
        },
        {
            marca: "Volkswagen",
            modelo: "Nivus",
            anoDeFabricacao: 2020,
        },
    ],
};
for (let veiculo of concessionaria.veiculos) {
    console.log(`Marca: ${veiculo.marca}`);
    console.log(`Modelo: ${veiculo.modelo}`);
    console.log(`Ano de Fabricação:
    ${veiculo.anoDeFabricacao}`);
}
```

<br />
<br />

## Funções Síncronas e Assíncronas
### Sincronas: Chama a funções e esperam a reposta
### Assíncronas: Chama a função, que faz uma "promisse" que haverá uma resposta, e o programa verifica de tempos em tempos se há uma resposta 

```js
setTimeout(function(){
    console.log('dentro da timeout', 0)
})
const a = new Date().getTime() + 1000
while (new Date().getTime() <= a);
console.log('fora da timeout')
```
que resulta em:
```
fora da timeout
dentro da timeout 0
```


<br />
<br />

# Aula 4

## Continuação Funções Síncronas e Assíncronas
`require()` é o mesmo que `import` ou `include`
```js
const fs = require("fs")
```

<br />
<br />

## Callbacks e Promises 
```js
function calculoDemorado(numero) {
    return new Promise(function (resolve, reject) {
        let res = 0
        for (let i = 1; i <= numero; i++) {
            res += i;
        }
        resolve(res)
    })
}
calculoDemorado(10).then((resultado) => {
    console.log(resultado)
})
```

```js
function calculaRapidinho (numero){
    return Promise.resolve((numero * (numero+1))/2)
}
calculaRapidinho(10).
    then(resultado => {
        console.log(resultado)
    })
console.log('Esperando...')
```
> Mesmo sendo rápido ele executa o log antes
```
Esperando...
55
```

