// sum of first n number...................................

let n;
let i=1;
let sum = 0;
function sumFirstN(n) {
  for (i = 1; i <= n; i++) {
    sum = sum + i;
  }
}

sumFirstN(20);
console.log(sum);

// print table of n.....................................


function printTable(number){
   for(i=1;i<=10;i++){
    let result=i*number
    console.log(result)
   }
}
 printTable(6)
 
//  find sum of all digits of a number.................


let total = 0;

function sumDigits(number) {
  while (number > 0) {
    let rem = number % 10;
    total = total + rem;
    number = parseInt(number / 10);
  }
}
sumDigits(123);
console.log("sum of digits=", total);

// check for Armstrong number 153,1634,370,371,407........................


let power;

let num=153;
let temp = num;
power = num.toString().length;
function checkArmstrong(number){
    let sum = 0;
    while (number > 0) {
    let rem = number % 10;
    sum = sum + rem ** power;
    number = parseInt(number / 10);
    }

    if(temp===sum){
        console.log("number is armstrong")
    }
    else{
        console.log("number is not an armstrong")
    }
}

checkArmstrong(num)


// check for a ptime number 2,5,7,11,3............................

let numb=5;
let isPrime=true;

function checkPrime(number){
    if(number<=1){
        isPrime=false;
    }
    else
    {
        for(let i=2;i<number;i++){
                if(number%i===0){
                isPrime=false;
                }

        }
    }
    isPrime?console.log("Is it a prime number? Yes"):console.log("Is It a prime number? No")
}

checkPrime(numb);

// print all factors of given number..............................
let num2=12;
function printFactors(number){
    console.log(`all factors of ${number} is`)
    for(let i=1;i<=number;i++){
        if(number%i==0){
        console.log(i)
        }
    }
}

printFactors(num2)
