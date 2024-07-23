function countUpToTen(){
    for(let i=1;i<=10;i++){
        console.log(`\n${i}`)
    }
}
 function tableOfFive(){
    for(let i=1;i<=10;i++){
        console.log(`5 * ${i} is ${5*i}`);
    }
 }

function sumUpToTen(){
    let i=1
    let result=0;
    while(i<=10){
        result=result+i
        i++
    }
    console.log(`Sum Up To Ten is ${result}`);
}

function reverseCountFromTen(){
    let i=10
    while(i>=1){

        console.log(i)
        i--;
    }

}

function countUpToFive(){
    let i=1
    do{
        console.log(i);
        i++
    }while(i<=5)
}

function factorail(num){
    let result=1
    console.log(`factorial of ${num} is`);
    do{
        if(num>0){
            result=result*num
            num--
        }
    }while(num>0)
    console.log(`${result}`);
}


function patternPrint(){
    let pattern=""
    for(let i=0;i<5;i++){
        for(let j=0;j<5;j++){
            if(j<=i)
                pattern+="*"
            pattern+=" "
        }
        pattern+="\n"
    }
    console.log(pattern);
}

function countUpToTenSkippedFive(){
    for (let index = 1; index <=10; index++) {
       if(index==5)
        continue
       console.log(index);
        
    }
}
function countUpToTenStopedSeven(){
    for (let index = 1; index <=10; index++) {
       if(index==7)
        break
       console.log(index);
        
    }
}

;(()=>{
    console.log('Counting Up to ten\n');
    countUpToTen()
    console.log('Multiplication of Five\n');
    tableOfFive()
    console.log('Sum of numbers up to 10\n');
    sumUpToTen()
    console.log('Reverse of the numbers from ten\n');
    reverseCountFromTen()
    console.log('Counting Up to Five\n');
    countUpToFive()
    console.log('Factorail of five\n');
    factorail(5)
    console.log('Pattern print\n');
    patternPrint()
    console.log('Counting Up to ten skipped five\n');
    countUpToTenSkippedFive()
    console.log('Counting Up to ten stopped at seven\n');
    countUpToTenStopedSeven()
})()