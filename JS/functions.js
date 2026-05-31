function rolldice(){
    let rand = Math.floor(Math.random()*6)+1;
    console.log(rand);
}
rolldice();
rolldice();
rolldice();
rolldice();
rolldice();
rolldice();
rolldice();
rolldice();
rolldice();
rolldice();
rolldice();
rolldice();
rolldice();
let str=["hi","hello","bye","takecare"];
function concat(str){
    let result="";
    for(let i=0; i<str.length; i++){
        result=result+str[i];
    
    }
    return result;
}
function multigreet(func,n){
    for (let i = 1; i <=count; i++) {
        func();
        
    }
}
let greet = function(){
    console.log("hello");
}
multigreet(greet,2);

const calculater ={
    add: function(a,b){
        return a+b;
    },
     sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
};

const student={
    name:"ritik",
    age:23,
    eng:45,
    math:93,
    phy:54,
    getAvg(){
        let avg=(this.eng+this.math+this.phy)/3;
        console.log(avg);
    }
}

console.log("heloo");
console.log("heloo");
try {
    console.log(a);
} catch {
     console.log("eror find a is not defined");
    
}
console.log("heloo");
console.log("heloo");

const sum = (a,b) => {
    console.log(a+b);
}


console.log("heloo i am here to read");
setTimeout(() => {
    console.log("heloo time out set ");
},4000);
console.log("please exit the window");

console.log("heloo i am here to read");
let id=setInterval(() => {
    console.log("heloo time out set ");
},4000);
console.log("please exit the window");
clearInterval(id);