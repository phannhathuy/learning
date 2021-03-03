var $ = function(id) {
    return document.getElementById(id);
};

var joinList = function () {
    var email_address1 = $("email_address1").value;
    var email_address2 = $("email_address2").value;
    var isValid = true;

    if (email_address1 == "") {
        $("email_address1_error").firstChild.nodeValue =
            "This field is required";
        isValid = false;
    } else {
        $("email_address1_error").firstChild.nodeValue = "";
    }

    if (email_address1 != email_address2) {
        $("email_address2_error").firstChild.nodeValue = 
            "This entry must equal to first entry.";
        isValid = false;
    } else {
        $("email_address2_error").firstChild.nodeValue = "";
    }

    if ($ ("first_name").value == "") {
        $("first_name_error").firstChild.nodeValue =
            "This field is required.";
        isValid = false;
    } else {
        $("first_name_error").firstChild.nodeValue ="";
    }

    if (isValid) {
        $("email_form").submit();
    }
};
window.onload = function() {
    $("join_list").onclick = joinList;
    $("email_address").focus();
};