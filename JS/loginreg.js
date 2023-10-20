function checkform() {
    var account = document.getElementById("account");
    var password = document.getElementById("password");
    var password2 = document.getElementById("password2");
    if(account.value!=""){
        if (account.value.length<8){
            alert("Tên đăng nhập phải dài hơn 8 ký tự!");
            return false;
        }
    }else{
        alert("Vui lòng nhập tên đăng nhập!");
        account.focus();
        return false;
    }
    if(password.value!=""){
        if (password.value.length<8){
            alert("Mật khẩu phải dài hơn 8 ký tự!");
            return false;
        }
    }else{
        alert("Vui lòng nhập mật khẩu!");
        password.focus();
        return false;
    }
    if(password2.value!=""){
        if (password2.value!=password.value){
            alert("Mật khẩu nhập lại không trùng khớp!");
            password2.focus();
            return false;
        }
    }else{
        alert("Vui lòng nhập lại mật khẩu!");
        password2.focus();
        return false;
    }
    var phone = document.getElementById("phone");
    var regexPhone = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/
    if (phone.value!=""){
        if (regexPhone.test(phone)==false){
            alert("Số điện thoại bạn nhập không hợp lệ!");
        }
    }else{
        alert("Vui lòng nhập số điện thoại!");
        return false;
    }
    
    var email = document.getElementById("email");
    var regexEmail=/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    if(email.value!=""){
        if(regexEmail.test(email)==false){
            alert("Email bạn nhập không hợp lệ!");
            return false;
        }
    }else{
        alert("Vui lòng nhập email!")
    }
}

