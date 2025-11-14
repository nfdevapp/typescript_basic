// Schritt 1: Deklariere eine Variable namens ‘age’ vom Typ ‘number’ und weise ihr einen Wert zu.
let age: number = 25;

// Schritt 2: Deklariere eine Variable namens ‘score’ vom Typ ‘number’ und weise ihr den Wert 0 zu.
let score: number = 0;

// Schritt 3: Deklariere eine Konstante namens ‘username’ vom Typ ‘string’ und weise ihr den Wert ‘’ (leerer String) zu.
const username: string = "";

// Schritt 4: Deklariere eine Konstante namens ‘isAdmin’ vom Typ ‘boolean’ und weise ihr den Wert ‘false’ zu.
const isAdmin: boolean = false;

// Schritt 5: Gib alle Werte in der Konsole aus. (“age: 25”)
console.log(`age: ${age}`);
console.log(`score: ${score}`);
console.log(`username: "${username}"`);
console.log(`isAdmin: ${isAdmin}`);

// Schritt 6: Vergleiche die Variable ‘age’ mit der Zahl 18 und gib das Ergebnis in der Konsole aus.
console.log(`age > 18: ${age > 18}`);

// Schritt 7: Vergleiche die Variable ‘score’ mit der Zahl 100 und gib das Ergebnis in der Konsole aus.
console.log(`score == 100: ${score === 100}`);

// Schritt 8: Vergleiche die Variable ‘username’ mit dem String ‘John’ und gib das Ergebnis in der Konsole aus.
console.log(`username == 'John': ${username === 'John'}`);

// Schritt 9: Vergleiche die Variable ‘isAdmin’ mit dem booleschen Wert ‘true’ und gib das Ergebnis in der Konsole aus.
console.log(`isAdmin == true: ${isAdmin === true}`);

//
// Schritt 1: Erstelle ein Objekt namens ‘student’ mit den folgenden Eigenschaften:
let student = {
    name: "Anna",
    age: 22,
    isStudent: true,
    grades: [1.7, 2.3, 1.3]
};

// Schritt 2: Gib das Objekt in der Konsole aus.
console.log("student:", student);

// Schritt 3: Greife auf die Eigenschaft ‘name’ des Objekts zu und gib sie aus.
console.log("Name des Studenten:", student.name);

// Schritt 4: Greife auf die Eigenschaft ‘grades’ des Objekts zu und gib sie aus.
console.log("Noten des Studenten:", student.grades);

// Schritt 5: Erstelle ein Array namens students und füge mindestens 2 Studentenobjekte hinzu.
let students = [
    student,
    {
        name: "Max",
        age: 24,
        isStudent: true,
        grades: [2.0, 1.7, 2.3]
    }
];

// Schritt 6: Gib das Array in der Konsole aus.
console.log("Alle Studenten:", students);

//
// Vorherige Variablen aus dem Beispiel
// let age: number = 25;
// let score: number = 0;
// const username: string = "";
// const isAdmin: boolean = false;

// Schritt 1: Schreibe eine ‘for’-Schleife, die die Zahlen von 1 bis ‘age’ ausgibt.
console.log("Zahlen von 1 bis age:");
for (let i = 1; i <= age; i++) {
    console.log(i);
}

// Schritt 2: Verwende eine ‘if-else’-Anweisung, um zu überprüfen, ob ‘age’ größer als 18 ist.
if (age > 18) {
    console.log("Age is greater than 18.");
} else {
    console.log("Age is 18 or less.");
}

// Schritt 3: Verwende eine ‘if’-Anweisung, um zu überprüfen, ob ‘score’ einen Wert hat.
if (score !== 0) {
    console.log("Score is available.");
}

// Schritt 4: Verwende eine ‘if-else’-Anweisung, um zu überprüfen, ob ‘score’ als ‘truthy’ bewertet wird.
if (score) {
    console.log("Score is evaluated as truthy.");
} else {
    console.log("Score is evaluated as falsy.");
}

// Schritt 5: Verwende eine ‘if’-Anweisung, um zu überprüfen, ob ‘username’ einen Wert hat.
if (username !== "") {
    console.log("Username is available.");
}

// Schritt 6: Verwende eine ‘if-else’-Anweisung, um zu überprüfen, ob ‘username’ als ‘falsy’ bewertet wird.
if (username) {
    console.log("Username is evaluated as truthy.");
} else {
    console.log("Username is evaluated as falsy.");
}

// Schritt 7: Verwende eine ‘if-else’-Anweisung, um zu überprüfen, ob ‘isAdmin’ als ‘truthy’ bewertet wird.
if (isAdmin) {
    console.log("isAdmin is evaluated as truthy.");
} else {
    console.log("isAdmin is evaluated as falsy.");
}

// Schritt 8: Verwende eine ‘if’-Anweisung, um zu überprüfen, ob ‘isAdmin’ ‘false’ ist.
if (isAdmin === false) {
    console.log("isAdmin is false.");
}


// const counter = undefined;
// const newCounter = counter + 1;
// console.log(newCounter);

const counter = 0;
const newCounter = counter + 1;
console.log(newCounter);

let age1 = 0;
console.log(typeof age1); // number

age1 = null;
console.log(typeof age1); // object

age1 = undefined;
console.log(typeof age1); // undefined

age1 = "any"; // "any" gibt es in JS nicht, nur als String
console.log(typeof age1); // string

age1 = "Hallo";
console.log(typeof age1); // string

age1 = 42;
console.log(typeof age1); // number

// Aufgabe 1 – Boolesche Werte

const boolTrue = true;
console.log(boolTrue, "→", Boolean(boolTrue)); // true → true

const boolFalse = false;
console.log(boolFalse, "→", Boolean(boolFalse)); // false → false

// Aufgabe 2 – Ganzzahlwerte

const one = 1;
console.log(one, "→", Boolean(one)); // 1 → true

const zero = 0;
console.log(zero, "→", Boolean(zero)); // 0 → false

const minusOne = -1;
console.log(minusOne, "→", Boolean(minusOne)); // -1 → true


// Aufgabe 3 – Strings

const strHi = "hi";
console.log(`"${strHi}"`, "→", Boolean(strHi)); // "hi" → true

const strEmpty = "";
console.log(`"${strEmpty}"`, "→", Boolean(strEmpty)); // "" → false

const strSpace = " ";
console.log(`"${strSpace}"`, "→", Boolean(strSpace)); // " " → true

const strZero = "0";
console.log(`"${strZero}"`, "→", Boolean(strZero)); // "0" → true

const strFalse = "false";
console.log(`"${strFalse}"`, "→", Boolean(strFalse)); // "false" → true


// Aufgabe 4 – Arrays

const arrEmpty = [];
console.log(arrEmpty, "→", Boolean(arrEmpty)); // [] → true

const arrOne = [1];
console.log(arrOne, "→", Boolean(arrOne)); // [1] → true

const arrZero = [0];
console.log(arrZero, "→", Boolean(arrZero)); // [0] → true

const arrFalse = [false];
console.log(arrFalse, "→", Boolean(arrFalse)); // [false] → true

// Aufgabe 5 – Objekte

const objEmpty = {};
console.log(objEmpty, "→", Boolean(objEmpty)); // {} → true

const objPerson = { name: "John" };
console.log(objPerson, "→", Boolean(objPerson)); // {name: "John"} → true


//Weihnachtsbaum
function christmasTree(n) {
    for (let i = 1; i <= n; i++) {
        const spaces = " ".repeat(n - i);
        const stars = "*".repeat(2 * i - 1);
        console.log(spaces + stars);
    }
}

christmasTree(5);

function addNumbers(a: number, b: number): number {
    return a + b;
}

const addNumbersArrow = (a: number, b: number): number => {
    return a + b;
};

const addNumbersArrow2 = (a: number, b: number): number => a + b;

//Zahlen verdoppeln
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8, 10]

// Wörter mit mehr als 5 Buchstaben
const words = ["Hallo", "Programmieren", "Hi", "Javascript", "Haus"];

const longWords = words.filter(word => word.length > 5);

console.log(longWords);
// ["Programmieren", "Javascript"]

// Summe berechnen
const nums = [5, 10, 20, 15];

const sum = nums.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // 50



// prüfen, ob eine Zahl > 10 ist
const values = [2, 4, 6, 8, 12];

const hasGreaterThanTen = values.some(num => num > 10);

console.log(hasGreaterThanTen); // true

//Bonus
const list = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];

const result = list
    // 1. Sortieren in absteigender Reihenfolge
    .slice().sort((a, b) => b - a)

    // 2. Quadrieren
    .map(num => num * num)

    // 3. Die 4 höchsten und 2 niedrigsten entfernen
    .slice(4, -2)

    // 4. Alle Zahlen entfernen, die durch 4 teilbar sind
    .filter(num => num % 4 !== 0)

    // 5. Alle Zahlen addieren
    .reduce((sum, num) => sum + num, 0);

console.log(result); // 231187

