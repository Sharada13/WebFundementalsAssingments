$('.FO').click(function(){
   $('.fadeout').fadeOut(5000)});

$(".FI").click(function(){
    $(".fadeout").fadeIn(5000)});



$('.H').click(function(){
    $('.hide').hide();
})

$(".S").click(function(){
    $('.hide').show();
})

$('.ST').click(function(){
    $('.slidetoggle').slideToggle('slow');
})

$('.T').click(function(){
    $('.toggle').toggle();
})

$(".SU").click(function(){
    $(".slideup").slideUp();
})

$(".SD").click(function(){
    $(".slideup").slideDown();
})
$('.B').click(function(){
    $("h5").before('<b>Try</b>');
})

$(".A").click(function(){
    $("h5").after('<a>this</a>')
})

$(".AP").click(function(){
    $("li").append('<strong>list</strong>')
})







 