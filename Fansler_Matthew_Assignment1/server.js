var data = require('./product_data');
var fs = require('fs');
var products = data.products;
var express = require('express');
var app = express();
var myParser = require("boday-parser");
//Test if string is non-negative integer 
function isNonNegInt(q, returnerrors = false) {
   
    errors = []; // Assume there are no errors to begin
    if (Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
    if (q < 0) errors.push('Negative value!'); // Check if string is non-negative
    if (parseInt(q) != q) errors.push('Not an integer!'); // Check if string is an integer
    return returnErrors ? errors : (errors.length == 0);

}

// Start up Express 
app.all('*', function (request, response, next) {
    console.log(request.method + ' to ' + request.path);
    next();
});

app.use(myParser.urlencoded({ extended: true }));

app.post("/process_form", function (request, response, next) {
    //Set up path for POST requests
   let POST = request.body;
   console.log(POST); 

   // Adjust to the quantity entered on user side
   if (typeof POST['quantity_textbox'] != 'undefined') {
       has_error = false;
       has_quantity = false;
       for (i = 0; i < products.length; i++) {
           q = POST['quantity_textbox' + i];
           if (q !="") {
               has_quantity = ((q > 0) || has_quantity);

               if (isNonNegInt(q)) {
                   has_error = true;

                   break;
               }
           }
       }


       if (!has_error && has_quantity) {
           Invoice_str = "";
           for (i = 0; i < products.length; i++) {
               q = POST['quantity_textbox' + i]; //Check POST request to quantity 
               if (q > 0) {
                    Invoice_str += `<h1>Thank you for purchasing ${q} ${products[i]['service']}. Your total is \$${q * products[i]['price']}!</h1>  `;
               } 
            }
            response.send(Invoice_str); //Retreive Invoice response 
        
       } else if (has_error) {
           response.send(`${q} is not a quantity!`); //Response if a non valid quantity is entered
       } else if (!has_quantity) {
           response.send("Please select a service"); // Adjustment to user if there is a non-valid quality entered
       }
    } else {
       next();
   }

});

app.use(express.static('./public'));
app.listen(8080, () => console.log(`listening on port 8080`));
