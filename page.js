function validatpass(){
    let password=document.getElementById('password');
    let out = document.getElementById('out');
    let passlen = password.length;
    if(passlen >=6){
        out = "Length should be equal to 8 "
    }
}