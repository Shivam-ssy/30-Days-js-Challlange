// log the array and accessing the first and last elements
let array=[1,2,3,4,5]
let twoDArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [7, 8, 9,10]
];
function printUptoFive(){
    let arr=[1,2,3,4,5]
    console.log(`Here is the Array ${arr}`);
    console.log(`The first element is ${arr[0]} \n and the last elemnt is ${arr[arr.length-1]}`);
}
 

function pushToArray(arr,elementToPush){
    arr.push(elementToPush)
    console.log(arr);
    return arr
}
function popFromArray(arr){
    arr.pop()
    console.log(arr);
    return arr
}
function shiftArray(arr){
    arr.shift()
    console.log(arr);
    return arr
}
function unshiftArray(arr,elementToShift){
    arr.unshift(elementToShift)
    console.log(arr);
    return arr
}

function useMap(arr){
    let newArray=[]
    arr.map((elem)=>{
        newArray.push(elem*2)
    })
    console.log(newArray);
    return newArray
}

function useFilter(arr){
    let newArray=arr.filter(elem=>elem%2===0)
    console.log(newArray);
    return newArray

}
function useReduce(arr){
    let result=arr.reduce((accumulate,currentValue)=>{return accumulate+currentValue})
    console.log(`The sum of all the element of the array is ${result}`);
    return result;

}


function useForLoop(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
    console.log("\n");
}


function useForEachLoop(arr){
    arr.forEach(element => {
        console.log(element);
    });
    console.log("\n");
}

function twoDArray(){
    let Array = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    console.log(twoDArray);    
}

function printTwoDArray(Arr){
    let temp=""
    for(let i=0;i<Arr.length;i++){
        for(let j=0;j<Arr[i].length;j++){
            temp+=` ${Arr[i][j]}`
        }
        temp+="\n"
    }
    console.log(temp);
}
printTwoDArray(twoDArr)