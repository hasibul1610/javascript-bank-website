// Submit Button handler 
document.getElementById('login-button').addEventListener('click',function(){
    // Getting login Email 
    const loginEmailBox = document.getElementById('input-email');
    const loginEmail= loginEmailBox.value ;

    // Getting login Password      
    const loginPasswordBox = document.getElementById('login-password')  ;
    const loginPassword = loginPasswordBox.value ;

    // Email and password validation 
    if((loginEmail=='shanto@gmail.com') && (loginPassword=='shanto')){
        window.location.href = "banking.html";

    }



})