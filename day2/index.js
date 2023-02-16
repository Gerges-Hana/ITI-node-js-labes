const fs = require("fs");
require("./dataApi.json");
var data = fs.readFileSync("./dataApi.json", "utf-8");
var ReturnJsonData = JSON.parse(data);
console.log(ReturnJsonData);
// console.log(typeof( ReturnJsonData));

// ========================================
// server ==> q2
// ========================================
const http = require("http");

const server = http.createServer(function (request, response) {
  let urls = request.url.split("/");
  //console.log(urls);
  if (urls[1] == "home") {
    response.write("<b>welcome to our APIs </b>");
  } else if (urls[1] == "products" && isFinite(urls[2])) {
    // let products = JSON.stringify(productsDB)
    let id = urls[2];
    let product = productsDB[parseInt(id)];
    products = JSON.stringify(product);
    console.log(id);
    response.write(products);
  } else if (urls[1] == "products") {
    let products = JSON.stringify(productsDB);
    response.write(products);
  } else {
    response.writeHead(404);
    response.write("<h1>not found</h1>");
  }
  response.end();
 
});

server.listen(4000, function () {
  console.log("hi i listen in port 4000");
});
