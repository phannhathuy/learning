$(document).ready(function () {
    var url = "https://607ac91cbd56a60017ba310d.mockapi.io/users";
    var isEdit = false;
    var clearForm = function () {
        $("#name").val("");
        $("#email").val("");
        $("#phone").val("");
    }
    clearForm();
    $.ajax({
        url: url,
        method: "GET",
        success: function (data) {
            var users = data;
            var listData = "";

            $.each(users, function (index, object) {
                listData += buildTr(object)
            })

            function buildTr(obj) {
                var data = `
                <tr>
                    <th scope="row">${obj.id}</th>
                    <td>${obj.name}</td>
                    <td>${obj.email}</td>
                    <td>${obj.phone}</td>
                    <td id="${obj.id}">
                        <button type="button" class="btn btn-info btn-edit" data-toggle="modal" data-target="#exampleModal">
                            Edit
                        </button>
                        <button type="button" class="btn btn-danger">
                            Delete
                        </button>
                    </td>
                </tr>
                `
                return data
            }

            $("tbody").prepend(listData);

            $("#add-user").submit(function (e) {
                var user_id = $("#user-id").val();
                var method = isEdit ? "PUT" : "POST";

                function changePosted(data) {
                    $("tbody").prepend(buildTr(data));
                    users.unshift(data);
                }

                function changePuted(data) {
                    var index = users.findIndex(function (user) {
                        return user.id == user_id;
                    })

                    delete data['createdAt'];

                    var arr = Object.values(data)
                    $(`#${user_id}`).siblings().each(function (index, item) {
                        $(item).text(arr[index]);
                    });

                    users[index] = data;
                }

                $.ajax({
                    url: url + "/" + user_id,
                    method: method,
                    data: $(this).serialize(),
                    success: function (data) {
                        if (isEdit) {
                            changePuted(data);
                        } else {
                            changePosted(data)
                        }
                    }
                })

                $("#close-modal").click();
                e.preventDefault();
                if (isEdit) {
                    toastr.success('User information was changed successfully', 'Congratulation!');
                } else {
                    toastr.success('New user information was added successfully', 'Congratulation!');
                };

                clearForm();
            })

            $("tbody").on("click", ".btn-danger", function () {
                var btn = $(this);
                var user_id = btn.parent().attr("id");

                $.ajax({
                    url: url + "/" + user_id,
                    method: "DELETE",
                    success: function (data) {
                        var index = users.findIndex(function (user) {
                            return user.id == user_id;
                        })
                        users.splice(index, 1);
                        btn.parents("tr").remove();
                        toastr.success('User information was deleted successfully', 'Done!')
                    }
                })

            })

            $("tbody").on("click", ".btn-edit", function () {
                isEdit = true;
                var btn = $(this);
                var user_id = btn.parent().attr("id");

                $.ajax({
                    url: url + "/" + user_id,
                    method: "GET",
                    success: function (data) {
                        $("#name").val(data.name);
                        $("#email").val(data.email);
                        $("#phone").val(data.phone);
                        $("#user-id").val(data.id);
                    }
                })
            })

            $(".btn-add").click(function () {
                $("#user-id").val("");
                isEdit = false;
            })
            $(".loader").hide();
        }
    })
})