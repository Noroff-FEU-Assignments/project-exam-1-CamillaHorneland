const form = document.querySelector("#contactContainer");
const yourName = document.querySelector("#yourName");
const yourNameError = document.querySelector("#yourNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const messageYou = document.querySelector("#messageYou");
const button = document.querySelector("btn");

function validateForm(event) {
    event.preventDefault();

    var hasErrors = false;

    if(checkLength(yourName.value, 5)===true) {
        yourNameError.style.display = "none";
    } else {
        hasErrors = true;
        yourNameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        hasErrors = true;
        emailError.style.display = "block";
    }

     if (checkLength(subject.value, 15) === true) {
        subjectError.style.display = "none";
    } else {
        hasErrors = true;
        subjectError.style.display = "block";
    }

      if (checkLength(message.value, 25) === true) {
        messageError.style.display = "none";
    } else {
        hasErrors = true;
        messageError.style.display = "block";
    }

    //    if(!hasErrors) {
    // //    messageYou.innerHTML = '<div class="messageYou"><h1>Your message has been sent..</h1><img src="/images/heart.png"><a href="index.html">Home</a></div>';
    //    form.reset();
    // }
      if (!hasErrors) {
        submitForm();
     }

  console.log("hello");
}

// form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

// function submitForm() {
//   const url = "https://camillahorneland.no/slime-care/wp-json/wp/v2/posts";
//   const data = {
//     title: document.querySelector('#subject').value,
//     content: document.querySelector('#message').value,
//     // status: 'publish'
//     const formData = new FormData(form)
//   };

function submitForm() {
  const url = "https://camillahorneland.no/slime-care/wp-json/wp/v2/contacts";
    const data = {
    title: document.querySelector('#subject').value,
    content: document.querySelector('#message').value,
    status: 'draft',
       meta: {
      'yourName': document.querySelector('#yourName').value,
      'email': document.querySelector('#email').value
    }
  };

  fetch(url, {
    method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('togetForm' + ':' + '^@r*elWU(cxHPC$h*DMH1M%a')
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    messageYou.innerHTML = '<div class="messageYou"><h1>Your message has been sent..</h1><img src="/images/heart.png"><a href="index.html">Home</a></div>';
    form.reset();
})
  .catch((error) => {
    console.error('Error:', error);
  });
}

// form.addEventListener('submit', function(event) {
//   event.preventDefault();
//   submitForm();
// });

