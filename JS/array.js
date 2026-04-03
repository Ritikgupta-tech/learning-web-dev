let students=["RITIK","ANKIT","MANJEET","SHIVAM",7777];
console.log(students);
console.log(students[1]);
console.log(students.length);
console.log(typeof students);
console.log(students[1][1]);
students[0]="vinay";
console.log(students);
students.push('0111');
console.log(students);
students.pop();
console.log(students);
students.unshift("nitish");
console.log(students);
students.shift();
console.log(students);

let month=['jan','july','march','aug'];
month.shift();
month.shift();
month.unshift("june");
month.unshift("july");
console.log(month);
console.log(month.indexOf("march"));
console.log(month.includes("aug"));

console.log(month.concat(students));
console.log(month.reverse());

let colors=["red","yellow","blue","orange","pink","white"];
console.log(colors.slice());
console.log(colors.slice(2));
console.log(colors.slice(2,3));
console.log(colors.slice(-2));

console.log(colors.splice(4));
console.log(colors);
console.log(colors.splice(0,1));
console.log(colors);
console.log(colors.splice(0,1,"black","grey"));
console.log(colors.sort());


let months=['jan','july','march','aug'];
console.log(months.splice(0,2,"july","june"));
console.log(months);


let arr=['1','b','c'];
let arrCopy=arr;
console.log(arr== arrCopy);
console.log(arr===arrCopy);
arr.push('d');
console.log(arr);
console.log(arrCopy);
arrCopy.pop();
console.log(arr);
console.log(arrCopy);

let nums=[[1,2],[3,4],[5,6]];
console.log(nums);
console.log(nums.length);
console.log(nums[0].length);
console.log(nums[0][0]);


let ticToc=[['x',null,'0'],[null,'x',null],['0',null,'x']];
console.log(ticToc);
ticToc[0][1]='0';
console.log(ticToc);


let arr1=[7,9,0,-2];
let n=3;
let ans =arr1.slice(0,n);
console.log(ans);

let ans1 =arr1.slice(0,arr1.length-n);
console.log(ans1);


let str=prompt("please enter your string");
if (str.length ==0) {
    console.log("string is empty");
} else {
        console.log("string is not empty");

}

let str1="ApnaCollege";
let idx=3;
if (str1[idx] == str1[idx].toLowerCase()) {
    console.log("string is lower");
} else {
        console.log("string is not lower");

}




