Describe: Pizza(toppings, size, price);
Test: It should output value of each property when called upon. 
code: function Pizza(toppings, size, price) {
  this.toppings = toppings;
  this.size = size; 
  this.price = price; 
}
const pepperoni = new Pizza("Pepperoni", "medium", 8);
const cheese = new Pizza("Cheese", "medium", 7);
const meatLovers = new Pizza("Meat Lovers", "medium", 10);
Expect((pepperoni.toppings).toEqual("pepperoni"))

Test: It should output value of each property when called upon. 
code: function Pizza(toppings, size, price) {
  this.toppings = toppings;
  this.size = size; 
  this.price = price; 
}
const pepperoni = new Pizza("Pepperoni", "medium", 8);
const cheese = new Pizza("Cheese", "medium", 7);
const meatLovers = new Pizza("Meat Lovers", "medium", 10);
Expect((meatLovers.toppings).toEqual(["pepperoni", "sausage", "bacon"]))

Describe: customerTotal();
Test: It should output the concatonated string & total price of choosen pizza; 
code: Pizza.prototype.customerTotal = function() {
    return "Thank you for choosing Gurshan's Pizza, " + "Your total will be " + meatLovers.price + " Dollars";
}
}
Expect: (meatLovers.customerTotal().toEqual("Thank you for choosing Gurshan's Pizza, Your total will be 10 Dollars"))

