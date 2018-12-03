$( document ).ready(function() {

$( ".cross" ).hide();
$( ".menu__hamburger" ).hide();
$( ".menu__button" ).click(function() {
$( ".menu__hamburger" ).slideToggle( "slow", function() {
$( ".menu__button" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu__hamburger" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".menu__button" ).show();
});
});

});
