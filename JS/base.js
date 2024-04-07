

jQuery(window).on("load", function () {
    
    jQuery('#frmContact').on("submit", function (e) {
        e.preventDefault();
        //alert('Georgian Pizza Delivery', 'Thank you' + $('#name').val() + ' for you contact.');
        alert('Thank you Mx. ' + $('#name').val() + ' for you contact. \nOne email will be send to ' +$('#email').val() + ' very soon');
        $('#frmContact').trigger("reset");
        $('#name').trigger("focus");
        return false;
    });

});