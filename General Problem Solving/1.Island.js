// 1. Find the number of islands
// Given a boolean 2D matrix, find the number of islands. A group of connected 1s
// forms an island. For example, the below matrix contains 5 islands
// const matrix = [
// [1, 1, 0, 0, 0],
// [0, 1, 0, 0, 1],
// [1, 0, 0, 1, 1],
// [0, 0, 0, 0, 0],
// [1, 0, 1, 0, 1]
// ];
// Output: 5

// Solution

// pass 2D matrix as argument
function numIslands(a) {
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        for (var u = 0; u < a[0].length; u++) {
            if (a[i][u]) {
                count++;
                visit(i, u, a);
            }
        }
    }
    return count;
}
function visit(i, u, a) {

    if (i < 0 || i >= a.length || u < 0 || u >= a[0].length) {
        return;
    }
    if (!a[i][u]) {
        return;
    }
    a[i][u] = false;
    visit(i - 1, u, a);
    visit(i - 1, u - 1, a);
    visit(i, u - 1, a);
    visit(i + 1, u - 1, a);
    visit(i + 1, u, a);
    visit(i + 1, u + 1, a);
    visit(i, u + 1, a);
    visit(i - 1, u + 1, a);
}
