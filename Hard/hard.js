// HARD: Given the information below for Tom and Jerry. 
// Tom - height:  9in   mass: 8 g
// Jerry - height: 10in mass: 45 g
// Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
// BMI = mass / height ^2 = mass / (height * height)
// Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).

var patientsInfo = {
    patient1Name: 'Tom',
    patient1HeightInInches: 9,
    patient1MassInGrams: 8,

    patient2Name: 'Jerry',
    patient2HeightInInches: 10,
    patient2MassInGrams: 45,
};

var p1BMI = patientsInfo.patient1MassInGrams / (patientsInfo.patient1HeightInInches * patientsInfo.patient1HeightInInches);
var p2BMI = patientsInfo.patient2MassInGrams / (patientsInfo.patient2HeightInInches * patientsInfo.patient2HeightInInches);
console.log(`Tom's BMI is ${p1BMI}. Jerry's BMI is ${p2BMI}.`);

if (p1BMI >= p2BMI){
    console.log(`Tom's BMI is higher than Jerry's by ${p1BMI-p2BMI}`);
} else if (p2BMI >= p1BMI){
    console.log(`Jerry's BMI is higher than Tom's by ${p2BMI-p1BMI}`);
}