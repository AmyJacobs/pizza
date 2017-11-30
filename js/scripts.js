$(document).ready(function(){
  $("form#pizza_survey").submit(function(event){
    event.preventDefault();
    $("#output").show();
    $("input:checkbox[name=toppings]:checked").each(function(){
      var toppingsMode = $(this).val();
      $('#output').append(toppingsMode + "<br>");
    });

  });
});
