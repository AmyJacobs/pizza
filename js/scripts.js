var toppingsArray = [];

function Pizza (toppings,size,style,color) {
  this.toppings = toppings;
  this.size = size;
  this.style = style;
  this.color = color;
}

Pizza.prototype.priceCalc = function() {
  var price = 0;
  if (this.style === "deep-dish") {
    price = 25;
  } else if (this.style === "new-york") {
      price = 20;
  } else if (this.style === "california") {
      price = 30;
  }
  return price;
}

$(document).ready(function(){
  $("form#pizza_survey").submit(function(event){
    event.preventDefault();
    var sizeMode = $("input:radio[name=size]:checked").val();
    var pizzaColor = $("#color").val();
    $('#output').append(pizzaColor + "<br>");
    var pizzaStyle = $("input:radio[name=style]:checked").val();
    $("input:checkbox[name=toppings]:checked").each(function(){
      var toppingsMode = $(this).val();
      toppingsArray.push(toppingsMode);
    });
    var newPizza = new Pizza(toppingsArray, sizeMode, pizzaStyle, pizzaColor);
    console.log(newPizza);
    var priceResult = newPizza.priceCalc();
    $('#price-output').append(priceResult + "<br>");
    $('#topp-output').append(newPizza.toppings + "<br>");
    $('#size-output').append(newPizza.size + "<br>");
    $('#style-output').append(newPizza.style + "<br>");
    $("#output").show();
  });
});
