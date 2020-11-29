function validateForm() {
   var errors = document.getElementById("errors");
   var email = document.forms["auth-form"]["email"].value;
   var password = document.forms["auth-form"]["password"].value;

   if (email == "") {
      errors.innerHTML = "Email must be filled out!";
   }
   if (!email.includes('@')) {
      errors.innerHTML = "Email must contain '@' character!";
   }
   if (!email.includes('.')) {
      errors.innerHTML = "Email must contain '.' character!";
   }
   if (email.length < 5) {
      errors.innerHTML = "Email must contain at least 5 symbols!";
   }

   if (password.length < 6) {
      errors.innerHTML = "Password must contain at least 6 symbols!";
   }
   if (!password.match(/[A-Z]/)) {
      errorMessageElement.innerHTML = "Password must contain at least 1 upper letter!";
   }
   if (!password.match(/[0-9]/)) {
      errorMessageElement.innerHTML = "Password must contain at least 1 digit!";
   }
   if (!password.match(/[!@#$%^&]/)) {
      errorMessageElement.innerHTML = "Password must contain at least 1 from the symbols '!@#$%^&'!";
   }
   if (errors.innerHTML != "") {
      return false;
   }

   if (form.id === "register-form") {
      register(username, email, password);
      alert("The registration is successful!");
   } else {
      login(email, password);
      alert("Login is successful!");
   }
}

function login(email, password) {
   var takenEmail = email.value;
   var takenPassword = password.value;
   window.auth.login(takenEmail, takenPassword, (successful, errorMessage) => {
      if (successful) {
         window.location.href = 'posts.html';
      } else {
         errors.innerHTML = errorMessage;
      }
   })
}

function register(username, email, password) {
   var takenUsername = username.value;
   var takenEmail = email.value;
   var takenPassword = password.value;
   window.auth.register(takenUsername, takenEmail, takenPassword, (successful, errorMessage) => {
      if (successful) {
         window.location.href = 'posts.html';
      } else {
         errors.innerHTML = errorMessage;
      }
   })
}

document.getElementsByClassName("auth-button").addEventListener("click", validateForm());