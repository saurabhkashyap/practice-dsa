/**
 * Problem: https://www.hackerearth.com/practice/data-structures/arrays/1-d/practice-problems/algorithm/tram-ride-d7ff3a92/
 *
 * Function description
 *
 * Complete the Solve() function provided in the editor below that takes the following arguments and finds the minimum cost to travel between the given start and finish station:
 *
 * N: Represents the total number of tram stations
 * start: Represents the start station
 * finish: Represents the finish station
 * ticket_cost: Represents ticket_cost[i] denoting the ticket-cost between the station number i and (i + 1) %N
 * Input format
 *
 * The first line contains an integer N denoting the total number of tram stations.
 * The second line contains an integer start denoting the start station.
 * The third line contains an integer finish denoting the finish station.
 * The fourth line contains an N space-separated integer array ticket_cost, ticket_cost[i] represents the ticket-cost between the station number i and (i + 1) %N.
 *
 *
 * Assumptions
 *
 * N = 4
 * start = 1
 * finish = 4
 * ticket_cost = [1, 2, 2, 4 ]
 * Approach
 *
 * path1 -> 1------1-----> 2 -------2------> 3 -------2------> 4 . => 1+2+2 => 5
 *
 * path2 -> 1------4------>4 . => 4
 *
 * Path2 will give the minimum cost. Therefore return 4.
 */

const solve = function (N, start, finish, Ticket_cost) {
    let path1Cost = null;
    let path2Cost = null;
    if (start < finish) {
        path1Cost = path2Cost = 0;
    } else if (start > finish) {
        path2Cost = 0;
    } else {
        return 0;
    }
    for (let i = start; i < finish; i++) {
        path1Cost += Ticket_cost[i-1];
    }
    if (path1Cost === null) {
        for (let i = start; i > finish; i--) {
            path2Cost += Ticket_cost[i - 2]
        }
        return path2Cost;
    } else {
        let i = start;
        while (i !== finish) {
            if (i === 1) i = N;
            if (N === finish && i === N) break;
            i--;
            path2Cost += Ticket_cost[i];
        }
        path2Cost+=Ticket_cost[finish-1];
    }
    if (path1Cost < path2Cost) return path1Cost
    else return path2Cost;
}


const solve2 = function (N, start, finish, Ticket_cost){
    let path1 = 0, path2 = 0;

    if(start > finish){
        let temp = start;
        start = finish;
        finish = temp;
    }
    for(let i=start-1;i<finish-1;i++){
        path1+=Ticket_cost[i];
    }
    let j = finish-1;
    while(j<N){
        path2+=Ticket_cost[j];
        j++;
    }
    j=0;
    while (j<start-1){
        path2+=Ticket_cost[j];
        j++;
    }
    return Math.min(path1, path2);
}


console.log(solve2(5, 4, 3, [12, 6, 2, 6, 2])); // Output: 2
console.log(solve2(10, 5, 3, [4, 14, 10, 7, 3, 13, 5, 15, 13, 4])); // Output: 17
console.log(solve2(15, 1, 8, [14, 20, 7, 14, 21, 18, 13, 2, 7, 1, 5, 16, 5, 10, 14])); // Output: 60
console.log(solve2(5, 2, 4, [1, 2, 2, 4, 3])); // Output: 6
console.log(solve2(4, 1, 3, [1, 2, 3, 4])); // Output: 4
console.log(solve2(25, 13, 25, [5,11,24,15,25,11,22,28,16,25,12,17,16,2,25,25,4,10,24,28,24,7,15,4,11])); // Output: 184
console.log(solve2(35, 26, 27, [32,28,33,5,28,25,21,30,38,34,42,10,37,37,29,4,9,37,31,11,4,24,9,10,4,28,1,37,8,15,28,11,27,32,18])); // Output: 28

// let string = "5 11 24 15 25 11 22 28 16 25 12 17 16 2 25 25 4 10 24 28 24 7 15 4 11";
// console.log(string.replace(/ /g, ","))