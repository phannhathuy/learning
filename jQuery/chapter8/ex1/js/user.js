$(document).ready(function(){
    var users = [
        {
            id: "001",
            name: "NvanA",
            email: "NvanA@gmail.com",
            phone: "112243843784"
        }, 
        {   
            id: "002",
            name: "NvanB",
            email: "NvanB@gmail.com",
            phone: "112243843784"
        },
        {   
            id: "003",
            name: "NvanC",
            email: "NvanC@gmail.com",
            phone: "112243843784"
        },
        {
            id: "004",
            name: "NvanD",
            email: "NvanD@gmail.com",
            phone: "112243843784"
        }
    ]



    var listData = ""
    users.forEach(function(obj){
        listData+= buildTr(obj)
    })

    function buildTr(obj){
        var data = `
        <tr>
            <th scope="row">${obj.id}</th>
            <td>${obj.name}</td>
            <td>${obj.email}</td>
            <td>${obj.phone}</td>
            <td id="${obj.id}">
                <button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModal">
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

    $("#add-user").submit(function(e){
        var name = $("#name").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var obj = {
            name, email, phone, id: "00"+(users.length+1)
        }
        users.unshift(obj);
        $("tbody").prepend(buildTr(obj));
        $("#close-modal").click();
        e.preventDefault();
    })

    $("tbody").on("click", ".btn-danger", function(){
        var user_id = $(this).parent().attr("id");
        var index = users.findIndex(function(user){
            return user.id == user_id;
        })
        users.splice(index, 1);
        $(this).parents("tr").remove();
    })

})