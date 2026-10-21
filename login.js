/* =====================================
   PROFESSIONAL WARDROBE
   LOGIN.JS
===================================== */

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function () {

    const email = document.getElementById("loginEmail").value.trim();

    const password = document.getElementById("loginPassword").value.trim();

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {

        alert("No account found. Please Sign Up first.");

        return;

    }

    if (email === user.email && password === user.password) {

        alert("🎉 Login Successful!");

        localStorage.setItem("loggedIn", "true");

        localStorage.setItem("loggedUser", user.name);

        window.location.href = "index.html";

    }

    else {

        alert("❌ Invalid Email or Password.");

    }

});