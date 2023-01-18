//area of triangle
var a=5;
var b=6;
var c=7;
var s=(a+b+c)/2;
var n=Math.sqrt(s*((s-a)*(s-b)*(s-c)));
console.log(n);

//temperature converter
function dctodf(num){
var res=num*(9/5)+32;
console.log(num+"C is "+res+"F");
}
function dftodc(num){
    var res=(5/9)*(num-32)
    console.log(num+"F is "+res+"C");
    }
dctodf(60);
dftodc(45);

//difference between a given number and 13
/*const prompt=require("prompt-sync")({sigint:true});
var a=prompt("enter a number");
if(a>13){
    console.log(Math.abs(2*(a-13)));
}
else{
    console.log(13-a);
}*/

//find largest of given integers
var a=7;
var b=5;
var c=1;
if((a>b) && (a>c)){
   console.log("the largest number is : "+a);
}
else if((b>a) && (b>c)){
    console.log("the largest number is : "+b);  
}
else{
    console.log("the largest number is : "+c);
}

//grading system
function checkgrade(grading){
    if(grading=="A"){
        return true;
    }
    return false;
}
var marks=80;
var grade;
if(marks>=89){
    grade="A";
}
else{
grade="B";
}
console.log(checkgrade());

    