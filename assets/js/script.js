/* seccion mi circulo */ 
$(document).ready(function(){
  $("#Circlepop").click(function(){
    $(".pop").toggle();
  });
});

/* show and hide prueba */ 
$(document).ready(function(){
  $("#hide").click(function(){
    $(".pop").hide();
  });
  $("#show").click(function(){
    $(".pop").show();
  });
});



  $(function () {
  $('[data-toggle="popover"]').popover()
})




/* Seccion imagenes show  box*/ 

$(document).ready(function(){
  $("#showImg").click(function(){
    $("#div1").fadeToggle();
    $("#div2").fadeToggle("slow");
    $("#div3").fadeToggle(2000);
  });
});







