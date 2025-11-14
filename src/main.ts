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
