// 1
const students = [
    { name: "David", marks: 80 },
    { name: "Vinoth", marks: 77 },
    { name: "Divya", marks: 88 },
    { name: "Ishitha", marks: 95 },
    { name: "Thomas", marks: 68 }
];

function calculateAverage() {
    const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
    const average = totalMarks / students.length;

    let grade;
    if (average < 60) {
        grade = 'F';
    } else if (average < 70) {
        grade = 'D';
    } else if (average < 80) {
        grade = 'C';
    } else if (average < 90) {
        grade = 'B';
    } else {
        grade = 'A';
    }

    document.getElementById("averageResult").innerText = `Average Marks: ${average}, Grade: ${grade}`;
}

// 2
const inputField = document.getElementById("myInput");

inputField.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.getElementById("enterKeyResult").innerText = "Enter key was pressed";
    }
});

// 3
const element = document.getElementById("myElement");

element.addEventListener("dblclick", function() {
    document.getElementById("doubleClickResult").innerText = "Element was double-clicked!";
});

// 4
let progress = 0;

function updateProgress() {
    if (progress < 100) {
        progress += 20; 
        document.getElementById("progressBar").style.width = progress + "%";
        console.log("Progress: " + progress + "%");
    }
}

// 5
function runFizzBuzz() {
    const result = document.getElementById("fizzBuzzResult");
    result.innerHTML = ""; 

    for (let i = 1; i <= 100; i++) {
        const listItem = document.createElement("li");
        
        if (i % 3 === 0 && i % 5 === 0) {
            listItem.innerText = "FizzBuzz";
        } else if (i % 3 === 0) {
            listItem.innerText = "Fizz";
        } else if (i % 5 === 0) {
            listItem.innerText = "Buzz";
        } else {
            listItem.innerText = i;
        }

        result.appendChild(listItem);
    }
}
