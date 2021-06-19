function Pizza(toppings, size, price) {
  this.toppings = toppings;
  this.size = size; 
  this.price = price; 
}

const pepperoni = new Pizza("Pepperoni", "medium", 8);
const cheese = new Pizza("Cheese", "medium", 7);
const meatLovers = new Pizza(["pepperoni", "sausage", "bacon"], "medium", 10);


// create a pizza parlor website with radio buttons to choose toppings & size
// based off users selections calculate price
// create Pizza Constructor function to hold all the properties of the pizza
// create different pizza variables using "new" to create a new instance of the properties in the pizza function
// use .prototype to output price

Pizza.prototype.customerTotal = function() {
    return "Thank you for choosing Gurshan's Pizza, " + "Your total will be " + this.prices + " Dollars";
}

// if we name the functions toppings
// includes toppings prooperty
// size property
// price property 
// 

// const toppings = new Pizza(["Pepperoni", "Cheese", "Meat Lovers", "Supreme"]);
// const sizes = new Pizza(["small", "Medium", "Large"]);

// function price(pizza) {
//  let total = 0; 
//  for (let i = 0; i < toppings.length; i++) {
//      if("Pepperoni") {
//          total += 5
//      } else if
//  }
// }
$(document).ready(function() {
    ("from#pizzas").submit(function(event) {
        event.preventDefault();
        const selectedPizza1 = $("input#pizzaChoice1").val();
        const selectedPizza2 = $("input#pizzaChoice2").val();
        const selectedPizza3 = $("input#pizzaChoice3").val();

        const result = pizza.customerTotal();
        $("#output").text(result);
    })
})