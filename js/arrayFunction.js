// let array1 = [15, 84, 65, 22, 45, 170, 54]

//1.

// const maxArr = (array1) => {
//     let max = array1[0]

//     for (let i=1; i<array1.length; i++) {
//         if (array1[i] > max) {
//             max = array1[i]
//         }
//     }
//     console.log(max);
// }
// maxArr(array1)



//2.

// const maxArr = (array1) => {
//     let max = array1[0]

//     for (let i=1; i<array1.length; i++) {
//         if (array1[i] < max) {
//             max = array1[i]
//         }
//     }
//     console.log(max);
// }
// maxArr(array1)

//3. Reversing an array.

// const ReversArr = (array1) => {
//    let = newArr =[]
//     for (let i=array1.length-1; i>=0; i--) {
//         newArr.push(array1[i]);
//     }
//     console.log(newArr);
// }

// ReversArr(array1)

//6. Finding the sum of all elements in an array.

// const SumArr = () => {
//     sum = 0
//     for (let i=0; i<array1.length; i++) {
//         sum = sum + array1[i]
//     }
//     console.log(sum);
// }

// SumArr()

//7. Finding the average of all elements in an array.

// const AvrgArr = () => {
//     sum = 0
//     for (let i=0; i<array1.length; i++) {
//         sum = sum + array1[i]
//     }
//     console.log(sum/array1.length);
// }

// AvrgArr()


//8. Checking if an array contains a specific element.

// const checkElem = (array1,elem) => {
//     let temp;
//     for (let i=0; i<array1.length; i++) {
//         if (array1[i] === elem) {
//             temp = elem
//             break;
//         }
//     }
//     if (temp) {
//         console.log(temp + " is available");
//     } else {
//         console.log(elem + " is not available");
//     }

// } 

// checkElem(array1,89)




//9. Removing duplicates from an array.

let arr = ["mistry", "meet", "surti", "mistry"];

let arr1 = [56, 55, 3, 6, 41];

let arr2 = [3, 66, 45, 66, 55, 66, 56, 55, 10];

let arr3 = [10, 20, 30, 40, 50, 60, 70]

// const dupliArr = (arr2) => {
//     let uniqeArr = []

//     arr.map((v) => {
//         if (!uniqeArr === v) {
//             newArr.push(v)
//         }
//     })
//     console.log(uniqeArr);
// }

// dupliArr(arr2)






//10. Merging two arrays into a new array.

// const mergeArr = (arr1,arr2) => {
//     let newArr = []

//     for (let i=0; i<arr1.length; i++) {
//         newArr[i] = arr1[i]
//     }

//     for (let i=0; i<arr2.length; i++) {
//         newArr[arr1.length + i] = arr2[i] 
//     }
//     console.log(newArr);

// }
// mergeArr(arr1,arr2)




//11. Splitting an array into two arrays based on a condition.

// const splitArr = (arr1,arr2) => {


// }
// splitArr(arr1, aar2)

//13. Rotating an array by a given number of positions.

// const rotatingArr = (arr,n) => {
//     for (let i=0; i<n; i++) {
//         let elem = arr.pop()
//         arr.unshift(elem)

//         console.log(elem,arr);
//     }

// }
// rotatingArr(arr3,3);


// 14.  Finding the second largest element in an array.


// const seclargArr = (arr) => {

//     let ans = arr.sort((a,b) => b-a)
//     console.log(ans[1]);
// }

// seclargArr(arr1)

// 15.  Finding the k-th smallest element in an array.

// const ksmallArr = (arr, elem) => {
//     let ans = arr.sort((a, b) =>a - b)
//     console.log(ans[elem - 1]);
// }
// ksmallArr(arr1, 2)

