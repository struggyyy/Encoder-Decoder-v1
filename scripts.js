//SZYFR CEZARA
const alfabet = 'aąbcćdeęfghijklłmnńoóprsśtuwyzźżAĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ';

function szyfrCezara(tekst, przesuniecie) {
    let zaszyfrowanyTekst = '';

    for (let i = 0; i < tekst.length; i++) {
        const litera = tekst[i];
        const indeks = alfabet.indexOf(litera);

        if (indeks === -1) {
            zaszyfrowanyTekst += litera;
        } else {
            const nowyIndeks = (indeks + przesuniecie) % alfabet.length;
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
};

//SZYFR POLIBIUSZA
function encodePolibiusz() {
    let inputText = document.getElementById("inputText").value.toUpperCase();
    let polibiuszMap = {
        'A': '11', 'B': '12', 'C': '13', 'D': '14', 'E': '15',
        'F': '21', 'G': '22', 'H': '23', 'I': '24', 'J': '25',
        'K': '31', 'L': '32', 'M': '33', 'N': '34', 'O': '35',
        'P': '41', 'Q': '42', 'R': '43', 'S': '44', 'T': '45',
        'U': '51', 'V': '52', 'W': '53', 'X': '54', 'Y': '55',
        'Z': '61',
    };
    let result = "";
    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];
        if (polibiuszMap[char]) {
            result += polibiuszMap[char];
        } else if (char !== ' ') {
            result += char;
        }
    }
    document.getElementById("outputText").value = result;
}

function decodePolibiusz() {
    let inputText = document.getElementById("inputText").value;
    let polibiuszMap = {
        '11': 'A', '12': 'B', '13': 'C', '14': 'D', '15': 'E',
        '21': 'F', '22': 'G', '23': 'H', '24': 'I', '25': 'J',
        '31': 'K', '32': 'L', '33': 'M', '34': 'N', '35': 'O',
        '41': 'P', '42': 'Q', '43': 'R', '44': 'S', '45': 'T',
        '51': 'U', '52': 'V', '53': 'W', '54': 'X', '55': 'Y',
        '61': 'Z',
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
        'B': ['12', '22', '32'],
        'C': ['13', '23', '33'],
        'D': ['14', '24', '34'],
        'E': ['15', '25', '35'],
        'F': ['16', '26', '36'],
        'G': ['17', '27', '37'],
        'H': ['18', '28', '38'],
        'I': ['19', '29', '39'],
        'J': ['10', '20', '30'],
        'K': ['41', '51', '61'],
        'L': ['42', '52', '62'],
        'M': ['43', '53', '63'],
        'N': ['44', '54', '64'],
        'O': ['45', '55', '65'],
        'P': ['46', '56', '66'],
        'Q': ['47', '57', '67'],
        'R': ['48', '58', '68'],
        'S': ['49', '59', '69'],
        'T': ['40', '50', '60'],
        'U': ['71', '81', '91'],
        'V': ['72', '82', '92'],
        'W': ['73', '83', '93'],
        'X': ['74', '84', '94'],
        'Y': ['75', '85', '95'],
        'Z': ['76', '86', '96'],
    };
    let result = "";
    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];
        if (homophonicMap[char]) {
            let randomIndex = Math.floor(Math.random() * homophonicMap[char].length);
            result += homophonicMap[char][randomIndex] + ' ';
        } else {
            result += char + ' ';
        }
    }
    document.getElementById("outputText").value = result.trim();
}

function decodeHomofoniczny() {
    let inputText = document.getElementById("inputText").value;
    let homophonicMap = {
        '11': 'A', '21': 'A', '31': 'A',
        '12': 'B', '22': 'B', '32': 'B',
        '13': 'C', '23': 'C', '33': 'C',
        '14': 'D', '24': 'D', '34': 'D',
        '15': 'E', '25': 'E', '35': 'E',
        '16': 'F', '26': 'F', '36': 'F',
        '17': 'G', '27': 'G', '37': 'G',
        '18': 'H', '28': 'H', '38': 'H',
        '19': 'I', '29': 'I', '39': 'I',
        '10': 'J', '20': 'J', '30': 'J',
        '41': 'K', '51': 'K', '61': 'K',
        '42': 'L', '52': 'L', '62': 'L',
        '43': 'M', '53': 'M', '63': 'M',
        '44': 'N', '54': 'N', '64': 'N',
        '45': 'O', '55': 'O', '65': 'O',
        '46': 'P', '56': 'P', '66': 'P',
        '47': 'Q', '57': 'Q', '67': 'Q',
        '48': 'R', '58': 'R', '68': 'R',
        '49': 'S', '59': 'S', '69': 'S',
        '40': 'T', '50': 'T', '60': 'T',
        '71': 'U', '81': 'U', '91': 'U',
        '72': 'V', '82': 'V', '92': 'V',
        '73': 'W', '83': 'W', '93': 'W',
        '74': 'X', '84': 'X', '94': 'X',
        '75': 'Y', '85': 'Y', '95': 'Y',
        '76': 'Z', '86': 'Z', '96': 'Z',
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
function encodeTritemiusz() {
    let inputText = document.getElementById("inputText").value.toUpperCase();
    let result = "";
    let key = 5; // Przesunięcie dla szyfru Tritemiusza
    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode((charCode + key - 65) % 26 + 65);
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
    let key = 5; // Przesunięcie dla szyfru Tritemiusza
    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode((charCode - key - 65 + 26) % 26 + 65);
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

    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) { // Uppercase letters
            result += String.fromCharCode((charCode - 65 + key.charCodeAt(keyIndex) - 65) % 26 + 65);
            keyIndex = (keyIndex + 1) % key.length;
        } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
            result += String.fromCharCode((charCode - 97 + key.charCodeAt(keyIndex) - 97) % 26 + 97);
            keyIndex = (keyIndex + 1) % key.length;
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

    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) { // Uppercase letters
            result += String.fromCharCode((charCode - 65 - (key.charCodeAt(keyIndex) - 65) + 26) % 26 + 65);
            keyIndex = (keyIndex + 1) % key.length;
        } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
            result += String.fromCharCode((charCode - 97 - (key.charCodeAt(keyIndex) - 97) + 26) % 26 + 97);
            keyIndex = (keyIndex + 1) % key.length;
        } else {
            result += inputText[i];
        }
    }
    document.getElementById("outputText").value = result;
}

//SZYFR PLAYFAIRA
// Funkcja pomocnicza do generowania macierzy Playfaira
function generatePlayfairMatrix(key) {
    let alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
    let keyWithoutJ = key.replace(/J/g, "I");
    let keySet = new Set(keyWithoutJ);
    let remainingLetters = alphabet.split("").filter(letter => !keySet.has(letter));

    let matrix = [];
    let keyIndex = 0;

    for (let i = 0; i < 5; i++) {
        let row = [];
        for (let j = 0; j < 5; j++) {
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
    let key = document.getElementById("playfairKey").value.toUpperCase().replace(/J/g, "I");

    if (key.length === 0) {
        alert("Wprowadź klucz Playfaira.");
        return;
    }

    let matrix = generatePlayfairMatrix(key);
    let result = "";

    // Implementuj szyfrację Playfaira
    for (let i = 0; i < inputText.length; i += 2) {
        let pair = inputText.substring(i, i + 2);
        if (pair.length === 1) {
            pair += 'Q'; // Dodaj 'Q' dla pojedynczej litery
        }

        let [firstLetterRow, firstLetterCol] = findLetterInMatrix(matrix, pair[0]);
        let [secondLetterRow, secondLetterCol] = findLetterInMatrix(matrix, pair[1]);

        if (firstLetterRow === secondLetterRow) {
            result += matrix[firstLetterRow][(firstLetterCol + 1) % 5];
            result += matrix[secondLetterRow][(secondLetterCol + 1) % 5];
        } else if (firstLetterCol === secondLetterCol) {
            result += matrix[(firstLetterRow + 1) % 5][firstLetterCol];
            result += matrix[(secondLetterRow + 1) % 5][secondLetterCol];
        } else {
            result += matrix[firstLetterRow][secondLetterCol];
            result += matrix[secondLetterRow][firstLetterCol];
        }
    }

    document.getElementById("outputText").value = result;
}
/* //Rozwiązanie ignorujące pary znaków o tej samej wartości lub kolumnie = brak dodawania ostatiej litery

function encodePlayfair() {
    let inputText = document.getElementById("inputText").value.toUpperCase();
    let key = document.getElementById("playfairKey").value.toUpperCase().replace(/J/g, "I");

    if (key.length === 0) {
        alert("Wprowadź klucz Playfaira.");
        return;
    }

    let matrix = generatePlayfairMatrix(key);
    let result = "";

    // Implementuj szyfrację Playfaira
    for (let i = 0; i < inputText.length; i += 2) {
        let pair = inputText.substring(i, i + 2);
        if (pair.length === 1) {
            pair += 'Q'; // Dodaj 'Q' dla pojedynczej litery
        }

        let [firstLetterRow, firstLetterCol] = findLetterInMatrix(matrix, pair[0]);
        let [secondLetterRow, secondLetterCol] = findLetterInMatrix(matrix, pair[1]);

        // Sprawdź, czy pary są takie same lub w tej samej kolumnie
        if (pair[0] !== pair[1] && firstLetterCol !== secondLetterCol) {
            if (firstLetterRow === secondLetterRow) {
                result += matrix[firstLetterRow][(firstLetterCol + 1) % 5];
                result += matrix[secondLetterRow][(secondLetterCol + 1) % 5];
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
*/

function decodePlayfair() {
    let inputText = document.getElementById("inputText").value.toUpperCase();
    let key = document.getElementById("playfairKey").value.toUpperCase().replace(/J/g, "I");

    if (key.length === 0) {
        alert("Wprowadź klucz Playfaira.");
        return;
    }

    let matrix = generatePlayfairMatrix(key);
    let result = "";

    // Implementuj deszyfrację Playfaira
    for (let i = 0; i < inputText.length; i += 2) {
        let pair = inputText.substring(i, i + 2);
        if (pair.length === 1) {
            pair += 'Q'; // Dodaj 'Q' dla pojedynczej litery
        }

        let [firstLetterRow, firstLetterCol] = findLetterInMatrix(matrix, pair[0]);
        let [secondLetterRow, secondLetterCol] = findLetterInMatrix(matrix, pair[1]);

        if (firstLetterRow === secondLetterRow) {
            result += matrix[firstLetterRow][(firstLetterCol - 1 + 5) % 5];
            result += matrix[secondLetterRow][(secondLetterCol - 1 + 5) % 5];
        } else if (firstLetterCol === secondLetterCol) {
            result += matrix[(firstLetterRow - 1 + 5) % 5][firstLetterCol];
            result += matrix[(secondLetterRow - 1 + 5) % 5][secondLetterCol];
        } else {
            result += matrix[firstLetterRow][secondLetterCol];
            result += matrix[secondLetterRow][firstLetterCol];
        }
    }

    document.getElementById("outputText").value = result;
}

// Funkcja pomocnicza do znajdowania litery w macierzy Playfaira
function findLetterInMatrix(matrix, letter) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === letter) {
                return [i, j];
            }
        }
    }
}
