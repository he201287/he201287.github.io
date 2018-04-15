function onMouseOver(id) {
    $("#" + id).show();
}
function onMouseOut(id) {
    $("#" + id).hide();
}

$( document ).ready(function() {

    $("#cv").click(function() {
        $("#content").hide();
        $(".cv").slideToggle("slow");
    });

    $("#a1").click(function() {
        $("#content").hide();
        $(".a1").slideToggle("slow");
    });
});