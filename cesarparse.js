const fs = require('fs')

const cesarParse = (shift) => {
    console.time('function time')
    const readFilePath = './prideAndPrejudice.txt';

    const alphabetUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const alphabetLowercase = 'abcdefghijklmnopqrstuvwxyz'.split('');

    const prideAndPrejudice = fs.readFileSync(readFilePath, 'utf8').split('');

    const shiftedPride = prideAndPrejudice.map(char => {
        const matchesChar = (element) => element === char;

        switch(char) {
            case (/[a-z]/).test(char):
                const lowerIndex = alphabetLowercase.findIndex(matchesChar)
                return alphabetLowercase[shiftCharacters(lowerIndex, shift)];
            case (/[A-Z]/).test(char):
                const upperIndex = alphabetUppercase.findIndex(matchesChar)
                return alphabetUppercase[shiftCharacters(upperIndex, shift)];
            default:
                return char;
        }
    });

    fs.writeFileSync('./shiftedPrideAndPrejudice.txt', shiftedPride.join(''));

    console.timeEnd('function time')
}

const shiftCharacters =  (index, shift) => {
    const totalShift = index + shift;
    return totalShift <= 26 ? totalShift : totalShift % 26;
}

cesarParse(2);