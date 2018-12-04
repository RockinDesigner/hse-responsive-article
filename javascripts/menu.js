$( document ).ready(function() {

$( ".menu__cross" ).hide();
$( ".menu__hamburger" ).hide();
$( ".menu__button" ).click(function() {
$( ".menu__hamburger" ).slideToggle( "slow", function() {
$( ".menu__button" ).hide();
$( ".menu__cross" ).show();
});
});

$( ".menu__cross" ).click(function() {
$( ".menu__hamburger" ).slideToggle( "slow", function() {
$( ".menu__cross" ).hide();
$( ".menu__button" ).show();
});
});

});
