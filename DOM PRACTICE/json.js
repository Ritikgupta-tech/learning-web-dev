/*let jsonRes='{"message":"Welcome to the Potter DB: API! Check out the docs for more information: https://docs.potterdb.com"}'
let validRep=JSON.parse(jsonRes);
console.log(validRep);


let url ="https://catfact.ninja/fact";
fetch(url)
.then((res) =>{
    return res.json();
})
.then((data)=>{
    console.log("data1=",data.fact);
    return fetch(url);
})
.then((res) =>{
    return res.json();
})
.then((data2)=>{
    console.log("data2=",data2.fact);
    
})
.catch((err)=>{
    console.log("ERROR -", ERR);
});

console.log("I AM HAPPY ");


let url ="https://catfact.ninja/fact";
async function getFacts() {
    let res=await fetch(url);
    let data = await res.json();
    console.log(data);
}*/

let btn = document.querySelector("button");
btn.addEventListener("click", async ()=>{
    let fact= await getFacts();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
})

let url ="https://catfact.ninja/fact";

async function getFacts() {
    try{
        let res = await axios.get(url);
        console.log(res);
        return res.data.fact;
    }catch(e){
        console.log("error -" , e);
        return "no fact found";
    }
}


