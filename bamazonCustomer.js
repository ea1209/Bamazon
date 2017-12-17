var fs = require('fs');
var Table = require('cli-table');
var mysql = require('mysql');
var inquirer = require('inquirer');
var prodIdArray = ["1","2","3","4","5","6","7","8","9","10"];

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Ashf0rd!!",
    database: "bamazon"

});

connection.connect(function(err) {
  if (err) throw err;	
  console.log("connected as id " + connection.threadId);
  afterConnection();
  shop();
});

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].itemID + " | " + res[i].productName + " | " + res[i].departmentName + " | " + res[i].price + " | " +res[i].stockQuantity);
    }
    console.log("-----------------------------------");
    
  });
}

function shop () {
	inquirer.prompt ([{
		name: "Welcome",
		message: "Are you shopping? (Y/N)",
		type: "input",

	}]).then(function(answers){
		if (answers.Welcome === "Y") {
			questions();
		} else {

			console.log('Thanks for stopping by!');
			process.exit();
		}
	});

function questions () {
	inquirer.prompt ([{
		name: "id",
		message: "Please select the ID of the product you wish to purchase",
		type: "list",
		choices: prodIdArray,
	}]).then(function(shopping) {
		 connection.query("SELECT * FROM products WHERE itemID=?", [shopping.id], function(err, res) {
    	 if (err) throw err;
    	 for (var i = 0; i < res.length; i++) {
      	 console.log(res[i].itemID + " | " + res[i].productName + " | " + res[i].departmentName + " | " + res[i].price 
      	 + " | " +res[i].stockQuantity);
    }
    console.log("-----------------------------------");

    inquirer.prompt ([{

    	name: "units",
		message: "How many units would you like to purchase?",
		type: "input",

	}]).then(function(select,) {

		var totalPrice = parseInt(select.units) * parseInt(connection.query("SELECT * FROM products WHERE itemID=?", [shopping.id], price))
		console.log(totalPrice);
		console.log(connection.query("SELECT * FROM products WHERE itemID=?", [shopping.id], price));
		 //connection.query("UPDATE products WHERE itemID=?", [shopping.id], function(err, res) {
    	 //if (err) throw err;
    	 //for (var i = 0; i < res.length; i++) {
      	 //console.log(res[i].itemID + " | " + res[i].productName + " | " + res[i].departmentName + " | " + res[i].price 
      	 //+ " | " +res[i].stockQuantity);
   // }
    console.log("-----------------------------------");
    
	connection.end();


})
})
})
//})
}
}