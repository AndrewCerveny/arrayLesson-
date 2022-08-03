// Array Lesson Homework
//Declare a var Array that stores at least 4 strings
var roygbiv = ["red","orange","yellow","green","blue"," indigo","violet"];

//declare a var that stores an array of atleast 4 Numbers
var players = [1,2,3,4,5,];

//declare an array that stores at least 4 booleans

var employed = [true,false,false,true];

 // Call different methods on arrays
 console.log(roygbiv.push("black"));
 console.log(roygbiv);
 // .push() adds one more element "black" and to original arry (line14)
 //  .push() also retuns new length of array 8

 console.log(players.shift()); //should remove 1st element /0 index <1> and return 1
 console.log(players);// should have orignal arry minus the element <1>

console.log(employed.pop()); // should remove last element <true> and return <true>
console.log(employed);// reflect original arry with <3> elements instead of <4>  
