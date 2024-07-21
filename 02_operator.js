
// function to add the two number
function add(num1 , num2){
    let result = Number(num1)+Number(num2)
    if (isNaN(result) || typeof(result) === undefined){
        console.log(`Please enter a valid Number `);
        return
    }
    console.log(`\n Addition of the Number ${num1} and ${num2} is ${result}`)
}

// function to subtract two number
function sub(num1 , num2){
    let result = Number(num1)-Number(num2)
    if (isNaN(result) || typeof(result) === undefined){
        console.log(`\n Please enter a valid Number `);
        return
    }
    console.log(`\n Subtraction of the Number ${num1} and ${num2} is ${result}`)
}

// function to multiply two number 
function multiply(num1 , num2){
    let result = Number(num1)*Number(num2)
    if (isNaN(result) || typeof(result) === undefined){
        console.log(`Please enter a valid Number `);
        return
    }
    console.log(`\n Multiplication of the Number ${num1} and ${num2} is ${result}`)
}

// funciton to didvide two number and using && and ! operator in it 
function divide(num1 , num2){
    let result = Number(num1)/Number(num2)
    if (!(isNaN(result)) && ! (typeof(result) === undefined)){
        console.log(`\n Division of the Number ${num1} and ${num2} is ${result}`)
    }
    else{

        console.log(`Please enter a valid Number `);
        return
    }
}


// using += operator to add number to a varaible 
function addtionToVariable(num){
    let variable=8
    variable+=Number(num)
    if (isNaN(variable) || typeof(variable) === undefined){
        console.log(`Please enter a valid Number `);
        return
    }
   

    console.log(`\n Addition of the Variable with ${num} by += operator is ${variable}`);
   
}


// using -= operator to add number to a varaible 
function SubtractionToVariable(num){
    let variable=8
    variable-=Number(num)
    if (isNaN(variable) || typeof(variable) === undefined){
        console.log(`Please enter a valid Number `);
        return
    }
   

    console.log(`\n Subtraction of the Variable with ${num} by += operator is ${variable}`);
   
}
function isPositive(num){
    num>0?console.log(`${num} is positive`):console.log(`${num} is negative or not postive`);
}

// this function contain all the function call in one 
function main(){
        add(4,5)
        sub(8,9)
        multiply(9,10)
        divide(5,2)
        addtionToVariable(10)
        SubtractionToVariable(3)
        isPositive(9)
}
main()