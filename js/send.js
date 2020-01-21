function sendEmail() {
    var subject = document.getElementById("subject").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    Email.send({
        Host: "smtp.gmail.com",
        Username: "aryanbhalla66@gmail.com",
        Password: "BhallaAryan1234",
        To: 'aryanbhalla66@gmail.com',
        From: email,
        Subject: subject,
        Body: message,
    }).then(
        message => alert("mail sent successfully")
    );
}