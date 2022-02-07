

// function validating input for comparison
function checkResult() {
    var age = document.getElementById("age").value;
    var weight = document.getElementById("weight").value;
    var name = document.getElementById("name").value;


    if (age && weight && name) {



        // validator for numeric age and weight
        if (isNaN(age) || isNaN(weight)) {

            // error message
            document.getElementById('error').style.display = "block";
            document.getElementById("error").innerHTML = "*age and weight must be numeric";


            // changing color of age and weight to red
            document.getElementById('name').style.borderColor = 'black'
            document.getElementById('age').style.borderColor = 'red'
            document.getElementById('weight').style.borderColor = 'red'
            return;
        }

        // function execution
        if (age >= 5 && age < 21) {
            // changing box colors to black
            document.getElementById('error').style.display = "none";
            document.getElementById('name').style.borderColor = 'black'
            document.getElementById('age').style.borderColor = 'black'
            document.getElementById('weight').style.borderColor = 'black'
            // 
            display(age, weight, name); //display function 
        } else {

            // this block executes if input is out of range
            document.getElementById('error').style.display = "block";
            document.getElementById("error").innerHTML =
                "Please enter age in the range 5-20";
        }



    } else {
        // this block executes if text fields are empty
        document.getElementById('error').style.display = "block";

        document.getElementById("error").innerHTML = "*Please fill all the fields";
        document.getElementById('name').style.borderColor = 'red'
        document.getElementById('age').style.borderColor = 'red'
        document.getElementById('weight').style.borderColor = 'red'
    }
}

// function to display result
function display(age, weight, name) {
    var res = validateForm(age, weight);
    if (res !== "perfect") {
        res += " at the age of " + age;
    }
    document.getElementById("result").innerHTML =
        "Hello " + name + " !!! Your weight is " + res;
}

// function to compare age
function validateForm(age, weight) {
    if (age <= 7) {
        return weightCheck(weight, 15, 20);
    } else if (age <= 10) {
        return weightCheck(weight, 21, 25);
    } else if (age <= 15) {
        return weightCheck(weight, 26, 30);
    } else {
        return weightCheck(weight, 31, 40);
    }

    // function to check weight
    function weightCheck(weight, minWeight, maxWeight) {
        if (weight < minWeight) {
            return `less than recommended value of ${minWeight}`;
        } else if (weight > maxWeight) {
            return `greater than recommended value of ${maxWeight}`;
        } else {
            return "perfect";
        }
    }
}

