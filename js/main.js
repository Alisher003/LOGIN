let elBoxLeftBtn = document.querySelector(".box-bacground-left__btn");
let elBoxRightBtn = document.querySelector(".box-bacground-right__btn");
let elBoxAuto = document.querySelector(".box-auto");
let elboxAutoSignUp = document.querySelector(".box-auto-SignUp");
let elboxAutoLogin = document.querySelector(".box-auto-login");
let elBtnLogin = document.querySelector(".btn-login");
let elBtnSignUp = document.querySelector(".btn-SignUp");

elboxAutoLogin.style.display = "none";


elBoxLeftBtn.addEventListener("click", function() {
  elBoxAuto.classList.add("box-auto-right")
  elBoxAuto.classList.remove("box-auto-left")
  elboxAutoSignUp.style.display = "inline"
  elboxAutoLogin.style.display = "none";
})

elBoxRightBtn.addEventListener("click", function() {
  elBoxAuto.classList.add("box-auto-left")
  elBoxAuto.classList.remove("box-auto-right")
  elboxAutoSignUp.style.display = "none"
  elboxAutoLogin.style.display = "inline";
})

// RESPONSIVE 

elBtnLogin.addEventListener("click", function() {
  elBoxAuto.classList.add("box-auto-left")
  elBoxAuto.classList.remove("box-auto-right")
  elboxAutoSignUp.style.display = "none"
  elboxAutoLogin.style.display = "inline";
})

elBtnSignUp.addEventListener("click", function() {
  elBoxAuto.classList.add("box-auto-left")
  elBoxAuto.classList.remove("box-auto-right")
  elboxAutoSignUp.style.display = "inline"
  elboxAutoLogin.style.display = "none";
})


