document.getElementById('verificationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your form submission logic here
    alert('Verification form submitted!');
});

document.getElementById('resendCode').addEventListener('click', function(event) {
    event.preventDefault();
    // Add logic to resend the verification code here
    alert('Verification code resent!');
});
