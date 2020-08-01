
var fname_err = false;
var lname_err = false;
var password_err = false;
var pass_confirm_err = false;
var gender_err = false;
var email_err =false;
var phone_err = false;
var address_err = false;
var post_err = false;
var rule_err =false;

function check_fname() {
    var pattern = /^[a-zA-Z]*$/;
    var firstname = document.forms["vForm"]["firstname"].value;
    if (pattern.test(firstname) && firstname != '') {
        msg = "";
        document.getElementById("fname_err").innerHTML = msg;
    } else {
        msg = "نام باید شامل حروف باشد.";
        document.getElementById("fname_err").innerHTML = msg;
        fname_err = true;
    }
}

function check_lname() {
    var pattern = /^[a-zA-Z]*$/;
    var lastname = document.forms["vForm"]["lastname"].value;
    if (pattern.test(lastname) && lastname != '') {
        msg = "";
        document.getElementById("lname_err").innerHTML = msg;
    } else {
        msg = "نام خانوادگی باید شامل حروف باشد.";
        document.getElementById("lname_err").innerHTML = msg;
        lname_err = true;
    }
}

function check_password() {
    var password = document.forms["vForm"]["password"].value;
    if (password.length < 6) {
        msg = "رمزعبور بیش از 6 کاراکتر باشد.";
        document.getElementById("password_err").innerHTML = msg;
        password_err =  true;
    } else {
        msg = "";
        document.getElementById("password_err").innerHTML = msg;
    }
}
function check_confirm_password() {
    var password = document.forms["vForm"]["password"].value;
    var pass_confirm = document.forms["vForm"]["pass_confirm"].value;
    if ( password != pass_confirm || pass_confirm == '') {
        msg = "خطا در تایید رمزعبور.";
        document.getElementById("pass_confirm_err").innerHTML = msg;
        pass_confirm_err = true;
    } else {
        msg = "";
        document.getElementById("pass_confirm_err").innerHTML = msg;
    }
}

function check_gender() {
    var gender = document.forms["vForm"]["gender"].value;
    if (gender == 0) {
        msg = "خطا در انتخاب جنسیت";
        document.getElementById("gender_err").innerHTML = msg;
        gender_err =  true;
    } else {
        msg = "";
        document.getElementById("gender_err").innerHTML = msg;
    }
}

function check_email() {
    var email = document.forms["vForm"]["email"].value;
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(pattern.test(email) && email != '') {
        msg = "";
        document.getElementById("email_err").innerHTML = msg;    
    } else {
        msg = "خطا در آدرس ایمیل";
        document.getElementById("email_err").innerHTML = msg;
        email_err = true;
    }
}

function check_phone() {
    var phone = document.forms["vForm"]["phone"].value;
    if (phone == "") {
        msg = "خطا در شماره تماس";
        document.getElementById("phone_err").innerHTML = msg;
        phone_err = true;
    } else {
        msg = "";
        document.getElementById("phone_err").innerHTML = msg;
    }
}

function check_address() {
    var address = document.forms["vForm"]["address"].value;
    if (address == "") {
        msg = "آدرس وارد نشده است.";
        document.getElementById("address_err").innerHTML = msg;
        address_err =true;
    } else {
        msg = "";
        document.getElementById("address_err").innerHTML = msg;
    }
}

function check_post() {
    var post = document.forms["vForm"]["post"].value;
    if (post == "") {
        msg = "کد پستی وارد نشده است.";
        document.getElementById("post_err").innerHTML = msg;
        post_err = false;
    } else {
        msg = "";
        document.getElementById("post_err").innerHTML = msg;
    }
}

function check_rule() {
    var rule = document.forms["vForm"]["rule"].checked;
    if (rule == false) {
        msg = "موافقت با قوانین و ضوابط سایت الزامی ست.";
        document.getElementById("rule_err").innerHTML = msg;
        rule_err = true;
    } else { 
        msg = "";
        document.getElementById("rule_err").innerHTML = msg;
    }
}

function FormValidate() {
    fname_err = false;
    lname_err = false;
    password_err = false;
    pass_confirm_err = false;
    gender_err = false;
    email_err = false;
    phone_err = false;
    address_err = false;
    post_err = false;
    rule_err =false;

    check_fname();
    check_lname();
    check_password();
    check_confirm_password();
    check_gender();
    check_email();
    check_phone();
    check_address();
    check_post();
    check_rule();

    if (fname_err === false && lname_err === false && password_err === false && pass_confirm_err === false &&
        gender_err === false && email_err === false && phone_err === false && address_err === false &&
        post_err === false && rule_err === false) {
            return true;
        } else {
            return false;
        }
}