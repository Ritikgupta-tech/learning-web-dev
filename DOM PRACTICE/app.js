let smallImages=document.getElementsByClassName("oldImg");
for (let i = 0; i < smallImages.length; i++) {
    smallImages[i].src="assets/spiderman_img.png";
    console.log(`value of image no. ${i} is changed`);

    console.dir(document.querySelector("p"));
    console.dir(document.querySelector("#description"));
    console.dir(document.querySelectorAll("div a"));
}

let links=document.querySelectorAll(".box a");
for(link of links){
    link.style.color="green";
}

//for (let i = 0; i < links.length; i++) {
   // links[i].style.color="purple";
    
//}


let btn = document.querySelector("button");
console.dir(btn);
btn.onclick=function(){
    console.log("button was clicked");
}

let btns=document.querySelectorAll("button");
for (btn of btns){
    btn.onclick=sayhello;
    btn.addEventListener("click",kipm);
    btn.onmouseenter=function(){
        console.log("you are entred button ");
    }
    console.dir(btn);
}
function sayhello(){
    alert("hello");
}