let login = document.getElementById("login-modal");
let signup = document.getElementById("signup-modal");
let joinGroupBtn = document.getElementById("join-group-btn");
let closeBtn = document.getElementsByClassName("close-btn");
let loginModal = new bootstrap.Modal(document.getElementById("login-lg"));
let signupModal = new bootstrap.Modal(document.getElementById("signup-lg"));
joinGroupBtn.addEventListener("click", openLogin);

closeBtn[0].addEventListener("click", close);
closeBtn[1].addEventListener("click", close);
function close() {
  signup.classList.remove("active");
  login.classList.remove("active");
}
function openLogin() {
  if (window.innerWidth < 768) {
    signup.classList.remove("active");
    login.classList.add("active");
  } else {
    signupModal.hide();
    loginModal.show();
  }
}
function openSignup() {
  if (window.innerWidth < 768) {
    login.classList.remove("active");
    signup.classList.add("active");
  } else {
    signupModal.show();
    loginModal.hide();
  }
}
