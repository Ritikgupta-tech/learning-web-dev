console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

for(let i=1; i<=5; i++){
    console.log(i);
}

for(let i=1; i<=15;i++){
    if (i%2!=0) {
        console.log(i +"is odd num");
        
    }
}
for (let i =15;i>=1;i=i-2){
    console.log(i);
}
for (let i =2;i<=10;i=i+2){
    console.log(i);
}
for (let i =5;i<=50;i=i+5){
    console.log(i);
}

let num=prompt("enter your no");
num =parseInt(num);
for (let i =num;i<=num*10;i=i+num){
    console.log(i);
}
for (let i =15;i>=1;i=i-2){
    console.log(`outer loop ${i}`);
    for(let j=1;j<=3;j++)
    console.log(j);
}