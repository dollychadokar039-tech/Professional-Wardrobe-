/* =====================================
   PROFESSIONAL WARDROBE
   SIGNUP.JS
===================================== */

const signupBtn = document.getElementById("signupBtn");

signupBtn.addEventListener("click", function () {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (name === "" || email === "" || password === "") {

        alert("Please fill all fields.");
        return;

    }

    const user = {

        name: name,
        email: email,
        password: password

    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("🎉 Account Created Successfully!");

    window.location.href = "login.html";

});