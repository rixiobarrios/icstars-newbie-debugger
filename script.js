// Define arrays for attributes
const firstNames = ['Jane', 'Larry', 'Opal', 'Perry'];
const lastNames = ['Irving', 'King', 'Mendle', 'Nathan'];
const ages = [32, 38, 45, 55];
const occupations = ['drafter', 'pilot', 'police sergeant', 'test car driver'];

// Function to check if a statement is half-right, half-wrong
function isHalfRightHalfWrong(statement, attribute1, attribute2) {
    const words = statement.split(' ');
    return (
        (words.includes(attribute1) && !words.includes(attribute2)) ||
        (!words.includes(attribute1) && words.includes(attribute2))
    );
}

// Iterate through statements to find a matching combination
for (let i = 0; i < firstNames.length; i++) {
    const firstName = firstNames[i];
    for (let j = 0; j < lastNames.length; j++) {
        const lastName = lastNames[j];
        for (let k = 0; k < ages.length; k++) {
            const age = ages[k];
            for (let l = 0; l < occupations.length; l++) {
                const occupation = occupations[l];
                const statement1 = `${firstName}: "My name is ${lastName}, and I'm ${age}."`;
                const statement2 = `${lastName}: "I'm ${firstName} and I drive ${
                    occupation === 'test car driver'
                        ? 'test cars."'
                        : `a ${occupation}."`
                }`;

                // Check if both statements match the half-right, half-wrong condition
                if (
                    isHalfRightHalfWrong(statement1, firstName, lastName) &&
                    isHalfRightHalfWrong(statement2, lastName, firstName)
                ) {
                    console.log(
                        `${firstName}'s real name is ${lastName}, and she is ${age} years old.`
                    );
                    console.log(`${firstName}: "${statement1}"`);
                    console.log(`${firstName}: "${statement2}"\n`);
                }
            }
        }
    }
}
