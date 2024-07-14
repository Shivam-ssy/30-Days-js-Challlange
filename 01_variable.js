var num=3
let str="something to code"
const rdm=80
const check=false

let anotherNum=[1,2,3,4,5]
let array = new Array(1, 2, 3, 4);

let holder={
    "name":"Shivam Singh  Yadav",
    "stage":"Learning Js",
}
try {
    check=true
} catch (error) {
    console.log("Error while assigning the const:  "+error.message);
}
    console.log(`Variable num = ${num} and its type ${typeof(num)}`);
    console.log(`Variable str = ${str} and its type ${typeof(str)}`);
    console.log(`Variable rdm = ${rdm} and its type ${typeof(rdm)}`);
    console.log(`Variable check = ${check} and its type ${typeof(check)}`);
    console.log(`Variable anotherNum = ${anotherNum} and its type ${typeof(anotherNum)}`);
    console.log(`Variable holder = ${holder} and its type ${typeof(holder)}`);
    console.log(`Variable array = ${array} and its type ${typeof(array)}`);