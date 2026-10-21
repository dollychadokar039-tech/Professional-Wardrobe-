/* =====================================
   PROFESSIONAL WARDROBE
   CHECKOUT.JS
===================================== */

const placeOrder = document.getElementById("placeOrder");

placeOrder.addEventListener("click", function () {

    const name = document.getElementById("fullName").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const address = document.getElementById("address").value.trim();

    const city = document.getElementById("city").value.trim();

    const payment = document.getElementById("payment").value;

    if (name === "" || phone === "" || address === "" || city === "") {

        alert("Please fill all details.");

        return;

    }

    localStorage.setItem("customerName", name);
    localStorage.setItem("paymentMode", payment);

    alert("✅ Order Placed Successfully!");

    window.location.href = "success.html";

});