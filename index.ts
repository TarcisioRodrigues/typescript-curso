// 1-generics

function showData<T>(arg:T):string{
    return `O dado é:${arg}`
}

console.log(showData(5))
console.log(showData("Testando generecis")) 

//2-generics com extends
function showProductName<T extends {name:string}>(obj:T):string{
    return `Nome do produto é:${obj.name}`
}
const myObject={name:'Pernil',cor:'Branca'}
const outherObject={name:'Liga',cor:'Branca'}
const thirdObject={price:19,cor:'Branca'}

console.log(showProductName(myObject))
console.log(showProductName(outherObject)) 
console.log(showProductName(thirdObject)) 



//3-generics com interface

interface MyObject<T,U,Q>{
    name:string
    wheels:T
    engine:U
    color:Q
}

type Car=MyObject<number,number,string>
type Pen=MyObject<boolean,boolean,string>

const MyCar:Car={name:'Jaguar',wheels:4,engine:1.0,color:'branco'}
const myPen:Pen={name:"Cabnete bic",wheels:false,engine:false,color:'azul'}