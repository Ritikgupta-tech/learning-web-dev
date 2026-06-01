let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 =document.querySelector("h3");

function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor="blue";
}

btn.addEventListener("click",changeColor);
p.addEventListener("click",changeColor);
h1.addEventListener("click",changeColor);
h3.addEventListener("click",changeColor);

let ipn=document.querySelector("input");

ipn.addEventListener("keydown",function(event){
    console.log("key=",event.key);
    console.log("code=",event.code);
    if (event.code== "ArrowUp") {
        console.log("character move forword");
    } else if(event.code=="ArrowDown"){
        console.log("character move backword");
    }else if(event.code=="ArrowLeft"){
        console.log("character move left");
    }else if(event.code=="ArrowRight"){
        console.log("character move right");
    }
    if (event.code== "KeyU") {
        console.log("character move forword");
    } else if(event.code=="KeyD"){
        console.log("character move backword");
    }else if(event.code=="KeyL"){
        console.log("character move left");
    }else if(event.code=="KeyR"){
        console.log("character move right");
    }
    console.log("key was pressed");
});

let form=document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();

    let inp = document.querySelector("input");
    console.dir(inp);
    console.log(inp.value);
});


let div=document.querySelector("div");
let ul = document.querySelector("ul");
let li =document.querySelectorAll("li");

div.addEventListener("click",function(){
    console.log("div was clicked");
});

ul.addEventListener("click",function(){
    console.log("ul was clicked");
});

li.addEventListener("click",function(){
    console.log("li was clicked");
});

