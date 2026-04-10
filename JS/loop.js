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

let i=1;
while (i<5) {
    if (i==3) {
        break;
    }
    console.log(i);
    i++;
}
/*let favmov="moneyheist";
let guess=prompt("enter movie");
while (favmov!=guess ) {
    if (guess=="quit") {
        console.log("you quit");
        break;
    }
    guess=prompt("wrong ans . pls try again");
}
if (favmov == guess) {
    console.log("you guess write movie");   
}*/

let fruits=["mango","apple","bannana","litchi","orange"];
fruits.push("pineapple");
for (let i = 0; i < fruits.length; i++) {
    console.log(i,fruits[i]);   
}
for (fruit of fruits){
    console.log("no of fruits",fruit);
}

let heroes=[["ironman","spiderman","thor"],["superman","wonder woman","flash"]];
 for (let i = 0; i < heroes.length; i++) {
    console.log(i,heroes[i],heroes[i].length);
    for (let j = 0; j < heroes[i].length; j++) {
        console.log(heroes[i][j]);
        
    }
    
 }
 for(list of heroes){
    for(hero of list){
        console.log("new list of ",hero);
    }
 }