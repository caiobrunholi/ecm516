// import Singleton from "./Singleton";

// for (let i = 0; i < 10; i++){
//     //ainda que estejamos num loop, a instância obtida é sempre a mesma
//     let singleton: Singleton = Singleton.getInstance();
//     // singleton.executar();
//     console.log(singleton.incrementar())
//     }

import CacheService from './CacheService';
const cache = CacheService.getInstance();
cache.set('João', '123456');
console.log(cache.get('João'));

const cache2 =  CacheService.getInstance();
console.log(cache2.get('João'))