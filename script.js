let num = 888, sum = 0;
let num_of_digits = num.toString().length;
for (let original_num = num ; original_num > 0 ; original_num = Math.floor(original_num / 10))
    sum += Math.pow(original_num % 10, num_of_digits);
if (sum === num)
    console.log('Is armstrong');
else
    console.log('Not armstrong');