// Question 1:
// Write a JavaScript for loop that iterates from 0 to 20 and prints only the even numbers, but skips the number 10.

// for(let i = 0;i<=20;i++){
//    if(i %2===0){
//      console.log("even");
//    }else if(i != 10){

//    }
//    else{
//     console.log("odd");
//    }
// }

// Question 2:

// Write a JavaScript while loop that calculates the factorial of a given number and also counts how many 
// iterations were needed.

//    let num = 5;

//    function factorial(){
//     let ans = 1;
//     if(num===0)
//         return 1;
//     for( let i =2;i<=num; i++)
//         ans = ans * 1
//        return ans;
    
//    }

//    console.log(factorial(num));


// Question 3:

// Create a JavaScript function that takes an array of numbers as input and returns the sum of 
// all the even numbers using a for loop.

array = [1,2,3,4,5];
  
  function SumAarray(array){
    let sum = 0;
    for(let i = 0;i<array.length;i++){

      if(i%2==0){
        sum += array[i];

      }
    }
    return sum;

  }
  console.log(SumAarray(array));



// Question 5:

// Create a JavaScript function that takes an array of strings as input and returns a new array
//  with only the strings that have a length greater than 7 characters.


//     array1 = ["JavaScript","html","css","reactjs","frontdevloper"]
//     array2 = []

//    function StrLength(){
//      for(let i = 0; i<array1.length;i++){
//            if(array1[i].length > 7 ){
//             // console.log(array1[i]);
//             array2 = array1[i]
           
//            }
//      }
//        return array2
//    } 

//    console.log(StrLength(array2));
       

// Question 7:

// Create a JavaScript program that calculates the sum of all numbers from 
// 1 to 1000 that are divisible by 3, 5, or 7.

// var sum = 0;
//  for(var i =0; i<1000; i++){
//     if(i%3 === 0 || i%5){
//     sum = i;
//     }

//     }
// console.log(sum);




