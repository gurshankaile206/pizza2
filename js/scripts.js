function Pizza() {
    this.size = undefined; 
    this.toppings = undefined; 
    this.sizePrice = 0; 
    this.toppingsPrice = 0;
    this.totalPrice = 0;  
}

Pizza.prototype.addSize = function(size) {
    this.size = size;
    if(this.size === 'small'){
        this.sizePrice = 10; 
    } else if (this.size === 'medium'){
        this.sizePrice = 15;
    } else  {
        this.sizePrice === 20;
    } 
    this.calculateTotal();
}

