

jQuery(window).on("load", function () {

    const btnMobile = document.getElementById("btn-mobile");
    function toggleMenu() {
      const nav = document.getElementById("nav")
      nav.classList.toggle("active");
    }
    btnMobile.addEventListener("click", toggleMenu);

    jQuery('#frmContact').on("submit", function (e) {
        e.preventDefault();
        //alert('Georgian Pizza Delivery', 'Thank you' + $('#name').val() + ' for you contact.');
        alert('Thank you Mx. ' + $('#name').val() + ' for you contact. \nOne email will be send to ' +$('#email').val() + ' very soon');
        $('#frmContact').trigger("reset");
        $('#name').trigger("focus");
        return false;
    });

});