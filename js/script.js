$('.show').on("click",function () {
    $(this).parent().find('.show').hide()
    $(this).parent().find('.hide').show()
    $("section").slideDown();
  })
$('.hide').on('click', function(){
    $(this).parent().find('.hide').hide()
    $(this).parent().find('.show').show()
    $("footer").slideUp();
    $("section").slideUp();
})
$('.success').on('click', function(){
 $('footer').slideToggle();
})