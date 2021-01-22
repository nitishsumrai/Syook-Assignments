// 2. In this kata, you must create a digital root function using recursion or with
// time complexity of O(1).
// A digital root is the recursive sum of all the digits in a number. Given n, take
// the sum of the digits of n. If that value has more than one digit, continue reducing
// in this way until a single-digit number is produced. This is only applicable to the
// natural numbers.
// Here's how it works:
// digital_root(16)
// => 1 + 6
// => 7
// digital_root(942)
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6
// 3. John and Mary w

// Solution

function singleDigit(N) {
    var n = ans(N);
    while (n > 9) {
        n = ans(n);
    }
    return n;
}
function ans(n) {
    if (n < 10) {
        return n;
    }
    return n % 10 + ans(Math.trunc(n / 10));
}
