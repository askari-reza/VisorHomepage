// JavaScript Document
function register() {
  var rules = document.getElementById("rules");
  rules.style.display = "block";
  window.location.hash = "rules";
}
function redirToForm(){
  var terms = document.getElementById("accepted-rules");
  if (terms.checked) {
    window.location.href = "https://goo.gl/forms/PCyvr4pZQL2JgfJw2";
  } else {
    alert("پذیرفتن مقررات الزامی است!")
  }
}
