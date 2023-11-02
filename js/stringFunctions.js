//1. concat

const str1 = 'Hey'
const str2 = 'Siri'

console.log(str1.concat(': ', str2));






//2. includes

const sentence = 'Who R U'

const word = 'R'

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);







//3. indexOf

let text = "Hello World Welcome To Milkyway Galaxy"
// let res = text.indexOf("Galaxy")
let res = text.indexOf("o")

console.log(res);







//4.startsWith 

const str_1 = 'Join our freelancer community';

console.log(str_1.startsWith('Join'));
// Output: true

console.log(str_1.startsWith('Join', 3));
// Output: false

console.log(str_1.startsWith('freelancer', 9));
// Output: true





//5.endsWith


let str = "Hello World Welcome To Milkyway Galaxy"
        //  
console.log(str.endsWith('Galaxy',38));
// console.log(str.endsWith('To',23));






//6. slice

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));


console.log(animals.slice(1, 5));
                     //  srt end






//7. substrimg

let productStr = 'Food Fector'

console.log(productStr.substring(1,6));






//8.replace


let text1 = 'surat vapi mumbai'

console.log(text1.replace("surat","bardoli"));








//9. replaceAll 

let text2 = 'i love surat, i love surat food, i want to visit surat'

console.log(text2.replaceAll("surat","mumbai"));





//10. trim

let text3 = '          Hey World    '

console.log(text3.trim());


//11.split

