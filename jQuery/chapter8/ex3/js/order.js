$(document).ready(function () {
    var totalPrice = 3;
    $('.number_item').val(0);
    var updatePrice = function () {
        var priceList = $('.item_price').map(function () {
            return $(this).text();
        }).get();
        var amountList = $('.number_item').map(function () {
            return $(this).val();
        }).get();
        var total = 3;
        for (var i = 0; i < priceList.length; i++) {
            var price = parseFloat(priceList[i]);
            var amount = parseFloat(amountList[i]);
            total += price * amount;
        }
        totalPrice = total.toFixed(2);
        $('.checkOutPrice').text(totalPrice);
        $('.totalPrice').text(totalPrice);
    }
    var updateImage = function (urlImage, buttonName) {
        switch (buttonName) {
            case 'minus_button':
                $('.ingredientContainer[style*="background-image: url(' + urlImage + ')"]').last().remove();
                break;
            case 'plus_button':
                var newDiv = `
                <div class="ingredientContainer" style="background-image: url(${urlImage})"></div>
                `
                $("#ingredient").append(newDiv);
                break;
            case 'reset_button':
                $('.ingredientContainer').not("#default").remove();
                break;
        }
    }
    updatePrice();
    $('#row2').each(function () {
        $(this).on('click', ':button', function (e) {
            e.preventDefault();
            switch (this.className) {
                case 'minus_button':
                    currentVal = parseInt($(this).next().val());
                    if (currentVal > 0) {
                        $(this).next().val(currentVal - 1);
                        var url = $(this).next().data('url');
                        updateImage(url, this.className);
                    }
                    break;
                case 'plus_button':
                    currentVal = parseInt($(this).prev().val());
                    $(this).prev().val(currentVal + 1);
                    var url = $(this).prev().data('url');
                    updateImage(url, this.className);
                    break;
                case 'reset_button':
                    $('.number_item').val(0);
                    updateImage(url, this.className);
                    break;
            }
            updatePrice();
        });
    })
})