function signCheck(num){
    if(Number(num)>0){
        console.log(`${num} is positive Number`);
    }
    else if(Number(num)==0){
        console.log(`${num} is zero`);
    }
    else if(isNaN(Number(num)) || typeof(Number(num))===undefined){
        console.log("Please enter a valid Number");
    }
    else{
        console.log(`${num} is a negative`);
    }
}

function isEligibleForVote(age){
    if(age>=18){
        console.log("You are eligible for vote");
    }
}

function greaterInThree(num1,num2,num3){
    if(num1>num2){
        if(num1>num3){
            console.log(`${num1} is greater than ${num2} and ${num3}`);
        }
       else{
            console.log(`${num3} is greater than ${num1} and ${num2}`);
        }
    }
    else{
        console.log(`${num2} is grater than ${num1} and ${num3}`);
    }
}

function weekName(day){
   
    if(isNaN(Number(day) || typeof(Number(day)===undefined))){
        console.log("Please enter a Valid day");

    }
    else{
        switch (day){
            case 1:
                console.log(`1 st day is Monday`);
                break
            case 2:
                console.log(`2 nd day is Tuesday`);
                break
            case 3:
                console.log(`3 rd day is Wednesday`);
                break
            case 4:
                console.log(`4 th day is Thursday`);
                break
            case 5:
                console.log(`5 th day is Friday`);
                break
            case 6:
                console.log(`6 st day is Satruday`);
                break
            case 7:
                console.log(`7 st day is Sunday`);
                break
            default:
                console.log("Please Enter a Valid day Number");
        }
    }
}

function assignGrade(score) {
    let grade;
  
    switch (true) {
      case score >= 80:
        grade = 'A';
        break;
      case score >= 70:
        grade = 'B';
        break;
      case score >= 60:
        grade = 'C';
        break;
      case score >= 50:
        grade = 'D';
        break;
      default:
        grade = 'F';
    }
  
    console.log(`Score: ${score}, Grade: ${grade}`);
  }


function isEvenByTernary(num){
    if(isNaN(Number(num)) || typeof(Number(num))==undefined){
        console.log('Please enter a Valid Number');
    }
    else{
        num%2===0?console.log(`${num} is Even`):console.log(`${num} is odd`);;
    }
}

function isLeap(year){
    if(isNaN(Number(year)) || typeof(Number(year))==undefined){
        console.log('Please enter a Valid Number');
    }
    else{
        if((year%4==0 && year%100!=0) || year%400==0){
            console.log(`${year} is a Leap Year`);
        }
        else{
            console.log(`${year} is not a Leap Year`);
        }
    }
}
isLeap(1904)