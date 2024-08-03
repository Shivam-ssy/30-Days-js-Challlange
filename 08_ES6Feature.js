function stringLateral(){
    const person ="Shivam Singh Yadav"
    const age=20
    const string=` Name of the person is ${person} and his age is ${age}`
    console.log(string);
    // task 1 completed
    const multiLineStr=`This is a multiLine String \n and this uses literal template for \n multiline string`
    console.log(multiLineStr);
    // task 2 completed
    
}
// stringLateral()
function arrayDestructure(){
    let array =[10,20,30,40,50]
    let [first,second ]=array
    console.log(`First element of array is ${first}\n Second element is ${second}`);
    // task 3 completed 
    let book={
        title:"Eplore the negative side",
        author:"Shivam Singh Yadav",
        year:2021,
        page:200
    }
    const {title,author }=book
    console.log(`title of the book is ${title} and the author is ${author}`);
    // task 4 completed  object destructring
}
arrayDestructure()


function spreadOperator (){
    const oldArr=[1,2,3,4]
    const newArr=[5,8,9]
    const combinedArr=[...oldArr,...newArr]
    console.log("the new combined array is ",combinedArr)
}
//task 5 completed

function restOperator(...args){
    const total=args.reduce((acc,curr)=>acc+curr,0)
    return total
}

const result =restOperator(1,2,3)
console.log("Result by rest operator ",result);

// task 6 completed

function product(num1 , num2=1){
    return num1*num2
}


console.log(product(2));

// task 7 completed

function litrals (){
    const myAwesomeObject = {
        name: 'Shivam',
        age: 2,
        favoriteLanguage: 'JavaScript',
        greet() {
          console.log(`Hello, I'm ${this.name}! Nice to meet you.`);
        },
      };
      
      console.log(myAwesomeObject);
      // task 8 complete
      myAwesomeObject.greet();

      const firstName = 'John';
const lastName = 'Doe';

// Create an object with computed property names
const person = {
  [`${firstName} ${lastName}`]: {
    age: 30,
    occupation: 'Software Engineer',
  },
};

console.log(person);
// task 9 completed
}
litrals()
