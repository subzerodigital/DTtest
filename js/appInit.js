$(function(){

    var down_x = null;
    var up_x = null;

    $(".hero").mousedown(function(e){
        e.preventDefault();
        down_x = e.pageX;
    });

      $(".hero").mouseup(function(e){
        up_x = e.pageX;
        do_work();
      });

  $(".hero").bind('touchstart', function(e){
    down_x = e.originalEvent.touches[0].pageX;
  });
  $(".hero").bind('touchmove', function(e){
    e.preventDefault();
    up_x = e.originalEvent.touches[0].pageX;
  });
  $(".hero").bind('touchend', function(e){
    do_work();
  });

function do_work()
{
  if ((down_x - up_x) > 50)
    {
        slide_right();
    }
    if ((up_x - down_x) > 50)
    {
        slide_left();
    }
}
function slide_right()
{
    $(".message").text("right");
}
function slide_left()
{
    $(".message").text("left");
}



    /*
    $(".hero").on("click",function(e){

        $(".message").text("click");
    });
    */
});







	
