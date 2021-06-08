function primeNum(num){

let i = 0;
let a = [];

if (num != 1 || num % 1 !=0) {                  //Only run loop when number is not 1 or whole
  while ((i <= num) && (a.length <=2))
    if (((num / (i += 1)) % 1) == 0){
    a.push(i);
  }
}
  // console.log(a)
if (num == 1){
  console.log("Please enter a number greater than 1");
}
else if (num % 1 !=0){
  console.log("Please enter whole numbers only")
}
else if (a.length == 2){
  console.log("This number is prime");
}
else{
  console.log("This is not a prime number, it is divisible by " + a[1]);
}
}

console.log(primeNum(13));



