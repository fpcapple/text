import $ from "jquery"
$(function(){
    $('li:odd').css('backgroundColor' , 'green')
    $('li:even').css('backgroundColor',function(){
        return "#" + "D97634"
    })
})