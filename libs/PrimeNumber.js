/**
 * utility lib for all tricks about prime numbers.
 */
let pn = {

    /**
     * Prime numbers up to 500
     */
    primeNumbers500: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 
        71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 
        149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 
        227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 
        307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 
        389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 
        467, 479, 487, 491, 499],

    isPrimeNumber: function(aNumber) {

        if(this.primeNumbers500.includes(aNumber)) {
            return true;
        } else {
            return false;
        }
    }
};

// this export is for statement 
//  - import PrimeNumber from '@/libs/PrimeNumber'
export default pn;

// this format doesn't work for browser!
//module.exports = pn;
