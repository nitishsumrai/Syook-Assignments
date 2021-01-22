// 3. John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet
// of paper a list of distances between these towns. ls = [50, 55, 57, 58, 60]. John is
// Please ensure you read the question carefully and solve it using javascript.
// tired of driving and he says to Mary that he doesn't want to drive more than t = 174
// miles and he will visit only 3 towns.
// Which distances, hence which towns, they will choose so that the sum of the
// distances is the biggest possible - to please Mary - but less than t - to please John-
// ?
// Example:
// With list ls and 3 towns to visit they can make a choice between:
// [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60
// ],[55,58,60],[57,58,60].
// The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.
// The biggest possible sum taking a limit of 174 into account is then 173 and the
// distances of the 3 corresponding towns is [55, 58, 60].
// The function chooseBestSum will take as parameters t (maximum sum of distances,
// integer >= 0), k (number of towns to visit, k >= 1) and ls (list of distances, all
// distances are positive or null integers and this list has at least one element). The
// function returns the "best" sum ie the biggest possible sum of k distances less than
// or equal to the given limit t, if that sum exists, or otherwise return null.
// Examples:
// ts = [50, 55, 56, 57, 58], chooseBestSum(163, 3, ts) -> 163
// xs = [50], chooseBestSum(163, 3, xs) -> null
// ys = [91, 74, 73, 85, 73, 81, 87], chooseBestSum(230, 3, ys) -> 228

// Solution


// pass arguments as Max Distance , Number Of City , Distane List
function chooseBestSum(t, k, ls) {

    var an = ans(0, 0, 0, t, k, ls);
    if (an == Number.MIN_VALUE) {
        return null;
    }
    return an;
}
function ans(i, curWeight, curItems, weight, items, ls) {
    if (curItems == items && curWeight <= weight) {
        return curWeight;
    }

    if (curWeight > weight || curItems > items || i >= ls.length) {
        return Number.MIN_VALUE;
    }


    return Math.max(ans(i + 1, curWeight + ls[i], curItems + 1, weight, items, ls),
        ans(i + 1, curWeight, curItems, weight, items, ls));
}