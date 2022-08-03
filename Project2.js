$(document).ready(function () {
    $(window).scroll(function () {
      $("h1").html("Model 3"); 
      $("h1").css("left","610px");
      $("h4").html("Order Online for Touchless Delivery");
      $(".a1>button").html("Custom Order");
      $(".a2>button").html("Existing Inventory");
      $(".a1").css("top","530px");
      $(".a1").css("bottom","0");
      $(".a1").css("right","650px");
      $("h1").show();
      $(".a1").show();
      $(".a2").show();
      $("h4").show();
      if ($(this).scrollTop() < 700) {
        $("h1").html("Model 3");
        if($(this).scrollTop() > 170)
        {
          $("h1").hide();
          $(".a1").hide();
          $(".a2").hide();
          $("h4").hide();
        }
      } else if ($(this).scrollTop() < 1700) {
        $("h1").html("Model Y");
        if($(this).scrollTop() > 1100)
        {
          $("h1").hide();
          $(".a1").hide();
          $(".a2").hide();
          $("h4").hide();
        }
      } else if ($(this).scrollTop() < 2500) {
        $("h1").html("Model S");
        if($(this).scrollTop() > 2000)
        {
          $("h1").hide();
          $(".a1").hide();
          $(".a2").hide();
          $("h4").hide();
        }
      }else if ($(this).scrollTop() < 3300) {
        $("h1").html("Model X");
        if($(this).scrollTop() > 2750)
        {
          $("h1").hide();
          $(".a1").hide();
          $(".a2").hide();
          $("h4").hide();
        }
      }else if ($(this).scrollTop() < 4100) {
        $("h1").html("Solar Panels");
        $("h1").css("left","570px");
        $("h4").html("Lowest Cost Solar Panels In America");
        $(".a1>button").html("Order Now");
        $(".a2>button").html("Learn More");
        if($(this).scrollTop() > 3550)
        {
          $("h1").hide();
          $(".a1").hide();
          $(".a2").hide();
          $("h4").hide();
        }
      }else if ($(this).scrollTop() < 4800) {
        $("h1").html("Solar Roof");
        $("h1").css("left","570px");
        $("h4").html("Produce Clean Energy From Your Roof");
        $(".a1>button").html("Order Now");
        $(".a2>button").html("Learn More");
        if($(this).scrollTop() > 4350)
        {
          $("h1").hide();
          $(".a1").hide();
          $(".a2").hide();
          $("h4").hide();
        }
      }else  if ($(this).scrollTop() < 5300){
        $("h1").html("Accessories");
        $("h1").css("left","540px");
        $("h4").hide();
        $(".a1>button").html("Shop Now");
        $(".a1").css("top","480px");
        $(".a1").css("bottom","0");
        $(".a1").css("right","500px");
        $(".a2").hide();
        if($(this).scrollTop() > 5050)
        {
          $("h1").hide();
          $(".a1").hide();
          $(".a2").hide();
          $("h4").hide();
        }
      }
    });
  });
  
  