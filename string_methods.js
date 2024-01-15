// strings methods in js length,slice,concatinate,replace and etc

let name1="ramesh"
let name2="yadav"

console.log(name1.length)
console.log(name1.slice(1,4))
console.log(name1.replace("ram","bip"))
console.log(name1.concat(name2," here we concatinate"," ok done ",name2))



for(let i=0;i<name1.length;i++)
{
    console.log(name1[i])
}


//  here trim method is used in string for removing whitespace for example

let friend=" melina  hey   "
let riend=friend.trim()

console.log(friend.toUpperCase())
console.log(friend.toLowerCase())


let y=1000
console.log(`give me the money rs${y}`)
