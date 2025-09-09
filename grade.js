// Student Grade Generator

const marks = 50; // Example input

// Check if input is valid
if (marks < 0 || marks > 100 || isNaN(marks)) {
  console.log("Invalid input! Please enter a number between 0 and 100.");
} else {
  // Determine grade
  if (marks > 79) {
    grade = "A"; //grade A for marks above 79
  } else if (marks >= 60) {
    grade = "B"; //grade B for marks between 60 and 79
  } else if (marks >= 50) {
    grade = "C"; //grade C for marks between 50 and 59
  } else if (marks >= 40) {
    grade = "D"; //grade D for marks between 40 and 49
  } else {
    grade = "E"; //grade E for marks below 40
  }

  console.log(`The student's grade is: ${grade}`);
}

/**
 * This code is for grading students based on their marks. It checks if the input marks are valid (between 0 and 100) and then assigns a grade.
 */
