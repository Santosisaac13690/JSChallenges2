// EASY: Create an array of students holding their last name, first name, and age with 3 students. To validate, please log a greeting with the first name, last name and age of the 2nd student. The output should look like "Hello, my name is John Doe and I'm 19 years old."

var attendanceSheet = [
    ["John", "Doe", 7],
    ["Halo", "Love", 8],
    ["Laura", "Hunter", 6],
];

function getStudent(attendanceSheet, index) {
    var student = attendanceSheet[index];
    return `I'm ${student[0]} ${student[1]} and I'm ${student[2]} years old`;
}

console.log(getStudent(attendanceSheet, [1]));