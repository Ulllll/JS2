function valid() {
let name = document.getElementsByClassName('form')[0]
let tel = document.getElementsByClassName('form')[1]
let email = document.getElementsByClassName('form')[2]
let error1 = document.getElementById('error1')
let error2 = document.getElementById('error2')
let error3 = document.getElementById('error3')
let none_reg_n = /[^A-Z,a-z]/g
let reg_t = /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/
let reg_e = /.+@.+\..+/
let result = (name.value.match(none_reg_n)) ? true:false
let result1 = (tel.value.match(reg_t)) ? true:false
let result2 = (email.value.match(reg_e)) ? true:false

if (result != true) {
    name.style.borderColor = 'green'
}
else{
        error1.style.display = 'block'
        name.style.borderColor = 'red'
}
if (result1 == true) {
        tel.style.borderColor = 'green'
}
else{
       error2.style.display = 'block'
        tel.style.borderColor = 'red'
}

if (result2 != true) {
    email.style.borderColor = 'red'
    error3.style.display = 'block'
}
else{
        email.style.borderColor = 'green'
}


}