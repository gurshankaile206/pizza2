function Pizza() {
    this.size = undefined; 
    this.toppings = undefined; 
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
   this.calculateTotal();
}

Pizza.prototype.addTopping = function(inputTopping) {
    this.toppings = inputTopping;
    if (this.toppings === 'pepperoni') {
        this.toppingPrice = 3; 
    } else if (this.toppings === 'cheese') {
        this.toppingPrice = 5; 
    } else if (this.toppings === "meat lovers") {
        this.toppingPrice = 7;
    }
  this.calculateTotal();
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

    const result = this.totalPrice;
    $("#output").text(result);
    
  });
});