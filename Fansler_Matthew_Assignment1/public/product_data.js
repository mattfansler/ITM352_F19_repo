var products = 
[
    {
    "Brand" : "Nike",
    "Price" : 100.00,
    "image" : "./images/Nike_blues.jpg"
    },
    {
    "Brand" : "Adidas",
    "Price" : 75.00,
    "image" : "./images/Adidas.jpg"
    },
    {
    "Brand" : "New Balance",
    "Price" : 50.00,
    "image" : "./images/New_Balance.jpg"
    },
    {
    "Brand" : "Converse",
    "Price" : 50.00,
    "image" : "./images/converse.jpg" 
    },
    {
    "Brand" : "Jordan",
    "Price" : 100.00,
    "image" : "./images/Jordans.jpg"
    }
];

if(typeof module != 'undefined') {
    module.exports.products = products; 
    //Product rendering with order_page
}