h1=document.querySelector("h1");

function changeColor(color,delay,nextColorChange){
    setTimeout(()=>{
        h1.style.color=color;
        if(nextColorChange) nextColorChange();
    },delay);
}

changeColor("red",1000,() =>{
    changeColor("purple",1000,() =>{
    changeColor("pink",1000,() =>{
   changeColor("blue",1000,() =>{
   changeColor("yello",1000,() =>{
   changeColor("green",1000);
}); 
}); 
});  
});
});


function savetoDb(data) {
    return new Promise((resolve,reject) =>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed >4){
            resolve("success: data was saved");
        } else{
            reject("failure: week connection ");
        }
    })
    
}

let request=savetoDb("kipm college");
request.then(()=>{
    console.console.log("promise was resolved");
    
})

.catch(()=>{
 console.console.log("promise was resolved");
    
});