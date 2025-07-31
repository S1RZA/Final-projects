let grades = [];

function add_grades_average() {
  let firstGrade = document.getElementById("first-grade").value;
  firstGrade = parseFloat(firstGrade);
  while (firstGrade == "" || firstGrade < 0 || firstGrade > 100 || isNaN(firstGrade)) {
    alert("Please enter a valid first grade between 0 and 100.");
    firstGrade = prompt("Please enter the first grade:");
  }
  firstGrade = parseFloat(firstGrade);
  grades.push(firstGrade);

  let secondGrade = document.getElementById("second-grade").value;
  while (secondGrade == "" || secondGrade < 0 || secondGrade > 100 || isNaN(secondGrade)) {
    alert("Please enter a valid second grade between 0 and 100.");
    secondGrade = prompt("Please enter the second grade:");
  }

  secondGrade = parseFloat(secondGrade);
  grades.push(secondGrade);

  let thirdGrade = document.getElementById("third-grade").value;
  while (thirdGrade == "" || thirdGrade < 0 || thirdGrade > 100 || isNaN(thirdGrade)) {
    alert("Please enter a valid third grade between 0 and 100.");
    thirdGrade = prompt("Please enter the third grade:");
  }

  thirdGrade = parseFloat(thirdGrade);
  grades.push(thirdGrade);

  let fourthGrade = document.getElementById("fourth-grade").value;
  while (fourthGrade == "" || fourthGrade < 0 || fourthGrade > 100 || isNaN(fourthGrade)) {
    alert("Please enter a valid fourth grade between 0 and 100.");
    fourthGrade = prompt("Please enter the fourth grade:");
  }
  fourthGrade = parseFloat(fourthGrade);
  grades.push(fourthGrade);

  let fifthGrade = document.getElementById("fifth-grade").value;
  while (fifthGrade == "" || fifthGrade < 0 || fifthGrade > 100 || isNaN(fifthGrade)) {
    alert("Please enter a valid fifth grade between 0 and 100.");
    fifthGrade = prompt("Please enter the fifth grade:");
  }
  fifthGrade = parseFloat(fifthGrade);
  grades.push(fifthGrade);

  console.log(grades);

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 0 || grades[i] > 100) {
      alert("Please enter valid grades between 0 and 100.");
      return;
    }
  }
  let average =
    parseFloat(firstGrade) +
    parseFloat(secondGrade) +
    parseFloat(thirdGrade) +
    parseFloat(fourthGrade) +
    parseFloat(fifthGrade);

  average = average / 5;
  alert(`This is the average of the grades: ${average}`);
}



