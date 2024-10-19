$(document).ready(function () {

    $('.purchase-btn').on('click', function () {
        const package = $(this).data('package');
        const price = $(this).data('price');

        $('#package').val(package);
        $('#price').val(price);
    });

    $('#purchaseForm').on('submit', function (event) {
        event.preventDefault(); 

        alert('Order placed successfully!');
        $('#purchaseModal').modal('hide'); 
        $('#purchaseForm')[0].reset(); 
    });
});
