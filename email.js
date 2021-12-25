(function () {
    emailjs.init("user_tXNhh0xg6IHcxwjxVkxE1");
})();
function hide (elements) {
    elements = elements.length ? elements : [elements];
    for (var index = 0; index < elements.length; index++) {
      elements[index].style.display = 'none';
    }
  }
  function show (elements, specifiedDisplay) {
    elements = elements.length ? elements : [elements];
    for (var index = 0; index < elements.length; index++) {
      elements[index].style.display = specifiedDisplay || 'block';
    }
  }
function deletediv () {
  hide(document.getElementById('loadingerror'));

}
function deletediv2 () {
  hide(document.getElementById('failedemail'));

}
function deletediv3 () {
  hide(document.getElementById('successemail'));

}
function sendmail() {
    document.getElementById('submitform').classList.add('is-loading');
    let fullName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let userMessage = document.getElementById("message").value;
        var contactParams = {
            from_name: fullName,
            from_email: userEmail,
            message: userMessage
        };
        emailjs.send('service_f1mm1r4', 'template_tu8jxt2', contactParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status);
            document.getElementById("email_display").innerHTML = 'Your email has been successfully sent! A response will be submitted to: ' + userEmail;
            hide(document.getElementById('contactbox'));
            show(document.getElementById('successemail'));
         }, function(error) {
            console.log('FAILED:', error);
            hide(document.getElementById('contact-form'));
            show(document.getElementById('failedemail'));
         });
}