

let file = "/shop/products.json"

let data

module.exports = async (req, res) => {
  // const date = new Date().toString();
  console.log(req)

  fetch(file, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  }).
    then(response => {
      console.log(response);
    })
  console.log(file);
  console.log("É nóis porra!");

};
