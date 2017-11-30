var toppingsArray = [];

function Pizza (toppings,size,style,color) {
  this.toppings = toppings;
  this.size = size;
  this.style = style;
  this.color = color;
}

$(document).ready(function(){
  $("form#pizza_survey").submit(function(event){
    event.preventDefault();
    var sizeMode = $("input:radio[name=size]:checked").val();
    $('#output').append(sizeMode + "<br>");
    var pizzaColor = $("#color").val();
    $('#output').append(pizzaColor + "<br>");
    var pizzaStyle = $("input:radio[name=style]:checked").val();
    $('#output').append(pizzaStyle + "<br>");
    $("input:checkbox[name=toppings]:checked").each(function(){
      var toppingsMode = $(this).val();
      toppingsArray.push(toppingsMode);
    });
    $('#output').append(toppingsArray + "<br>");
    var newPizza = new Pizza(toppingsArray, sizeMode, pizzaStyle, pizzaColor);
    console.log(newPizza);
    $("#output").show();
  });
});
