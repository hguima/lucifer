//$ is the universal selector
$(window).scroll(function(){

//start of scroll-only happens in the condition of scroll
  var fromTop = $(window).scrollTop();
  console.log("Lucifer the Morning Star");
  //write into console
  console.log(fromTop);

//s1 STARTS
  if(fromTop >= 865){
      $("#s1").css({
        "display":"none"
      });
    } else {
    $("#s1").css({
        "top" : fromTop * 1.1 +"px",
        "display":"block"
      });
    }



    if(fromTop >= 1160){
    $("#s1").css({
        "top" : fromTop * 1.1 +"px",
        "display":"initial",
        "background-image":"url(images/s2.png)"
      });
    }else{
      $("#s1").css({
          "top" : fromTop * 1.1 +"px",
          "display":"initial",
          "background-image":"url(images/s1.png)"  });
    }





//s1 ENDS
//feathers STARTS
    if(fromTop >= 0){
        $("#feathers").css({
          "display":"none"
          });
      } else {
      $("#feathers").css({
          "top" : fromTop * .99 +"px",
          "display":"block"
        });
      }
      if(fromTop >= 1194){
      $("#feathers").css({
          "top" : fromTop * .99 +"px",
          "display":"initial"
      });
    } else {
    $("#feathers").css({
        "top" : fromTop * .99 +"px",
        "display":"block"
      });
    }
    if(fromTop >= 2494){
        $("#feathers").css({
          "display":"none"
          });
      }

//feathers ENDS



//"background-image":"url(images/s2.png)"
  //this.moveIn = function() {
    //$dominant_cloud.each(animationMethods.slideInFromTheSide(function() {
      //$lightning.show();}));
    //$([$left_cloud, $right_cloud]).each(animationMethods.slideInFromTheSide());
    //$text.each(animationMethods.slideInFromTheSide());
    //$element.each(animationMethods.selectNavItem);}

});
