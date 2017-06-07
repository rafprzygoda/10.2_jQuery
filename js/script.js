$(function(){
    console.log('DOM loaded');
    var span = $('span');
    span.each(function(index, element){
        if (index % 2 === 0) {
            $(element).css('color', 'red');
        }
    });
    
     /* or */
    
    $('span:odd').css('color', 'purple').css('font-size', '20px');
    
    var p = $('p');
    p.each(function(index, element){
        var button = '<button class="btn" data-tmp="' + index + '">Click me</button>'
        $(element).append(button);
    });
    
    $('button').click(function(){
        alert($(this).attr("data-tmp"));
    });
});

