/**
 * Created by Sona Unusyan on 4/22/2016.
 */

$(function () {

    $("form").submit(function () {
        var val = $("input").val();

        if (val.length > 0) {
            $("ul").append("<li>" + val + "<a href='#' class='remove'>X</a></li>");
        } else {
            alert("Enter text");
        }
        $(this).trigger('reset');
        return false;
    });
    $(document).on('click', '.remove', function(){
        $(this).parent().remove();
    });
    $(document).on('click', 'li', function(){
        $(this).toggleClass("done");
    });
});