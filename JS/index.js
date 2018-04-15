function onMouseOver(id) {
    $("#" + id).show();
}
function onMouseOut(id) {
    $("#" + id).hide();
}

$( document ).ready(function() {

    $("#helpDesk").click(function() {
        $("#helpDesk div").slideToggle(500);
    });

    $("#devDay").click(function() {
        $("#devDay div").slideToggle(500);
    });

    $("#cSharp").click(function() {
        $("#cSharp div").slideToggle(500);
    });
});