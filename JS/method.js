let msg="     hello      ";
console.log(msg.trim());

let name= "KIPM college og engineerin and technology";
console.log(name.toUpperCase());
console.log(name.toLowerCase());
let chat ="ilovecoding"
console.log(chat.indexOf("love"));
console.log(chat.indexOf("f"));

let college='         kipm college gida gorakhapur     ';
// console.log(college);
// let newCollege=college.trim()
// console.log("after trim: ",newCollege);
// newCollege=newCollege.toUpperCase();
// console.log("after upper case :",newCollege);
let newCollege=college.trim().toUpperCase();
console.log(newCollege);
console.log(newCollege.slice(0,5));
console.log(newCollege.slice(2));
console.log(newCollege.slice(-15));//lengthof string-no
console.log(newCollege.replace("GIDA","aktu"));

let address='gorakhpur';
newAdress=address.replace("gorakhpur","rustampur");
console.log(newAdress);
newAdress=address.repeat(4);
console.log(newAdress);

let courese='      b.tech         ';
console.log(courese.trim().toUpperCase());
