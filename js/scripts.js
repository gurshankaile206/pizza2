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
// use .prototype to calculate price

Pizza.prototype.customerTotal = function() {
    return "Thank you for choosing Gurshan's Pizza, " + "Your total will be " + meatLovers.prices;
}