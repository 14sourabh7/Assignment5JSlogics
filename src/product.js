var arrProduct = []; //array of products

//   add product function
function addProduct() {
    var id = document.getElementById("pid").value;
    var name = document.getElementById("pname").value;
    var price = document.getElementById("price").value;

    // validator for empty fields
    if (id && name && price) {
        // validator for numeric input
        if (isNaN(price)) {
            document.getElementById("error").style.display = "block";
            document.getElementById("price").style.borderColor = "red";
            document.getElementById("error").innerHTML =
                "*Enter numeric value in price.";
            return;
        }

        // checking if ID already exists
        if (arrProduct.find((x) => x.id == id)) {
            document.getElementById("error").style.display = "block";
            document.getElementById("pid").style.borderColor = "red";
            document.getElementById("error").innerHTML =
                "*id already exist please provide unique id.";
            return;
        }

        // changing border colors to black
        document.getElementById("error").style.display = "none";
        document.getElementById("price").style.border = "0.5px solid black";
        document.getElementById("pid").style.border = "0.5px solid black";

        arrProduct.push({ id: id, name: name, price: price }); //adding elements to array

        // addElement function call
        addElement(arrProduct);
        console.log("element added new array", arrProduct);
    } else {
        // if text fields are empty
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerHTML =
            "*Please fill all the details.";
    }
}

//   add element function to add element in table
function addElement(arr) {
    var table =
        "<table> <tr><th>Product Id</th><th>Product Name</th><th>Price</th></tr> ";
    for (let i = 0; i < arr.length; i++) {
        table +=
            "<tr><td>" +
            arr[i].id +
            "</td><td>" +
            arr[i].name +
            "</td><td>" +
            `USD ${arr[i].price}` +
            "</td><td><a href='#' onClick='edit(this.id)' id=" +
            arr[i].id +
            "  />edit</a> </td> <td><a href='#' onClick='deleteProduct(this.id)' id='" +
            arr[i].id +
            "'  />delete</a> </td></tr>";
    }

    // displaying the whole array
    document.getElementById("product").innerHTML = table + "</table>";
    clearInput();;
}


// edit function starts here
function edit(id) {
    document.getElementById("btnUpdate").style.display = "block";
    document.getElementById("btnAdd").style.display = "none";

    // calling setElements
    setElements(id);
}

// function to set elements value when clicking on edit
function setElements(id) {
    var index = arrProduct.findIndex((x) => x.id == id); //finding index of element
    // console.log(index)
    document.getElementById("pid").style.borderColor = "purple";
    document.getElementById("pid").value = arrProduct[index].id;
    document.getElementById("pid").disabled = true;

    document.getElementById("pname").value = arrProduct[index].name;
    document.getElementById("price").value = arrProduct[index].price;
}

// function to update product
function updateProduct() {
    id = document.getElementById("pid").value;
    pname = document.getElementById("pname").value;
    price = document.getElementById("price").value;
    var index = arrProduct.findIndex((x) => x.id == id);
    //   console.log(index, id, pname, price);
    arrProduct[index].name = pname;
    arrProduct[index].price = price;
    addElement(arrProduct);

    clearInput();

    document.getElementById("pid").disabled = false;
    document.getElementById("pid").style.borderColor = "black";
    document.getElementById("btnUpdate").style.display = "none";
    document.getElementById("btnAdd").style.display = "block";
}

// function to clear input
function clearInput() {
    document.getElementById("pid").value = "";
    document.getElementById("pname").value = "";
    document.getElementById("price").value = "";
}

// function to delete elements
function deleteProduct(id) {
    console.log(id);
    var index = arrProduct.findIndex((x) => x.id == id);
    arrProduct.splice(index, 1);
    addElement(arrProduct);
}
