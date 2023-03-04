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