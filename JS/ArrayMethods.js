let arr=[1,2,3,4,5,6];
let print=function(el){
    console.log(el);
};
arr.forEach(print);

let num=[1,2,3,4,5,6];
let double=num.map((el)=>{
    return el*2;
});

let nums=[1,2,3,4,5,6];
let even=nums.filter((el) => {
    return el%2 == 0 ;
});

[1,2,3,4].reduce((res,el)=>(res+el));

function sum(a,b=3){
    return a+b;
}
sum(2);//5 

let arr =[1,2,3,4,5];
let newArr=[...arr];
console.log (newArr);

const data ={
    email:"ritik95061",
    pass:273010,

};
console.log(...data,id=7777);

let names =["ritik","ankiti","mahak","manjeet","shivam"];
let [winner,runnerup,...others]=names;