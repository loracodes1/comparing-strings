const a='a';
const b='b';
if (a<b){
    console.log(`${a} is less than ${b}`)
}
else if (a>b){
    console.log(`${a} is less than ${b}`) 
}
else {
    console.log(`${a} and ${b} are equal`)
}
//output =>a is less than b
//JavaScript treats strings as sequences of characters, and characters are compared based on their Unicode values. In this case, 'a' comes before 'b' in the Unicode table, so 'a' is considered "less than" 'b'.



//when you put numbers instead of alphabets as strings
//When comparing strings lexicographically:
//The comparison starts from the first character of each string.
//The Unicode value of '3' (the first character of "30") is 51.
//The Unicode value of '4' (the first character of "40") is 52.
//Since 51 (for '3') is less than 52 (for '4'), the condition num1 < num2 evaluates to true.
const num1="30";
const num2="40";
if (num1<num2){
    console.log(`${num1} is less than ${num2}`)
}
else if (a>b){
    console.log(`${num1} is less than ${num2}`) 
}
else {
    console.log(`${num1} and ${num2} are equal`)
}

//output=>30 is less than 40
//EXPLANATION
