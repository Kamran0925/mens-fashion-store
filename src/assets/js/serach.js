$(document).ready(function() {
    $("#search_input_box").hide();
    $("#search_1").on("click", function() {
        $("#search_input_box").slideToggle();
        $("#search_input").focus();
    });
    $("#close_search").on("click", function() {
        $('#search_input_box').slideUp(500);
    });
});

$(document).ready(function() {
    $(".navbar-toggler").on("click", function() {
        $(".navbar-collapse").slideToggle();
    });
});