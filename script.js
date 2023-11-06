// Define target for information to find
let names = ['Jane', 'Larry', 'Opal', 'Perry'];
let lastNames = ['Irving', 'King', 'Mendle', 'Nathan'];
let ages = ['32', '38', '45', '55'];
let occupations = ['drafter', 'pilot', 'police sergeant', 'test car driver'];

let interviewees = [
    {
        firstName: names[0],
        lastName: lastNames[0],
        age: ages[0],
        occupation: occupations[0],
    },
    {
        firstName: names[1],
        lastName: lastNames[1],
        age: ages[1],
        occupation: occupations[1],
    },
    {
        firstName: names[2],
        lastName: lastNames[2],
        age: ages[2],
        occupation: occupations[2],
    },
    {
        firstName: names[3],
        lastName: lastNames[3],
        age: ages[3],
        occupation: occupations[3],
    },
];

// Define statements
let statements = [
    // First round of interviews
    { name: 'Jane', lastName: 'Irving', age: '45', occupation: '' },
    { name: 'King', lastName: '', occupation: 'pilot', age: '' },
    { name: 'Larry', lastName: '', occupation: 'police sergeant', age: '45' },
    { name: 'Nathan', lastName: '', occupation: 'drafter', age: '38' },
    // Second round of interviews
    { name: 'Mendle', lastName: 'Larry', occupation: 'pilot', age: '' },
    { name: 'Jane', lastName: '', occupation: 'pilot', age: '45' },
    { name: 'Opal', lastName: '', occupation: 'test car driver', age: '55' },
    { name: 'Nathan', lastName: '', occupation: 'test car driver', age: '38' },
];

// Iterate through statements
statements.forEach((statement) => {
    let person = interviewees.find(
        (person) =>
            person.firstName === statement.name ||
            person.lastName === statement.lastName
    );
    // Check if person is not undefined
    if (person) {
        if (statement.lastName) person.lastName = statement.lastName;
        if (statement.age) person.age = statement.age;
        if (statement.occupation) person.occupation = statement.occupation;
    }
});

// Log correct information for each person
interviewees.forEach((person, index) => {
    console.log(`Interviewee ${index + 1}:`);
    console.log(`First Name: ${person.firstName}`);
    console.log(`Last Name: ${person.lastName}`);
    console.log(`Age: ${person.age}`);
    console.log(`Occupation: ${person.occupation}`);
    console.log('\n');
});
