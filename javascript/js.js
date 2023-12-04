function sendInn() {
  let email;
  let password;
  email = document.getElementById("email").value;
  password = document.getElementById("passord").value;
  gjentapassord = document.getElementById("gjentapassord").value;
  console.log(email, password, gjentapassord);

  if (password === gjentapassord) {
    localStorage.setItem("passord", password);
    localStorage.setItem("email", email);

    window.location.href = "http://127.0.0.1:5501/index.html";
  } else {
    console.log("passord are not the same");
  }
}
function loggin() {
  console.log("logger inn");
  let email = document.getElementById("email").value;
  let password = document.getElementById("passord").value;

  let localStoragepassword = localStorage.getItem("passord");
  let localStorageemail = localStorage.getItem("email");
  console.log(email, password, localStorageemail, localStoragepassword);
  if (email === localStorageemail && password === localStoragepassword) {
    window.location.href = "http://127.0.0.1:5501/html/velkommen.html";
  }
}
