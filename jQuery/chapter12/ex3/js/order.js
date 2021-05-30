$(document).ready(function () {
    var url_resource = "https://607e6dbe02a23c0017e8b4c0.mockapi.io/Resources";
    var url_order = "https://607e6dbe02a23c0017e8b4c0.mockapi.io/Order";
    var checkOutButton = function () {
        if ($('#price-check').text() == 0) {
            $('.btn-info').prop('disabled', true);
        } else {
            $('.btn-info').prop('disabled', false)
        }
    }
    checkOutButton();
    $.ajax({
        url: url_resource,
        method: "GET",
        success: function (data) {
            var pizzas = data;
            var listData = "";
            $.each(pizzas, function (index, object) {
                listData += buildTr(object);
            })

            function buildTr(obj) {
                var data = `
                <tr>
                    <td scope="row"> 
                        ${obj.name} <br>
                        <p>${obj.price}$</p>
                    </td>
                    <td>
                        <div id=${obj.id} class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-danger btn-sub">-</button>
                            <button id="total-price-${obj.id}" name="${obj.name}" type="button" class="btn btn-secondary">${0}</button>
                            <button type="button" class="btn btn-success btn-plus">+</button>
                        </div>
                    </td>
                </tr>
            `
                return data;
            }
            $("tbody").prepend(listData);

            $("tbody").on("click", ".btn-plus", function () {
                var index = $(this).parent().attr("id");
                var pizza = pizzas[index - 1];
                var img = ` <img class="img-${index}" src="${pizza.url_img}" alt="" sizes="" srcset="">`
                $(".data-imgs").append(img);

                var number = parseInt($(`#total-price-${index}`).text())
                number += 1
                $(`#total-price-${index}`).text(number);

                var price = parseInt($(`.total-price`).first().text());
                var total = price + parseInt(pizza.price);
                $(`.total-price`).text(total);

                $('.btn-info').prop('disabled', false);
            })



            $("tbody").on("click", ".btn-sub", function () {
                var index = $(this).parent().attr("id");
                var pizza = pizzas[index - 1];
                $(`.img-${index}`).last().remove();

                var number = parseInt($(`#total-price-${index}`).text())
                if (number > 0) {
                    number -= 1
                    $(`#total-price-${index}`).text(number);

                    var price = parseInt($(`.total-price`).first().text());
                    var total = price - parseInt(pizza.price);
                    $(`.total-price`).text(total);

                    checkOutButton();
                }
            })

            $(".row").on("click", ".btn-warning", function () {
                $(".btn-secondary").text(0);
                $(".data-imgs").children().remove();
                $(`.total-price`).text(0);
                $('.btn-info').prop('disabled', true);
            })

            $("tbody").on("click", ".btn-info", function () {
                order = {};
                var isOK = [];
                $.each($(".btn-secondary"), function (index, object) {
                    var index = $(object).parent().attr("id");
                    var amount = $(object).text();
                    if (pizzas[index - 1]["amount"] < amount) {
                        isOK.push(false);
                        toastr.error('We have ' + pizzas[index - 1]["amount"] + ' ' + pizzas[index - 1]["name"] + ' remaining', 'Not enough resources');
                    } else {
                        isOK.push(true);
                        order[pizzas[index - 1]["name"]] = amount;
                        pizzas[index - 1]["amount"] -= amount;
                    }
                })

                if (isOK.indexOf(false) == -1) {
                    $.ajax({
                        url: url_order + "/",
                        method: "POST",
                        data: order,
                        success: function () {
                            toastr.success('Your order was successful', 'Congratulations!');
                        }
                    })
                    $.each(pizzas, function (index, object) {
                        var pizza_id = index + 1;
                        $.ajax({
                            url: url_resource + "/" + pizza_id,
                            method: "PUT",
                            data: object,
                        })
                    })
                }
                setTimeout(function () {
                    location.reload(true)
                }, 5000);
            })
        }
    })
})