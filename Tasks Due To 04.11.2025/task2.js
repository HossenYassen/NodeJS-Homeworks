/***********************************************************
 *  Name: Hossen Yassen                                    *
 *  Name: Jubran Ayash                                     *
 ***********************************************************
 *  Project         : Task 2                               *
 *  Due Date        : 04/11/2025                           *
 *  Sumbission Date : 28/10/2025                           *
 ***********************************************************/

const limit = 237;

/**
 * Checks if the input number is prime or not.
 * 
 * @param {number} number - The number to check.
 * @returns {boolean} true - if the imput number is prime, otherwise false.
 */
const isPrime = (num) => {
    if (num === 2) return true; // 2 is the only even prime number;
    if (num !== 2 && num % 2 === 0) return false; // found an even number which is not 2 that cannot be prime;
    for (let i = 3; i < Math.sqrt(num); i += 2) {
        if (num % i === 0)
            return false;
    }
    return true;
}

/**
 * Prints all the primes number from 2 to the limit.
 * 
 * @param {number} limit - the limit where we want to print all the prime to it.
 * @returns {void} - The function don't return a value.
 */
const printAllPrimesToTheLimit = (limit) => {
    for(let i = 2 ; i < limit ; i++){
        if(isPrime(i))
            console.log(i);
    }
}

printAllPrimesToTheLimit(limit);