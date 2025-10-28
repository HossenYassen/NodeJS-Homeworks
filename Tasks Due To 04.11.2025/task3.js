/***********************************************************
 *  Name: Hossen Yassen                                    *
 *  Name: Jubran Ayash                                     *
 ***********************************************************
 *  Project         : Task 3                               *
 *  Due Date        : 04/11/2025                           *
 *  Sumbission Date : 28/10/2025                           *
 ***********************************************************/

const arr = [0, 5, 3, 4, 0, 6, 9, 8, 0, 7, 8, 0, 0, 0, 5, 2, 3, 6, 5];


/**
 * Counts how many zeros in the input array.
 * 
 * @param {Array<Number>} arr - Numbers array.
 * @returns {Number} - The number of the zeros in the input array.
 */
const zerosCount = (arr) =>{
    let counter = 0;
    for(let i = 0 ; i < arr.length ; i++){
        arr[i] === 0 ? ++counter : counter;
    }
    return counter;
}

console.log(zerosCount(arr));
