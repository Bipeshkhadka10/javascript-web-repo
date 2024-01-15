//type first for writting functions
let a=2;
let b=5;
function oneplus(a,b){
    return a+b;
}
console.log("the average is " + oneplus(a,b)/2)


// and second method 

const name =()=>{
    console.log("inside the function take me out of it")

}
console.log(name())


// settimeout example
setTimeout( function name(){
    console.log("hello this is setTimeOut")
},4000)
clearTimeout();
setInterval(function hell(){
    console.log("inside if setInterval")
},1000)
clearInterval()