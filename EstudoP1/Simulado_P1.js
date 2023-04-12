// ex1
// const f = () =>{
//     console.log('f')
// }

// setTimeout(function(){
//     f()
// })
// console.log('p')




// ex2
// var a=2
// var b=2
// let c=a+b
// console.log(c)
// b=3
// console.log(c)


// ex3
// var nome 
// if (nome == undefined){
//     var nome = "Cristina"
// }
// console.log(nome)


// ex4
// const v = [100]
// console.log(v.length)
// v[2] = 5
// console.log(v.length)
// v = [5]
// console.log(v.length)


// ex5
// let valores = [1,2,3,4,5]
// valores = valores.filter( v => v >= 3)
// console.log(valores.length)
// const res = valores.reduce((ac, v) =>{
//     return ac+v
// })
// console.log(res)


// ex6
// const f1 = () =>{
//     console.log('f1')
// } 
// const f2 = (f) => {
//     console.log('f2')
//     f()
//     return f
// }
// f2(f1)()


// ex7
// () => console.log('a')
// function f() {console.log('a')}
// f()


// ex8
// const nome = "Pedro"
// const idade = 22
// const pessoa = {nome, idade}
// console.log(pessoa.nome)
// console.log(pessoa['idade'])


// ex9
// async function f1 (){
//     return 1
// }
// function f2(){
//     return Promise.resolve(1)
// }
// function f3(){
//     return Promise.reject(1)
// }
// async function teste(){
//     try{
//         const r1 = await f1()
//         console.log(r1)
//         const r2 = await f2()
//         console.log(r2)
//         const r3 = await f3()
//         console.log(r3)
//     }
//     catch(e){
//         console.log('e')
//     }
// }
// teste()


// ex10
console.log(2 === '2')
console.log(2 == '2')