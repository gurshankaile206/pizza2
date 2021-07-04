function Pizza(size, toppings) {
this.size = size; 
this.toppings = toppings; 
this.sizePrice = 0; 
this.toppingsPrice = 0;
this.totalPrice = 0;  
}

Pizza.prototype.addSize = function(inputSize) {
this.size = inputSize;
if(this.size === 'small'){
    this.sizePrice = 10; 
} else if (this.size === 'medium'){
    this.sizePrice = 15;
} else  {
    this.sizePrice = 20;
}
}

Pizza.prototype.addTopping = function(inputTopping) {
this.toppings = inputTopping;
if (this.toppings === 'pepperoni') {
    this.toppingsPrice = 3; 
} else if (this.toppings === 'cheese') {
    this.toppingsPrice = 5; 
} else  { 
    this.toppingsPrice = 7;
}
}

Pizza.prototype.calculateTotal = function() {
this.totalPrice = this.sizePrice + this.toppingsPrice;
return this.totalPrice; 
}



// UI Interface

$(document).ready(function() {
$("form#pizzas").submit(function(event) {
event.preventDefault();
const inputTopping = $('input:radio[name="pizzaChoice"]:checked').val();
const inputSize = $('input:radio[name="sizeChoice"]:checked').val();

let pizzaItem = new Pizza();
pizzaItem.addTopping(inputTopping)
pizzaItem.addSize(inputSize);
const result = "Your total will be " + pizzaItem.calculateTotal() + " Dollars";
$("#output").text(result);

});
});