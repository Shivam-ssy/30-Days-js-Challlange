

function isEven(num){
    if(isNaN(Number(num)) || typeof(Number(num))==undefined){
        console.log('Please enter a Valid Number');
    }
    else{
        num%2===0?console.log(`${num} is Even`):console.log(`${num} is odd`);;
    }
}

function squateRoot(num){
    if(isNaN(Number(num)) || typeof(Number(num))==undefined){
        console.log('Please enter a Valid Number');
    }
    else{
        console.log(`Square root of ${num} is ${num**2}`);
    }
}

const maxInTwo= function(num1,num2){

    // this expression just check the num1 and num2 is Number or not and also it can not be undefined and NaN after the conversion to Number
    if((isNaN(Number(num1)) || isNaN(Number(num2) ) )|| (typeof(Number(num1))==undefined || typeof(Number(num2))==undefined)){
        console.log('Please enter a Valid Number');
    }
    else{
        if(num1>num2){
            console.log(`${num1} is greater than ${num2}`);
        }
        else{
            console.log(`${num2} is greater than ${num1}`);
        }
    }
}
const concateStr= function(str1,str2){
    const str=str1.concat(str2)
    return str
}

const sum=(num1,num2)=>{
    if((isNaN(Number(num1)) || isNaN(Number(num2) ) )|| (typeof(Number(num1))==undefined || typeof(Number(num2))==undefined)){
        console.log('Please enter a Valid Number');
    }
    else{
        return (num1+num2)
    }
}
const isFound=(str,keytosearch)=>{
    if(str.includes(keytosearch)){
        return true
    }
    else{
        return false

    }
}

function Product(num1, num2=5){
    return (num1*num2)
}

function greating(name,age=18){
    return `Hello ${name} welcome in age ${age}`
}

function takesFunciton(fn,number,...args){
            for (let i=0;i<number;i++){
            console.log(`Current value ${i}`);
            console.log(fn(...args))
       
    }
}

function functionContainer(fn1,fn2,args1,args2){
    let result=fn1(args1)
    let result2=fn2(args2,result)
    console.log(`the result of the functions ${result2}`)
}

const main=()=>{
    isEven(4)
    squateRoot(6)
    maxInTwo(8,6)
    console.log(concateStr("hello", "world"));
    console.log(isFound("hello", "l"));
    greating("Shivam",22)
    takesFunciton(greating,6,"Shivam")
    functionContainer(squateRoot,Product,8,10)
}
main()