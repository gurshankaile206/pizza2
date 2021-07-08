# Gurshan's Pizza Parlor

Practice with Objects, Constructors, and Prototypes.

## Description

A user can order a custom pizza with different sizes and toppings. The price will vary based on the selected toppings and size. 

## Technologies Used

* HTML
* CSS
* Javascript
* JQuery
* Bootstrap
* Git 
* GitHub

## Tests

## Describe: Pizza()
### Test: 
"It should return an object that contains keys for the Pizza constructor"
### Code: 
```
let pizzas = new Pizza("small","cheese")
```
### Expected Output: 
```
Pizza{size:"small",toppings:"cheese",sizePrice:0,totalPrice:0} 
```

## Describe: Pizza.prototype.addSize()
### Test: 
"It should return the price of a small pizza"
### Code:
``` 
let pizzas = new Pizza("small","cheese")
pizzas.addSize()
```
### Expected Output:
```
Pizza{size:"small",toppings:"cheese",sizePrice:10,toppingsPrice:0,totalPrice:0} 
```

## Describe: Pizza.prototype.addSize()
### Test:
"If selected size of the pizza is medium it will return the price for a medium pizza"
### Code:
```
let pizzas = new Pizza("medium","cheese")
 pizzas.addSize()
 ```
### Expected Output:
```
Pizza{size:"medium",toppings:"cheese",sizePrice:15,toppingsPrice:0,totalPrice:0}
```

### Describe: Pizza.prototype.addSize()
### Test: 
If selected size is not small or medium, it will return price of large pizza" 
### Code: 
```
let pizzas = new Pizza("large","cheese")
 pizzas.addSize()
 ```
### Expected Output: 
```
Pizza{size:"large",toppings:"cheese",sizePrice:20,toppingsPrice:0,totalPrice:0} 
```
## Describe: Pizza.prototype.addTopping()
### Test:
"If selected topping is pepperoni, it will return the price of topping"
### Code:
```
let pizzas = new Pizza("small","pepperoni")
pizzas.addTopping()
```
### Expected Output: 
```
Pizza{size:"small",toppings:"pepperoni",sizePrice:10,toppingsPrice:3,totalPrice:0} 
```
## Describe: Pizza.prototype.addTopping()
### Test:
"If selected topping is cheese it will return the price of the cheese toppings"
### Code:
```
let pizzas = new Pizza("small","cheese")
pizzas.addTopping()
```
### Expected Output: 
```
Pizza{size:"small",toppings:"cheese",sizePrice:10,toppingsPrice:5,totalPrice:0} 
```
## Describe: Pizza.prototype.addTopping()
### Test:
"If selected topping is meat lovers it will return the price of meat lovers"
### Code:
```
let pizzas = new Pizza("small","meatLovers")
pizzas.addTopping()
```
### Expected Output: 
```
Pizza{size:"small",toppings:"meatLovers",sizePrice:10,toppingsPrice:7,totalPrice:0} 
```
## Describe : Pizza.prototype.calculateTotal()
### Test:
"Calculate the total price of the pizza where the size is small and the topping is pepperoni"
### Code: 
```
let pizzas = new Pizza("small","pepperoni")
pizzas.addSize()
pizzas.addTopping()
pizzas.calculateTotal()
```
### Expected Output: 
```
Pizza{size:"small",toppings:"pepperoni",sizePrice:10,toppingsPrice:3,totalPrice:13} 
```

## Setup/Installation Requirements

* Clone this repository.
* Navigate to index.html file.
* Right Click and open in the browser of your choice.

## Known Bugs

* No known issues or bugs

## Contact Info

If you have any suggestions or questions please email us at gurshankaile206@gmail.com

## License 

This software is licensed under the MIT license. 

Copyright (c) 2021 Gurshan Kaile

