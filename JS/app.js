console.log("hello world");
console.log("kipm college of engineering and technology");
let a=5;
let b=10;
console.log(a+b);
console.log(a-b);
let pencilPrice=10;
let penlPrice=20;
let output1="the price total is " + (pencilPrice +penlPrice) + " rupees";
let output=`the total price is ${ pencilPrice+penlPrice}`;
console.log(output);
console.log(output1);
if(a!=b){
   console.log("equal");
}

//practice question 
let color="red";
if (color==="red") {
    console.log("stop");
}
else if (color==="yellow") {
    console.log("slow down");
}
else if(color==="green") {
    console.log("g0");
}
else {
    console.log("traffic light did not activate")
}
// PRACTICE QUESTION
let size="XL";
if (size==="XL") {
    console.log("PRICE IS RS.250");
}
else if (size==="L") {
    console.log("PRICE IS RS.200");
}
else if(size==="M") {
    console.log("PRICE IS RS.100");
}
else {
    console.log("PRICE IS RS.50")
}

let str="good string";
if (str[0]==='a' && str.length > 3) {
    console.log("good ");
} else {
    console.log("bad");
}

let colour="red";
switch (colour) {
    case "red":
        console.log("stoping");
        break;
     case "yellow":
        console.log("slow down");
        break;
     case "green":
        console.log("go");
        break;
    default:
        console.log("broken traffic light");
}
let day=7;
switch (day) {
    case 1:
        console.log("sunday");
        break;
     case 2:
        console.log("monday");
        break;
     case 3:
        console.log("tuesday");
        break;
         case 4:
        console.log("wednessday");
        break;
         case 5:
        console.log("thursday");
        break;
         case 6:
        console.log("friday");
        break;
         case 7:
        console.log("saturday");
        break;
    default:
        console.log("error");
}

alert("something try to diffrent");
console.log("this is something good");
console.error("this is an error msg");

