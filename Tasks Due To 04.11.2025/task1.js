/***********************************************************
 *  Name: Hossen Yassen                                    *
 *  Name: Jubran Ayash                                     *
 ***********************************************************
 *  Project         : Task 1                               *
 *  Due Date        : 04/11/2025                           *
 *  Sumbission Date : 28/10/2025                           *
 ***********************************************************/

const num = 123;

/**
 * Checks how many of the numbers 2, 3, and 5 divide the input number.
 *
 * @param {number} number - The number to evaluate.
 * @returns {number} 1 if divisible by one of them, 2 if divisible by two, 3 if divisible by all three.
 *
 * Logic:
 * - If divisible by only one of [2, 3, 5], returns 1.
 * - If divisible by exactly two of them, returns 2.
 * - If divisible by all three, returns 3.
 */
const task1Func = (number) => {
    return(Number(number % 2 === 0) + Number(number % 3 === 0) + Number(number % 5 === 0));
}

console.log(task1Func(num));
