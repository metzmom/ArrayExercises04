let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//a) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.

holdCabinetAll =[];
holdCabinetAll=holdCabinet1.concat(holdCabinet2);
console.log("holdCabinetAll:");
console.log(holdCabinetAll);
console.log("holdCabinet1:");
console.log(holdCabinet1);

//console.log(holdCabinet1);
//concat does not alter the original array

//b) Print a slice of two elements from each array. Does slice alter the original arrays?
console.log("holdCabinet1 slice 1,3:");
console.log(holdCabinet1.slice(1,3));
console.log("holdCabinet1 after slice:");
console.log(holdCabinet1);
console.log("holdCabinet2 slice 1,3:");
console.log(holdCabinet2.slice(1,3));
console.log("holdCabinet2 after slice:");
console.log(holdCabinet2);
//console.log(holdCabinet1);




//c) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?
console.log("holdCabinet1:");
console.log(holdCabinet1);
holdCabinet1.reverse();
console.log("holdCabinet1 reverse:");
console.log(holdCabinet1);
//holdCabinet1.reverse();
//console.log(holdCabinet1);
//yes origonal is now reversed.  need to reverse again to get to origonal.

console.log("holdCabinet2:");
console.log(holdCabinet2);
holdCabinet2.sort();
console.log("holdCabinet2 sorted:");
console.log(holdCabinet2);
//let holdCabinet2Sort =holdCabinet2;
//holdCabinet2Sort =holdCabinet2.sort();
//   console.log('\n');
//   console.log(holdCabinet2.sort);
//console.log(holdCabinet2Sort);

