"use strict"
/* For Loops...
First loop.
Search for data in an array. 
You can begin at the first element and move to the next until you find the item you are looking for. This is called a sequential search, also called a linear search. Here we use a "brute-force" approach example, where we visit every element in the array on the way to a solution, in this example, we look how many times a number is contained in an array.

Let's get Looping!*/

//======================================================

let list = [1, 2, 2, 4, 2, 6, 9,2]; // Initialize the array
let Number = 2;     // init the number we are looking for
let counter = 0;   // init the counter. This stores how many times the number is in the array
for(let i=0; i<list.length; i++){   //create the loop. (i++ means:  i = i + 1)
    if(list[i] === Number){      //set the condition
        counter = counter + 1;   //if condition true. Add one to counter.
    } // after this iteration, the variable i gets updated (i++)

}
console.log("the number is contained " + counter + " times in the array.");

//======================================================

/* Second loop. 

Let's see another cool loop.
If we look at the multiples of 2 or 3 between 1 and 10,  ten included, we have:
2, 4, 3, 6, 8, 9, and 10.
So, let's create a for loop that finds the multiples of any two numbers within a range.*/

//======================================================

let limit = 21; // set the limit
let multiple1 = 7; // first multiple, could be any whole number
let multiple2 = 5; // second multiple, could be any whole number 
let listOfMultiples = []; //empty array to store the multiples the program finds.
 
 // Here comes our cool Loop.

 for(let i=1; i <= limit; i++){
     if(i % multiple1 === 0 || i % multiple2 === 0){ 
         listOfMultiples.push(i);
     }
 }

 console.log(listOfMultiples);

 /* ======================================================
 The % operator is called the modulo operator or remainder operator, it gives the remainder of the division of two numbers, for example:
 10 / 4 = 2 with remainder 2.
 So 10 % 4 == 2. 



Try changing the values of the variables and see the result. Play with the loops, destroy them, make them your own! 


=================================================*/


/* ======================================================

Third loop.

Find the minimum value in an array.

Very often in programming, we need to find the minimum or the maximum value in an array or a list, we could do this in the following form:

1: We can assign the first element of the array to a variable called min, 
min = array[0] ("min variable").

2: Then we begin looping through the array, starting by index 1, and comparing the current index value to the "min variable".

3: If the current element value, is less than that of the "min variable", assign the current element to the "min variable".

4: Move to the next element in the array and repeat steps 2 and 3.

5: Once the loop ends, we will have the minimum value in the array stored in the "min variable"...  ta-dah!

Let's code it!

======================================================= */

let numberList = [34, 30, 75, 27, 8, 58, 10, 1, 59, 25];
let min = numberList[0];
for(let i=1; i < numberList.length; i++){
    if(numberList[i] < min){
        min = numberList[i];
    }
}
console.log("the minimum value in the list is " + min);

/*======================================

Note: The key thing here, is that we began at index 1, which is the  second element of the array. 

Can you now find the maximum value? 

======================================*/


/*=====================================
	Fourth loop.
	   
	Just another simple loop.
 =====================================*/

let nums = [];
for(let i=0; i<10;++i){
       nums[i] = i+1; 
    }

console.log(nums)

/* ======================================
	Fifth loop.
	another simple one.
=========================================*/

let guests = ["Eli", "Alvaro", "Clara", "Camilo"];
for (let i=0; i < guests.length; i++){
    let invitation = `Hi ${guests[i]}, are you coming to the party this Saturday?`;
    console.log(invitation);
}
 
 //listo.

