$('img').hover(
    function(){
        var temp=$(this).attr('src');
        $(this).attr("src",$(this).attr('new'));
        $(this).attr('new',temp);
    });



    