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
      $('#output').append(toppingsMode + "<br>");
    });
    $("#output").show();
  });
});
