<script type="text/javascript" src="js/form.js"></script>
function validateForm() {
    var error = "";
    if (document.contactform.firstname.value == "") {
        error = error + "Please Enter Your First Name\n";
    }
    if (document.contactform.lastname.value == "") {
        error = error + "Please Enter Your Last Name\n";
    }
    if (document.contactform.email.value == "") {
        error = error + "Please Enter Your Email\n";
    }
    if (document.contactform.message.value == "") {
        error = error + "Please Enter Your Message\n";
    }
    if (error != "") {
        alert(error);
        return false;
    }
    return true;
    
}
