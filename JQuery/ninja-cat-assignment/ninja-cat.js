$("img").click(function(){
    $(this).attr('temp', $(this).attr('src'));
    $(this).attr(('src'),$(this).attr('data-change'));
    $(this).attr('data-change',$(this).attr('src'));

});

