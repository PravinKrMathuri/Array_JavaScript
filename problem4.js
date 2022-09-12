let arr = [1,2,3,4,5];


// let bag=" ";
// for (let i =0; i<=arr.length-1; i++) {
//   bag = bag + arr[i];
// }
// console.log(bag);

// let bag =" ";
//     for (let i=arr.length-1; i>=0; i--) {
//         bag = bag+arr[i]+" ";
//     } 
//         console.log(bag);
let min = 1;
    for (let i=0;i<=arr.length-1; i++) {
        if (arr[i]>arr.length){
            min = arr[i];
        }
    }console.log(min);