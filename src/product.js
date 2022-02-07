const arrProduct = []; //array of products

//   add product function
function addProduct() {
    var id = document.getElementById("pid").value;
    var name = document.getElementById("pname").value;
    var price = document.getElementById("price").value;



    // validator for empty fields
    if (id && name && price) {

        // validator for numeric input
        if (isNaN(price)) {
            document.getElementById('error').style.display = "block";
            document.getElementById('price').style.borderColor = 'red';
            document.getElementById('error').innerHTML = '*Enter numeric value in price.'
            return;
        }


        document.getElementById('error').style.display = "none";
        document.getElementById('price').style.border = '0.5px solid black';

        arrProduct.push({ id: id, name: name, price: price }); //adding elements to array
        addElement(arrProduct);
    } else {

        // if text fields are empty
        document.getElementById('error').style.display = "block";
        document.getElementById('error').innerHTML = '*Please fill all the details.'


    }
}

//   add element function to add element in table
function addElement(arr) {
    var table =
        "<table> <tr><th>Product Id</th><th>Product Name</th><th>Price</th></tr> ";
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        table +=
            "<tr><td>" +
            arr[i].id +
            "</td><td>" +
            arr[i].name +
            "</td><td>" +
            `USD ${arr[i].price}` +
            "</td></tr>";
    }
    document.getElementById("product").innerHTML = table + "</table>";
}
