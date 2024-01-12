const title = document.getElementById("title");
const nameFiled = document.getElementById("nameField");
const signinBtn = document.getElementById("signinBtn");
const signupBtn = document.getElementById("signupBtn");

signupBtn.onclick = function () {
    title.innerHTML = "Sign Up";
    nameFiled.style.display = "block";
}
signinBtn.onclick = function () {
    title.innerHTML = "Login";
    nameFiled.style.display = "none";
}