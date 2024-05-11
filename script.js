document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();


    let phoneNumber = document.getElementById('phone').value;
    let pincode = document.getElementById('zip').value;

    if (phoneNumber.length !== 10) {
        alert('Please enter a 10-digit valid phone number.');
        return; 
    }

    if (pincode.length !== 6) {
        alert('Please enter a 6-digit valid pincode.');
        return;
    }
function validateEmail(){
    const email=document.getElementById('Email');
    var checkemail=email.value;
    if(checkemail.includes("@")){
        alert("email is valid");
    }
    else{
        alert("Email is not valid must contain '@'.")
    }
}

    alert('Registration successful!'); // For demonstration purposes

    document.getElementById('registrationForm').submit();
});