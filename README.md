# Aula 1 de JS

## Declarando constantes

``` 
const nome = 'José';
const idade = 27;
``` 

### Aspas simples e duplas tem o mesmo sentido

``` 
const sexo= "M";
const endereco = 'Rua K, 12';
``` 

<br>

## Declarando variaveis 
### let: variavel local, escopo de bloco

``` 
let a = 2;
```

<br />
<br />

### var: variável global ou com escopo dentro da funcao onde foi criada

```
var c = 2 + 3;
``` 

``` 

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

```
 console.log(`Oi, ${nome}`);
```

<br />
<br />

## JSON

```
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


```
const n3 = n1 + n2;
```  

### Coerção explicita, soma acontece

```
const n4 = n1 + Number(n2);
```

```
console.log( 1 == 1); // true
console.log( 1 == '1'); // true
console.log( 1 === 1); // true
console.log( 1 === '1'); // false, compara tipo
```