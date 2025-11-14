// Schritt 1: Student Typ (nur Noten 1–6)
type Grade = 1 | 2 | 3 | 4 | 5 | 6;

type Student = {
    firstName: string;
    lastName: string;
    age: number;
    grades: Grade[];
};

// Funktion: Einen Studenten ausgeben
function printStudent(student: Student): void {
    const nameLine = `${student.firstName} ${student.lastName} (${student.age})`;
    console.log(nameLine);
    console.log("=".repeat(30));

    console.log("Grades:", student.grades.join(","));
    console.log(""); // leere Zeile für Übersicht
}

// Beispielstudent
const student1: Student = {
    firstName: "Anton",
    lastName: "Meier",
    age: 17,
    grades: [1, 4, 3, 1, 3, 2, 1, 2],
};

printStudent(student1);

// Schritt 2: Noten erlauben jetzt auch undefined
type Grade2 = 1 | 2 | 3 | 4 | 5 | 6 | undefined;

type Student2 = {
    firstName: string;
    lastName: string;
    age: number;
    grades: Grade2[];
};

// Neuer Ausgabe-Code: undefined → *
function printStudent2(student: Student2): void {
    const nameLine = `${student.firstName} ${student.lastName} (${student.age})`;
    console.log(nameLine);
    console.log("=".repeat(30));

    const gradeOutput = student.grades
        .map(g => (g === undefined ? "*" : g.toString()))
        .join(",");

    console.log("Grades:", gradeOutput);
    console.log("");
}

// Beispielstudent
const student2: Student2 = {
    firstName: "Anton",
    lastName: "Meier",
    age: 17,
    grades: [1, 2, undefined, 3, 1, 4, undefined, 5],
};

printStudent2(student2);


// Liste mehrerer Studenten
const allStudents: Student2[] = [
    {
        firstName: "Anton",
        lastName: "Meier",
        age: 16,
        grades: [1, 4, 3, 1, 1, undefined, 1, 2],
    },
    {
        firstName: "Berta",
        lastName: "Müller",
        age: 17,
        grades: [1, undefined, 1],
    },
    {
        firstName: "Cäsar",
        lastName: "Schmidt",
        age: 17,
        grades: [2, 1, undefined, 3, 2, 4, 5],
    }
];

// Funktion: Alle Studenten ausgeben
function printAllStudents(students: Student2[]): void {
    for (const s of students) {
        printStudent2(s);
    }
}

// Aufruf
printAllStudents(allStudents);


type NumericGrade = 1 | 2 | 3 | 4 | 5 | 6;
type LetterGrade = "A" | "B" | "C" | "D" | "E" | "F";

type Grade3 = NumericGrade | LetterGrade | undefined;

type SubjectGrades = {
    [subject: string]: Grade3[];
};

type Student3 = {
    firstName: string;
    lastName: string;
    age: number;
    grades: SubjectGrades; // jede Note ist pro Fach gespeichert
};

// Funktion zum Ausgeben eines Studenten
function printStudent3(student: Student3): void {
    const nameLine = `${student.firstName} ${student.lastName} (${student.age})`;
    console.log(nameLine);
    console.log("=".repeat(nameLine.length));

    console.log("Grades:");
    for (const subject in student.grades) {
        const grades = student.grades[subject]
            .map(g => (g === undefined ? "*" : g))
            .join(",");
        console.log(`${subject}: ${grades}`);
    }

    console.log(""); // Leerzeile für Übersicht
}

// Beispiel-Studenten
const student1: Student3 = {
    firstName: "Anton",
    lastName: "Meier",
    age: 17,
    grades: {
        Math: [2, 3, 1, undefined],
        English: ["A", "B", "F"],
        Sports: [1, 2, undefined]
    }
};

const student2: Student3 = {
    firstName: "Berta",
    lastName: "Müller",
    age: 17,
    grades: {
        Math: [1, undefined, 1],
        Art: ["A", 3, 2]
    }
};

const student3: Student3 = {
    firstName: "Cäsar",
    lastName: "Schmidt",
    age: 17,
    grades: {
        Math: [2, 1, undefined, 3, 2],
        Science: [4, 5]
    }
};

// Liste aller Studenten ausgeben
const allStudents: Student3[] = [student1, student2, student3];

function printAllStudents3(students: Student3[]): void {
    for (const s of students) {
        printStudent3(s);
    }
}

printAllStudents3(allStudents);

// Optional: Durchschnittsnote berechnen
function calculateAverage(student: Student3): number | null {
    let sum = 0;
    let count = 0;

    for (const subject in student.grades) {
        for (const grade of student.grades[subject]) {
            if (typeof grade === "number") {
                sum += grade;
                count++;
            }
        }
    }

    return count > 0 ? sum / count : null;
}

// Beispiel:
console.log("Average for Anton:", calculateAverage(student1));

// Grade- und Student-Typen
// Erlaubte Noten: deutsch (1-6) oder amerikanisch (A-F)
type NumericGrade2 = 1 | 2 | 3 | 4 | 5 | 6;
type LetterGrade2 = "A" | "B" | "C" | "D" | "E" | "F";
type Grade4 = NumericGrade2 | LetterGrade2 | undefined;

// Student-Typ mit takeExam-Funktion
type Student4 = {
    firstName: string;
    lastName: string;
    age: number;
    grades: Grade4[];
    takeExam: (grade: Grade4) => boolean;
};

// Funktion zum Ausgeben eines Studenten
function printStudent4(student: Student4): void {
    const nameLine = `${student.firstName} ${student.lastName} (${student.age})`;
    console.log(nameLine);
    console.log("=".repeat(30));

    const gradesOutput = student.grades.map(g => (g === undefined ? "*" : g)).join(",");
    console.log("Grades:", gradesOutput);
    console.log(""); // leere Zeile
}

// Student erstellen und takeExam implementieren
const myStudent: Student4 = {
    firstName: "Anton",
    lastName: "Meier",
    age: 17,
    grades: [1, 4, 3, 1, 3, 2, 1, 2],
    takeExam(grade: Grade4): boolean {
        // Prüfen, ob Note gültig ist
        const validNumeric: NumericGrade[] = [1, 2, 3, 4, 5, 6];
        const validLetter: LetterGrade[] = ["A", "B", "C", "D", "E", "F"];

        if (grade === undefined) return false;

        if (typeof grade === "number" && validNumeric.includes(grade)) {
            this.grades.push(grade);
            return true;
        } else if (typeof grade === "string" && validLetter.includes(grade as LetterGrade)) {
            this.grades.push(grade as LetterGrade);
            return true;
        }

        // Ungültige Note
        return false;
    }
};

//Testen
// Vor der Prüfung
printStudent4(myStudent);

// Note hinzufügen
const examValid = myStudent.takeExam(1);
console.log("Exam valid:", examValid);

// Nach der Prüfung
printStudent4(myStudent);

// Ungültige Note testen
console.log("Exam valid:", myStudent.takeExam(10)); // false
