function onMouseOver(id) {
    $("#" + id).show();
}
function onMouseOut(id) {
    $("#" + id).hide();
}

$( document ).ready(function() {

    $("section").mouseenter(function() {
        $(this).css({"background-image": "#959595", "opacity": "0.75", "transition-duration": "0.5s"});
    });

    $("section").mouseleave(function() {
        $(this).css({"background-image": "#959595", "opacity": "1", "transition-duration": "2s"});
    });

    $("#helpDesk").click(function() {
        $("#helpDesk div").slideToggle(500);
    });

    $("#devDay").click(function() {
        $("#devDay div").slideToggle(500);
    });

    $("#cSharp").click(function() {
        $("#cSharp div").slideToggle(500);
    });

    $("#sql").click(function() {
        $("#sql div").slideToggle(500);
    });

    $("#jpo").click(function() {
        $("#jpo div").slideToggle(500);
    });

    $("#econocom").click(function() {
        $("#econocom div").slideToggle(500);
    });

    $("#conf").click(function() {
        $("#conf div").slideToggle(500);
    });
});