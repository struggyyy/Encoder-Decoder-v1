//SZYFR CEZAR
const alfabet = 'aąbcćdeęfghijklłmnńoóprsśtuwyzźżAĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ';

function modulo(a, b) {
    return ((a % b) + b) % b;
}

function szyfrCezara(tekst, przesuniecie) {
    let zaszyfrowanyTekst = '';

    for (let i = 0; i < tekst.length; i++) {
        const litera = tekst[i];
        const indeks = alfabet.indexOf(litera);

        if (indeks === -1) {
            zaszyfrowanyTekst += litera;
        } else {
            const nowyIndeks = modulo((indeks + przesuniecie), alfabet.length);
            zaszyfrowanyTekst += alfabet[nowyIndeks];
        }
    }

    return zaszyfrowanyTekst;
}

function encodeCezar() {
    const tekst = document.getElementById('inputText').value;
    const przesuniecie = parseInt(document.getElementById('cezarShift').value) || 3;
    const zaszyfrowanyTekst = szyfrCezara(tekst, przesuniecie);
    document.getElementById('outputText').value = zaszyfrowanyTekst;
}

function decodeCezar() {
    const tekst = document.getElementById('inputText').value;
    const przesuniecie = parseInt(document.getElementById('cezarShift').value) || 3;
    const odszyfrowanyTekst = szyfrCezara(tekst, -przesuniecie);
    document.getElementById('outputText').value = odszyfrowanyTekst;
}

//SZYFR POLIBIUSZ
function encodePolibiusz() {
    let inputText = document.getElementById("inputText").value.toUpperCase();
    let polibiuszMap = {
        'A': '11', 'Ą': '12', 'B': '13', 'C': '14', 'Ć': '15',
        'D': '21', 'E': '22', 'Ę': '23', 'F': '24', 'G': '25',
        'H': '31', 'I': '32', 'J': '33', 'K': '34', 'L': '35',
        'Ł': '41', 'M': '42', 'N': '43', 'Ń': '44', 'O': '45',
        'Ó': '51', 'P': '52', 'Q': '53', 'R': '54', 'S': '55',
        'Ś': '61', 'T': '62', 'U': '63', 'V': '64', 'W': '65',
        'X': '71', 'Y': '72', 'Z': '73', 'Ź': '74', 'Ż': '75',
        ' ': '88',
    };
    let result = "";
    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];
        if (polibiuszMap[char]) {
            result += polibiuszMap[char];
        } else {
            result += char;
        }
    }
    document.getElementById("outputText").value = result;
}

function decodePolibiusz() {
    let inputText = document.getElementById("inputText").value;
    let polibiuszMap = {
        '11': 'A', '12': 'Ą', '13': 'B', '14': 'C', '15': 'Ć',
        '21': 'D', '22': 'E', '23': 'Ę', '24': 'F', '25': 'G',
        '31': 'H', '32': 'I', '33': 'J', '34': 'K', '35': 'L',
        '41': 'Ł', '42': 'M', '43': 'N', '44': 'Ń', '45': 'O',
        '51': 'Ó', '52': 'P', '53': 'Q', '54': 'R', '55': 'S',
        '61': 'Ś', '62': 'T', '63': 'U', '64': 'V', '65': 'W',
        '71': 'X', '72': 'Y', '73': 'Z', '74': 'Ź', '75': 'Ż',
        '88': ' ',
    };
    let result = "";
    for (let i = 0; i < inputText.length; i += 2) {
        let pair = inputText.substring(i, i + 2);
        if (polibiuszMap[pair]) {
            result += polibiuszMap[pair];
        } else if (pair.trim() !== '') {
            result += pair; 
        }
    }
    document.getElementById("outputText").value = result;
}

//SZYFR HOMOFONICZNY
function encodeHomofoniczny() {
    let inputText = document.getElementById("inputText").value.toUpperCase();
    let homophonicMap = {
        'A': ['11', '21', '31'],
        'Ą': ['12', '22', '32'],
        'B': ['13', '23', '33'],
        'C': ['14', '24', '34'],
        'Ć': ['15', '25', '35'],
        'D': ['16', '26', '36'],
        'E': ['17', '27', '37'],
        'Ę': ['18', '28', '38'],
        'F': ['19', '29', '39'],
        'G': ['110', '120', '130'],
        'H': ['111', '121', '131'],
        'I': ['42', '52', '62'],
        'J': ['43', '53', '63'],
        'K': ['44', '54', '64'],
        'L': ['45', '55', '65'],
        'Ł': ['46', '56', '66'],
        'M': ['47', '57', '67'],
        'N': ['48', '58', '68'],
        'Ń': ['49', '59', '69'],
        'O': ['40', '50', '60'],
        'Ó': ['71', '81', '91'],
        'P': ['72', '82', '92'],
        'Q': ['73', '83', '93'],
        'R': ['74', '84', '94'],
        'S': ['75', '85', '95'],
        'Ś': ['76', '86', '96'],
        'T': ['77', '87', '97'],
        'U': ['78', '88', '98'],
        'V': ['79', '89', '99'],
        'W': ['70', '80', '90'],
        'X': ['01', '02', '03'],
        'Y': ['04', '05', '06'],
        'Z': ['07', '08', '09'],
        'Ż': ['00', '10', '20'],
        'Ź': ['31', '41', '51'],
    };
    let result = "";
    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];
        if (homophonicMap[char]) {
            let randomIndex = Math.floor(Math.random() * homophonicMap[char].length);
            result += homophonicMap[char][randomIndex] + ' ';
        } else if (char !== ' ') {
            result += char + ' ';
        }
    }
    document.getElementById("outputText").value = result.trim();
}

function decodeHomofoniczny() {
    let inputText = document.getElementById("inputText").value;
    let homophonicMap = {
        '11': 'A', '21': 'A', '31': 'A',
        '12': 'Ą', '22': 'Ą', '32': 'Ą',
        '13': 'B', '23': 'B', '33': 'B',
        '14': 'C', '24': 'C', '34': 'C',
        '15': 'Ć', '25': 'Ć', '35': 'Ć',
        '16': 'D', '26': 'D', '36': 'D',
        '17': 'E', '27': 'E', '37': 'E',
        '18': 'Ę', '28': 'Ę', '38': 'Ę',
        '19': 'F', '29': 'F', '39': 'F',
        '110': 'G', '120': 'G', '130': 'G',
        '111': 'H', '121': 'H', '131': 'H',
        '42': 'I', '52': 'I', '62': 'I',
        '43': 'J', '53': 'J', '63': 'J',
        '44': 'K', '54': 'K', '64': 'K',
        '45': 'L', '55': 'L', '65': 'L',
        '46': 'Ł', '56': 'Ł', '66': 'Ł',
        '47': 'M', '57': 'M', '67': 'M',
        '48': 'N', '58': 'N', '68': 'N',
        '49': 'Ń', '59': 'Ń', '69': 'Ń',
        '40': 'O', '50': 'O', '60': 'O',
        '71': 'Ó', '81': 'Ó', '91': 'Ó',
        '72': 'P', '82': 'P', '92': 'P',
        '73': 'Q', '83': 'Q', '93': 'Q',
        '74': 'R', '84': 'R', '94': 'R',
        '75': 'S', '85': 'S', '95': 'S',
        '76': 'Ś', '86': 'Ś', '96': 'Ś',
        '77': 'T', '87': 'T', '97': 'T',
        '78': 'U', '88': 'U', '98': 'U',
        '79': 'V', '89': 'V', '99': 'V',
        '70': 'W', '80': 'W', '90': 'W',
        '01': 'X', '02': 'X', '03': 'X',
        '04': 'Y', '05': 'Y', '06': 'Y',
        '07': 'Z', '08': 'Z', '09': 'Z',
        '00': 'Ż', '10': 'Ż', '20': 'Ż',
        '31': 'Ź', '41': 'Ź', '51': 'Ź',
    };
    let result = "";
    let tokens = inputText.split(' ');
    for (let i = 0; i < tokens.length; i++) {
        if (homophonicMap[tokens[i]]) {
            result += homophonicMap[tokens[i]];
        } else {
            result += tokens[i];
        }
    }
    document.getElementById("outputText").value = result;
}



//SZYFR TRITEMIUSZ
function modulo(n, m) {
    return ((n % m) + m) % m;
}

function encodeTritemiusz() {
    let inputText = document.getElementById("inputText").value.toUpperCase();
    let result = "";
    let key = 5;
    let alphabet = 'AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŹŻ';
    for (let i = 0; i < inputText.length; i++) {
        let index = alphabet.indexOf(inputText[i]);
        if (index !== -1) {
            result += alphabet[modulo((index + key), alphabet.length)];
            key++;
        } else {
            result += inputText[i];
        }
    }
    document.getElementById("outputText").value = result;
}

function decodeTritemiusz() {
    let inputText = document.getElementById("inputText").value.toUpperCase();
    let result = "";
    let key = 5;
    let alphabet = 'AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŹŻ';
    for (let i = 0; i < inputText.length; i++) {
        let index = alphabet.indexOf(inputText[i]);
        if (index !== -1) {
            result += alphabet[modulo((index - key + alphabet.length), alphabet.length)];
            key++;
        } else {
            result += inputText[i];
        }
    }
    document.getElementById("outputText").value = result;
}


//SZYFR VIGENER
function encodeVigener() {
    let inputText = document.getElementById("inputText").value;
    let key = document.getElementById("vigenerKey").value.toUpperCase();
    if (!key) {
        alert("Wprowadź klucz dla szyfru Vigenera.");
        return;
    }
    let result = "";
    let keyIndex = 0;
    let alphabet = 'AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŹŻ';

    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i].toUpperCase();
        let charIndex = alphabet.indexOf(char);
        if (charIndex !== -1) {
            let keyChar = key[keyIndex % key.length];
            let keyCharIndex = alphabet.indexOf(keyChar);
            result += alphabet[(charIndex + keyCharIndex) % alphabet.length];
            keyIndex++;
        } else {
            result += inputText[i];
        }
    }
    document.getElementById("outputText").value = result;
}

function decodeVigener() {
    let inputText = document.getElementById("inputText").value;
    let key = document.getElementById("vigenerKey").value.toUpperCase();
    if (!key) {
        alert("Wprowadź klucz dla szyfru Vigenera.");
        return;
    }
    let result = "";
    let keyIndex = 0;
    let alphabet = 'AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŹŻ';

    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i].toUpperCase();
        let charIndex = alphabet.indexOf(char);
        if (charIndex !== -1) {
            let keyChar = key[keyIndex % key.length];
            let keyCharIndex = alphabet.indexOf(keyChar);
            result += alphabet[(charIndex - keyCharIndex + alphabet.length) % alphabet.length];
            keyIndex++;
        } else {
            result += inputText[i];
        }
    }
    document.getElementById("outputText").value = result;
}


//SZYFR PLAYFAIR
function generatePlayfairMatrix(key) {
    let alphabet = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŹŻ";
    let keyWithoutJ = key.replace(/J/g, "I").replace(/j/g, "i");
    let keySet = new Set(keyWithoutJ);
    let remainingLetters = alphabet.split("").filter(letter => !keySet.has(letter));

    let matrix = [];
    let keyIndex = 0;

    for (let i = 0; i < 6; i++) {
        let row = [];
        for (let j = 0; j < 6; j++) {
            if (keyIndex < keyWithoutJ.length) {
                row.push(keyWithoutJ[keyIndex]);
                keyIndex++;
            } else {
                row.push(remainingLetters.shift());
            }
        }
        matrix.push(row);
    }

    return matrix;
}

function encodePlayfair() {
    let inputText = document.getElementById("inputText").value.toUpperCase();
    let key = document.getElementById("playfairKey").value.toUpperCase().replace(/J/g, "I").replace(/j/g, "i");

    if (key.length === 0) {
        alert("Wprowadź klucz Playfaira.");
        return;
    }

    let matrix = generatePlayfairMatrix(key);
    let result = "";

    for (let i = 0; i < inputText.length; i += 2) {
        let pair = inputText.substring(i, i + 2);
        if (pair.length === 1) {
            pair += 'Q';
        }

        let [firstLetterRow, firstLetterCol] = findLetterInMatrix(matrix, pair[0]) || [];
        let [secondLetterRow, secondLetterCol] = findLetterInMatrix(matrix, pair[1]) || [];

        if (firstLetterRow !== undefined && secondLetterRow !== undefined) {
            if (firstLetterRow === secondLetterRow) {
                result += matrix[firstLetterRow][(firstLetterCol + 1) % 6];
                result += matrix[secondLetterRow][(secondLetterCol + 1) % 6];
            } else if (firstLetterCol === secondLetterCol) {
                result += matrix[(firstLetterRow + 1) % 6][firstLetterCol];
                result += matrix[(secondLetterRow + 1) % 6][secondLetterCol];
            } else {
                result += matrix[firstLetterRow][secondLetterCol];
                result += matrix[secondLetterRow][firstLetterCol];
            }
        } else {
            result += pair[0];
            result += pair[1];
        }
    }

    document.getElementById("outputText").value = result;
}


function decodePlayfair() {
    let inputText = document.getElementById("inputText").value.toUpperCase();
    let key = document.getElementById("playfairKey").value.toUpperCase().replace(/J/g, "I").replace(/j/g, "i");

    if (key.length === 0) {
        alert("Wprowadź klucz Playfaira.");
        return;
    }

    let matrix = generatePlayfairMatrix(key);
    let result = "";

    for (let i = 0; i < inputText.length; i += 2) {
        let pair = inputText.substring(i, i + 2);
        if (pair.length === 1) {
            pair += 'Q';
        }

        let [firstLetterRow, firstLetterCol] = findLetterInMatrix(matrix, pair[0]) || [];
        let [secondLetterRow, secondLetterCol] = findLetterInMatrix(matrix, pair[1]) || [];

        if (firstLetterRow !== undefined && secondLetterRow !== undefined) {
            if (firstLetterRow === secondLetterRow) {
                result += matrix[firstLetterRow][(firstLetterCol - 1 + 6) % 6];
                result += matrix[secondLetterRow][(secondLetterCol - 1 + 6) % 6];
            } else if (firstLetterCol === secondLetterCol) {
                result += matrix[(firstLetterRow - 1 + 6) % 6][firstLetterCol];
                result += matrix[(secondLetterRow - 1 + 6) % 6][secondLetterCol];
            } else {
                result += matrix[firstLetterRow][secondLetterCol];
                result += matrix[secondLetterRow][firstLetterCol];
            }
        } else {
            result += pair[0];
            result += pair[1];
        }
    }

    document.getElementById("outputText").value = result;
}


function findLetterInMatrix(matrix, letter) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === letter) {
                return [i, j];
            }
        }
    }
}
