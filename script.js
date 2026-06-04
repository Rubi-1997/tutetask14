// sum of first n number...................................

// let n=20;
// let i;
// let sum=0;

// for(i=1;i<=n;i++){
//   sum=sum+i;
//  console.log(sum)

// }

// print table of n.....................................

// let number=2;
// let table;
// let i=1;

// while(number>0 && i<=10){
// table=i*number;

// console.log(table)
// i++;
// }

//  find sum of all digits of a number.................

// let number=123;
// let total=0;

// while(number>0){

//     let rem=number%10;
//     total=total+rem;
//     number=parseInt(number/10)

// }
// console.log(total)

// check for Armstrong number 153,1634,370,371,407........................

// let number = 153;
// let power;
// let sum = 0;

// let temp = number;
// power = number.toString().length;

// while (number > 0) {
//   let rem = number % 10;
//   sum = sum + rem ** power;
//   number = parseInt(number / 10);
// }

// console.log(sum);

// check for a ptime number 2,5,7,11,3............................

// let number=5;
// let isPrime=true;

// if(number<=1){
//     isPrime=false;
// }
// else
// {
//     for(let i=2;i<number;i++){
//              if(number%i===0){
//                isPrime=false;
//              }
             
//     }
// }
// isPrime?console.log("Is it a prime number? Yes"):console.log("Is It a prime number? No")

// print all factors of given number..............................
let number=12;

 
console.log(`all factors of ${number} is`)
for(let i=1;i<=number;i++){
    if(number%i==0){
       console.log(i)
    }
}