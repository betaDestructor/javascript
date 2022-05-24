// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// - To calculate average of 3 values, add them all together and divide by 3
// - To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores

const calcAverage = (round_1, round_2, round_3) => (round_1 + round_2 + round_3) / 3;
function checkWinner (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2)
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    else if (avgKoalas >= avgDolphins * 2)
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
}
const dolphin_round_1 = 85;
const dolphin_round_2 = 54;
const dolphin_round_3 = 41;

const koalas_round_1 = 23;
const koalas_round_2 = 34;
const koalas_round_3 = 27;

checkWinner(calcAverage(dolphin_round_1, dolphin_round_2, dolphin_round_3),
calcAverage(koalas_round_1, koalas_round_2, koalas_round_3));