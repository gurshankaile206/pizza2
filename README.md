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

Test: It should

