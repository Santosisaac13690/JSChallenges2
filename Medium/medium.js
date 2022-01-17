// MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. For example: if the user enters the number 3, then it should return the month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).

function getMonthName(num){
    var monthIndex = num - 1;
    var months = ["January", "February", "March", "April", "May", "June", "July", "August","September", "October", "November", "December"];
    return months[monthIndex];
}

console.log(getMonthName(3));