export const Sum = (a, b) => a+b


// export const Sum = (a,b)=> {
//     let firstNumber = checkNumber(a);
//     let secondNumber = checkNumber(b);
//     return firstNumber + secondNumber;
// }

// export const Sum = (a, b) => {
//     if(isNaN(a) ||  isNaN(b)){
//         return "There's an error in your parameters, please verify, and thanks for use this calculator!"
//     }

//     return a + b
// }



const checkNumber = (number) => isNaN(number) ? 0:number