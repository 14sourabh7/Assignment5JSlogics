
// function validating input for comparison
function checkResult() {
  var age = document.getElementById("age").value;
  var weight = document.getElementById("weight").value;
  var name = document.getElementById("name").value;
  if (age && weight && name) {
    if (age >= 5 && age < 21) {
      display();
    } else {
      document.getElementById("result").innerHTML =
        "Please enter age in the range 5-20";
    }
  } else {
    document.getElementById("result").innerHTML =
      "Please fill all the fields";
  }
}

// function to display result
function display() {
  var age = document.getElementById("age").value;
  var weight = document.getElementById("weight").value;
  var name = document.getElementById("name").value;
  var res = validateForm();
  if (res !== "perfect") {
    res += " at the age of " + age;
  }
  document.getElementById("result").innerHTML =
    "Hello " + name + " !!! Your weight is " + res;
}

// function to compare age
function validateForm() {
  var age = Number(document.getElementById("age").value);
  var weight = Number(document.getElementById("weight").value);
  var name = document.getElementById("name").value;
  if (age <= 7) {
    if (weight < 15) {
      return "less than recommended value of 15";
    } else if (weight <= 20) {
      return "perfect";
    } else {
      return "greater than recommended value of 20";
    }
  } else if (age <= 10) {
    if (weight < 21) {
      return "less than recommended value of 21";
    } else if (weight <= 25) {
      return "perfect";
    } else {
      return "greater than recommended value of 25";
    }
  } else if (age <= 15) {
    if (weight < 26) {
      return "less than recommended value of 26";
    } else if (weight <= 30) {
      return "perfect";
    } else {
      return "greater than recommended value of 30";
    }
  } else {
    if (weight < 31) {
      return "less than recommended value of 31";
    } else if (weight <= 40) {
      return "perfect";
    } else {
      return "greater than recommended value of 40";
    }
  }
}
