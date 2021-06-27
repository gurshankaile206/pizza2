Describe: Pizza(toppings, size, price);
Test: It should output value of each property when called upon. 
code: function Pizza() {
    this.size = undefined; 
    this.toppings = undefined; 
    this.sizePrice = 0; 
    this.toppingsPrice = 0;
    this.totalPrice = 0;  
    let output = new Pizza ('medium', 'cheese', 12, 3);
}
Expect((output.size).toEqual('medium'));
