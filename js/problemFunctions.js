const problemFunctions = {
    problem1: (timeStart) => {
        return new Promise(function(resolve, reject) {
            let answer = 0;

            for (let x = 1; x < 1000; x++) {
                // Modulo (%) will give a result of 0 if the number is evenly divisible, or the remainder if not
                if (x%3 === 0 || x%5 === 0) {
                    // A running sum of the total
                    answer += x;
                }
            }

            const timeFinish = performance.now();
            const result =  {
                'answer': answer,
                'timeFinish': timeFinish
            }

            resolve(result);
        });
    },
    problem2: (timeStart) => {
        return new Promise(function(resolve, reject) {
            const sequenceArr = [];
            let nextVal = 0, answer = 2;

            sequenceArr.push(1);
            sequenceArr.push(2);

            // This loop calculates Fibonacci Sequence numbers not exceeding 4 million incrementally and uses modulo to test if they are even.
            // A brute force approach.
            while (nextVal <= 4000000) {
                nextVal = sequenceArr[sequenceArr.length - 1] + sequenceArr[sequenceArr.length - 2];
                if (nextVal%2 === 0) {
                    answer += nextVal;
                }
                sequenceArr.push(nextVal);
            }

            const timeFinish = performance.now();

            const result =  {
                'answer': answer,
                'timeFinish': timeFinish
            }

            resolve(result);
        });
    },
    problem3: (timeStart) => {
        return new Promise(function(resolve, reject) {
            const target = 600851475143, possibleAnswer = [];
            
            // Any number greater then the square root, multiplied by the square root can be ruled out, as it will be bigger than the target.
            maxFactor = Math.sqrt(target);

            for (let x = 2; x <= maxFactor; x++) {
                let prime = true;
                if (target % x === 0) {
                    // A brute force loop that will check if the value of x is a prime number.
                    // This took a while for me to work out, and is used in future problems as my base tester for primes.
                    for (let y = 1; y <= x; y++) {
                        if (x % y === 0 && (y !== 1 && x !== y)) {
                                prime = false;
                        }
                    }
                    if (prime === true) {
                        possibleAnswer.push(x);
                    }
                }
            }

            // Spread the array into Math.max to get the highest value.
            let answer = Math.max(...possibleAnswer);

            const timeFinish = performance.now();
            const result =  {
                'answer': answer,
                'timeFinish': timeFinish
            }
            resolve(result);
        });
    },
    problem4: (timeStart) => {
        return new Promise(function(resolve, reject) {
            let palindrome = [];

            for (let x = 100; x < 1000; x++) {
                for (let y = 100; y < 1000; y++) {
                    let product = x * y;
                    // I have used from here rather than split as a more modern solution to convert a string number to an array for manipulation.
                    let prodReversed = Array.from(product.toString()).reverse().join('');
                    if (prodReversed === product.toString()) {
                        palindrome.push(product);
                    }
                }
            }

            // Spread the array into Math.max to get the highest value.
            let answer = Math.max(...palindrome);

            const timeFinish = performance.now();
            const result =  {
                'answer': answer,
                'timeFinish': timeFinish
            }

            resolve(result);
        });
    },
    problem5: (timeStart) => {
        return new Promise(function(resolve, reject) {
            // Start the target number at 20, we know that no number below 20 is evenly divisible by 20.
            let answer = 0, count = 20;
            
            // A brute force loop.
            while (answer === 0) {
                let testFailed = false;
                for (let x = 1; x <= 20; x++) {
                    // Exit the 1 -20 count up loop as soon as we find a value that is not evenly divisible into the test number.
                    // This can save up to 19 iterations per test number increment.
                    if (count%x !== 0) {
                        testFailed = true;
                        break;
                    }
                }
                if (!testFailed) {
                    answer = count;
                }
                count++;
            }

            const timeFinish = performance.now();
            const result =  {
                'answer': answer,
                'timeFinish': timeFinish
            }

            resolve(result);
        });
    },
    problem6: (timeStart) => {
        return new Promise(function(resolve, reject) {
            let sumSquares = 0, sum = 0;

            // A brute force loop.
            for (let x = 1; x <= 100; x++) {
                sumSquares += x * x;
                sum += x;
            }

            let squareSum = sum * sum;
            let answer = squareSum - sumSquares;

            const timeFinish = performance.now();
            const result =  {
                'answer': answer,
                'timeFinish': timeFinish
            }

            resolve(result);
        });
    },
    problem7: (timeStart) => {
        return new Promise(function(resolve, reject) {
            let answer = 0, count = 14, primes = 6; // We are excluding the first 6 primes plus their multiples
            
            while (primes < 10001) {
                // Immediately rule out the the first 6 primes and any multiples of them. this saves significant processing time.
                if (count % 2 === 0 || count % 3 === 0 || count % 5 === 0 || count % 7 === 0 || count % 11 === 0 || count % 13 === 0) {
                    count++;
                    continue;
                }
                let prime = true;
                // A test loop for prime numbers worked out in a earlier problem.
                for (let y = 1; y <= count; y++) {
                    if (count % y === 0 && (y !== 1 && count !== y)) {
                            prime = false;
                    }
                }
                if (prime === true) {
                    primes += 1;
                }
                count++;
            }

            answer += count - 1; // We have 10001 primes but the count++ adds one more.

            const timeFinish = performance.now();
            const result =  {
                'answer': answer,
                'timeFinish': timeFinish
            }
            resolve(result);
        });
    },
    problem8: (timeStart) => {
        return new Promise(function(resolve, reject) {
            let digit1000 = 
            '73167176531330624919225119674426574742355349194934' +
            '96983520312774506326239578318016984801869478851843' +
            '85861560789112949495459501737958331952853208805511' +
            '12540698747158523863050715693290963295227443043557' +
            '66896648950445244523161731856403098711121722383113' +
            '62229893423380308135336276614282806444486645238749' +
            '30358907296290491560440772390713810515859307960866' +
            '70172427121883998797908792274921901699720888093776' +
            '65727333001053367881220235421809751254540594752243' +
            '52584907711670556013604839586446706324415722155397' +
            '53697817977846174064955149290862569321978468622482' +
            '83972241375657056057490261407972968652414535100474' +
            '82166370484403199890008895243450658541227588666881' +
            '16427171479924442928230863465674813919123162824586' +
            '17866458359124566529476545682848912883142607690042' +
            '24219022671055626321111109370544217506941658960408' +
            '07198403850962455444362981230987879927244284909188' +
            '84580156166097919133875499200524063689912560717606' +
            '05886116467109405077541002256983155200055935729725' +
            '71636269561882670428252483600823257530420752963450';

            let digit13, digit13Arr, lastProduct = 0, product = 0, answer;

            // A loop used to slice out 13 number sequences starting from index 0 and finsihing at the final index less 13 so we can have a complete digit.
            for (let x = 0; x <= digit1000.length - 13; x++) {
                digit13 = digit1000.slice(x, x + 14);
                // Used from here for a more modern approach to split the string into an array.
                digit13Arr = Array.from(digit13);
                // Convert any parts of the string needed for math to integers.
                product = parseInt(digit13Arr[0]);
                // Product of each of the integers in the array.
                for (let y = 1; y < 13; y++) {
                    intIterator = parseInt(digit13Arr[y]);
                    product *=  intIterator;
                }
                // No need to store them all, just record if this product is the highest so far.
                if (product > lastProduct) {
                    answer = product;
                    lastProduct = product;
                }
            }

            const timeFinish = performance.now();
            const result =  {
                'answer': answer,
                'timeFinish': timeFinish
            }
            resolve(result);
        });
    },
    problem9: (timeStart) => {
        return new Promise(function(resolve, reject) {
            let answer = 0;
            // A series of brute force loops.
            for (let a = 1; a < 1000; a++) {
                // Once the answer is obtained, break out of the first loop, thus terminating all loops.
                if (answer > 0) {
                    break;
                }
                for (let b = 1; b < 1000; b++) {
                    let c = Math.sqrt((a * a) + (b * b));
                    // Evaluate a + b + c === 1000 first before doing the second part maths, to save on operations
                    if (a + b + c === 1000 && ((a * a) + (b * b) === c * c)) {
                        answer = a * b * c;
                    }
                }
            }

            const timeFinish = performance.now();
            const result =  {
                'answer': answer,
                'timeFinish': timeFinish
            }
            resolve(result);
        });
    },
    problem10: (timeStart) => {
        return new Promise(function(resolve, reject) {
            let prime, factor, answer = 0, sieve = [];
            outerLoop: for (let x = 2; x < 2000000; x++) {
                prime = true;
                factor = false;
                // Implement a full Sieve of Eratosthenes.
                // Multiples of known primes can be ruled out of the process.
                innerLoop: for (let y = 0; y < sieve.length - 1; y ++) {
                    if (x % sieve[y] === 0) {
                        factor = true;
                        break innerLoop;
                    }
                }
                if (factor) {
                    continue outerLoop;
                }
                secondLoop: for (let y = 1; y < Math.sqrt(x); y++) {        
                    // A previously used prime testing loop.
                    if (x % y === 0 && (y !== 1 && x !== y)) {
                        prime = false;
                    }
                }
                    if (prime === true) {
                        answer += x;
                        sieve.push(x);
                    }
            }

            const timeFinish = performance.now();
            const result =  {
                'answer': answer,
                'timeFinish': timeFinish
            }
            resolve(result);
        });
    },
    problem11: (timeStart) => {
        return new Promise(function(resolve, reject) {
            
            const rowsCols = 20, sequenceLen = 4, seqHorizontal = [], seqVertical = [], seqDiagForwardBottom = [], 
            seqDiagonalReverse = [], gridMulti = [], gridDiagForwardTop = [], gridDiagForwardBottom = [],
            gridDiagReverseTop= [], gridDiagReverseBottom = [];
            // Initialise 20 arrays ready to store the vertical column data.
            for (let x = 0; x < rowsCols; x++) {
                seqVertical.push(new Array());
            }
            // Initialise 16 (bottom) or 17 (top) arrays ready to store the vertical column data.
            for (let x = 0; x < rowsCols - 3; x++) {
                gridDiagForwardTop.push(new Array());
                gridDiagReverseTop.push(new Array());
                if (x < rowsCols - 4) {
                    gridDiagForwardBottom.push(new Array());
                    gridDiagReverseBottom.push(new Array());
                }
            }
            let largestProd = 0;
            let grid = 
            "08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08 " +
            "49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00 " +
            "81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65 " +
            "52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91 " +
            "22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80 " +
            "24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50 " +
            "32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70 " +
            "67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21 " +
            "24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72 " +
            "21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95 " +
            "78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92 " +
            "16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57 " +
            "86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58 " +
            "19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40 " +
            "04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66 " +
            "88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69 " +
            "04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36 " +
            "20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16 " +
            "20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54 " +
            "01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48 ";
            
            for (let x = 0; x < rowsCols; x++) {
                const gridLine = grid.slice((x * 60), (x * 60) + 59).split(' ');
                gridMulti.push(gridLine);
            }

            let count = 0;
            for (let y = 0; y < gridMulti.length; y++) {
                for (let z = 0; z < gridMulti[y].length; z++) { 
                    seqHorizontal.push(gridMulti[y][z]);
                    seqVertical[z].push(gridMulti[y][z]);

                    // The product of 4 digits means we need to stop the sequence 4 digits from the end to keep within bounds.
                    if (z < 17) {
                        gridDiagForwardTop[z].push(gridMulti[y][z + y]);
                        gridDiagReverseTop[z].push(gridMulti[y][19 - z - y]);
                    }

                    // Start at index 1 or we are duplicating the first line of the top grid.
                    // The product of 4 digits means we need to stop the sequence 4 digits from the end to keep within bounds.
                    if ( y > 0 && y < 17 && z + count < 20) {
                        gridDiagForwardBottom[y - 1].push(gridMulti[z + count][z]);
                        gridDiagReverseBottom[y - 1].push(gridMulti[z + count][19 - z]);
                    }

                    // The product of 4 digits means we need to start the sequence 4 digits from the beginning to keep within bounds.
                    // Keep the sequence to 4 digits in length.
                    if (seqHorizontal.length > 4) {
                        seqHorizontal.shift();
                    } 

                    // The product of 4 digits means we need to start the sequence 4 digits from the beginning to keep within bounds.
                    // Keep the sequence to 4 digits in length.
                    if (seqVertical[z].length > 4) {
                        seqVertical[z].shift();
                    }

                    seqIterate(seqHorizontal);
                    seqIterate(seqVertical[z]);

                }
                count++;
            }

            gridDiagIterate(gridDiagForwardTop);
            gridDiagIterate(gridDiagReverseTop);
            gridDiagIterate(gridDiagForwardBottom);
            gridDiagIterate(gridDiagReverseBottom);
            
            answer = largestProd;
            
            const timeFinish = performance.now();
            const result =  {
                'answer': answer,
                'timeFinish': timeFinish
            }
            resolve(result);

            // Helper funtion to run on both horiaontal grids
            function seqIterate(sequence) {
                        if (sequence.length === 4) {
                            let prod = 0;
                            let count = 1; 
                            sequence.forEach((int) => {
                                int  = parseInt(int);
                                if (count === 1) {
                                    prod = int;
                                }
                                else {
                                    prod *= int;
                                }
                                count++;
                            });
                            if (prod > largestProd) {
                                largestProd = prod;
                            }
                        }
                    }

            // Helper funciton to run on all four diagonal grids
            function gridDiagIterate(grid) {
                grid.forEach((diagonal) => {
                    const seqDiag = [];
                    diagonal.forEach((int) => {
                        if (int) {
                            let prod = 0
                            let count = 1;
                            int = parseInt(int);
                            seqDiag.push(int);
                            if (seqDiag.length > 4) {
                                seqDiag.shift();
                            }
                            if (seqDiag.length === 4) {
                                seqDiag.forEach((seqInt) => {
                                    if (count === 1) {
                                        prod = seqInt;
                                    }
                                    else {
                                        prod *= seqInt;
                                    }
                                    count++;
                                });
                            }
                            if (prod > largestProd) {
                                largestProd = prod;
                            } 
                        }
                    });
                });
            }
        });
        
    },
    problem12: (timeStart) => {
        return new Promise(function(resolve, reject) {
            let factors = 0, answer, triangle = 0, count = 1, maxFactor;
            outerLoop: while (factors < 501) {
                triangle = triangle + count;
                if (triangle % 2 !== 0) {
                    count++;
                    continue outerLoop;
                }
                factors = 0;
                // If a factor exceeds the square root of a number, it has a pair below the square root, so we can count it twice automatically.
                maxFactor = Math.sqrt(triangle);
                innerLoop: for (let y = 1; y <= maxFactor; y++) {
                    if (triangle % y === 0) {
                        // This number is a perfect square and counts as one factor becasue it is one number.
                        if (y * y === triangle) {
                            factors += 1;
                        }
                        // This number is not a perfect square, and it's pair is in the upper end of the triangle
                        // So we must count this number and it's pair.
                        else {
                            factors += 2;
                        }
                    }
                }
                answer = triangle;
                count++;
            }
            
            const timeFinish = performance.now();
            const result =  {
                'answer': answer,
                'timeFinish': timeFinish
            }
            resolve(result);
        });
    },
    problem13: (timeStart) => {
        return new Promise(function(resolve, reject) {
            // The BigInt type is used for working with large numbers in Javascript.
            let answer, numArray, sum = BigInt(0);
            // Rather than type out the huge number again, grab it from the original problem string
            // and split each 50 digit line into an array.
            problems.forEach((problem) => {
                if (problem.number === 13) {
                    numArray = problem.question.split('\n\n')[1].split('\\n');
                }
            });
            
            // Sum each digit in the array using the BigInt type.   
            for (let x = 0; x < numArray.length - 1; x++) {
                sum += BigInt(numArray[x]);
            }
            // Convert the sum back to a string so we can slice out the first 10 digits easily.
            sum = sum.toString();
            answer = sum.slice(0, 10);

            const timeFinish = performance.now();
            const result =  {
                'answer': answer,
                'timeFinish': timeFinish
            }
            resolve(result);
        });
    },
    problem14: (timeStart) => {
        return new Promise(function(resolve, reject) {
            let answer = 0, countMax = 0;
            for (let x = 1; x < 1000000; x++) {
                let count = 1; let num = 0;
                // While we have not reached the end number.
                while (num != 1) {
                    // On the first iteration of the inner loop, set the starting number.
                    if (count === 1) {
                        num = x;
                    }
                    // If iteration is even, perform the even maths.
                    if (num % 2 === 0) {
                        num = num / 2;
                    }
                    // If iteration is odd, perfrom the odd maths.
                    else {
                        num = 3 * num + 1; 
                    }
                    // Count the number of iterations on the way to the final number 1.
                    count++;
                    // Store the highest number of iterations.
                    if (count > countMax) {
                        countMax = count;
                        // Return the number in the outer loop that had the higest number of steps.
                        answer = x;
                    }
                }
            }

            const timeFinish = performance.now();
            const result =  {
                'answer': answer,
                'timeFinish': timeFinish
            }
            resolve(result);
        });
    },
    problem15: (timeStart) => {
        return new Promise(function(resolve, reject) {
            const gridArray = [];
            let answer = 0, destination, paths = 0, arr;

            // I initially tried to start counting each possible path, but quickly realised this was going to be impossible.
            // I looked up online the theory behind solving a problem like this and found rather than count paths taken,
            // You need to count number of possible paths from each start edge.
            // From each edge, there is one possible path to the next, 
            // and in the bottom right intersection of these - there is the sum of each number of paths to the previous positions so far.
            // In this way it is possible to sequentially count the number of paths for the final location.
            // This theory is known as Pascal's Triangle, and can be applied to a triangle shape,
            // or in gridwalking to a square shape.

            // Create a 21 x 21 grid array. Mark the start edges of each dimension with 1.
            // We need size 21 so we can count the paths at the intersections.
            for (let x = 0; x < 21; x++) {
                arr = [];
                for (let y = 0; y < 21; y++) {
                    if (x === 0 || y === 0) {
                        // There is 1 path at the top and left starting edges.
                        arr.push(1)
                    }
                    else {
                        // We will calculate all the zeros during the loop traversal.
                        arr.push(0);
                    }
                }
                gridArray.push(arr);
            }
            console.log(gridArray);

            for (let x = 0; x < gridArray.length; x++) {
                for(let y = 0; y < gridArray[x].length; y++) {
                    if (gridArray[x][y] === 0) {
                        // Sum the preceeding two paths from the left and the top to get number of paths for this location.
                        // Eg. in position bottom right in a 1 x 1 grid, there is 1 path from the top, and 1 path from left, making 2 paths.
                        // This formula can be applied to a larger grid.
                        gridArray[x][y] = gridArray[x - 1][y] + gridArray [x][y-1]
                    }
                }
            } 

            console.log(gridArray);
            // The total number of paths is the lower right most value.
            answer = gridArray[20][20];

            const timeFinish = performance.now();
            const result =  {
                'answer': answer,
                'timeFinish': timeFinish
            }
            resolve(result);
        });
    },
    problem16: (timeStart) => {
        return new Promise(function(resolve, reject) {
            // This problem is somewhat easier to solve now since the introduction of the BigInt data type.
            let answer = 0, power = BigInt(Math.pow(2, 1000));
            // Array.from is a modern way to 'split' an array type like a string.
            const powerArr = Array.from(power.toString());
            
            // Convert each string digit back to an integer for calculation.
            powerArr.forEach((integer) => {
                answer += parseInt(integer);
            });

            const timeFinish = performance.now();
            const result =  {
                'answer': answer,
                'timeFinish': timeFinish
            }
            resolve(result);
        });
    },
    problem17: (timeStart) => {
        return new Promise(function(resolve, reject) {
            let answer = 0;

            const timeFinish = performance.now();
            const result =  {
                'answer': answer,
                'timeFinish': timeFinish
            }
            resolve(result);
        });
    },
};