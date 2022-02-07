const arrProduct = []; //array of products

//   add product function
function addProduct() {
  var id = document.getElementById("pid").value;
  var name = document.getElementById("pname").value;
  var price = document.getElementById("price").value;
  if (id && name && price) {
    arrProduct.push({ id: id, name: name, price: price });
    addElement(arrProduct);
  } else {
    alert("Please fill all the details");
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