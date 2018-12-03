$( document ).ready(function() {

$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".menu__button" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".menu__button" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".menu__button" ).show();
});
});

});
