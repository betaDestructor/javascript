// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// - Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// - Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// - Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const dolphin_1 = 96, dolphin_2 = 108, dolphin_3 = 89;
const koalas_1 = 88, koalas_2 = 91, koalas_3 = 110;
const dolphin_avg = (dolphin_1 + dolphin_2 + dolphin_3) / 3;
const koalas_avg  = (koalas_1 + koalas_2 + koalas_3) / 3;
const minimum_req_score = 100;
if (dolphin_avg === koalas_avg && dolphin_avg >= 100 && koalas_avg >= 100)
    console.log(`Draw! Dolphins avg: ${dolphin_avg}, Koalas avg: ${koalas_avg}`);
else if (dolphin_avg < koalas_avg && koalas_avg >= 100)
    console.log(`Koalas won! Koalas avg: ${koalas_avg}, Dolphins avg: ${dolphin_avg}`);
else if (dolphin_avg > koalas_avg && dolphin_avg >= 100)
    console.log(`Dolphins won! Dolphins avg: ${dolphin_avg}, Koalas avg: ${koalas_avg}`);
else
    console.log(`No team won the trophy! Dolphins avg: ${dolphin_avg},
Koalas avg: ${koalas_avg}, Minimum required score: ${minimum_req_score}`);