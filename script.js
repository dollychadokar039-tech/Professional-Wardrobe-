// =========================
// WISHLIST
// =========================

let wishlist = 0;

const wishlistCount = document.getElementById("wishlistCount");



// =========================
// CART
// =========================

let cart = 0;

const cartButtons = document.querySelectorAll(".cartBtn");

const cartCount = document.getElementById("cartCount");

cartButtons.forEach(function(button){

    button.addEventListener("click",function(){

        cart++;

        if(cartCount){

            cartCount.innerHTML =
                "🛒 Cart (" + cart + ")";

        }

        button.innerHTML = "✔ Added";

        button.disabled = true;

    });

});

// =========================
// SEARCH
// =========================

const searchInput = document.getElementById("searchInput");

if(searchInput){

    searchInput.addEventListener("keyup",function(){

        let value =
            searchInput.value.toLowerCase();

        let cards =
            document.querySelectorAll(".product-card");

        cards.forEach(function(card){

            let title =
                card.querySelector("h3").innerText.toLowerCase();

            if(title.includes(value)){

                card.style.display="block";

            }

            else{

                card.style.display="none";

            }

        });

    });

}
// =========================
// SMART OUTFIT RECOMMENDATION
// =========================

const recommendBtn = document.getElementById("recommendBtn");

if(recommendBtn){

    recommendBtn.addEventListener("click",function(){

        const gender =
            document.getElementById("gender").value;

        const budget =
            document.getElementById("budget").value;

        const occasion =
            document.getElementById("occasion").value;

        const result =
            document.getElementById("result");

        result.innerHTML =
            `
        <h3>Recommended Office Look</h3>

        <p><strong>Gender:</strong> ${gender}</p>

        <p><strong>Budget:</strong> ${budget}</p>

        <p><strong>Occasion:</strong> ${occasion}</p>

        <br>

        <p>
        👔 White Shirt + Black Trouser +
        Leather Shoes + Matching Belt
        </p>
        `;

    });

}

// =========================
// NEWSLETTER
// =========================

const subscribeBtn =
    document.querySelector(".newsletter button");

if(subscribeBtn){

    subscribeBtn.addEventListener("click",function(){

        const email =
            document.querySelector(".newsletter input").value;

        if(email==""){

            alert("Please enter your email.");

        }

        else{

            alert("🎉 Thank you for subscribing!");

        }

    });

}

// =========================
// HERO BUTTONS
// =========================

const shopBtn =
    document.querySelector(".shop-btn");

if(shopBtn){

    shopBtn.addEventListener("click",function(){

        document
            .querySelector(".products")
            .scrollIntoView({

                behavior:"smooth"

            });

    });

}

const exploreBtn =
    document.querySelector(".explore-btn");

if(exploreBtn){

    exploreBtn.addEventListener("click",function(){

        document
            .querySelector(".trending")
            .scrollIntoView({

                behavior:"smooth"

            });

    });

}

// =========================
// PAGE LOADED
// =========================

window.onload=function(){

    console.log("Professional Wardrobe Loaded Successfully.");

};
// =========================
// SHOW LOGGED IN USER
// =========================

const welcomeUser = document.getElementById("welcomeUser");

const loggedUser = localStorage.getItem("loggedUser");

if (welcomeUser && loggedUser) {

    welcomeUser.innerHTML = "👋 Welcome, " + loggedUser;

// ===================================
// DYNAMIC PRODUCTS
// ===================================

    const productsContainer =
        document.getElementById("productsContainer");

    if (productsContainer) {

        productsContainer.innerHTML = "";

        products.forEach(function(product) {

            productsContainer.innerHTML += `

            <div class="product-card">

                <img src="${product.image}" alt="${product.name}">

                <h3>${product.name}</h3>

                <p>₹${product.price}</p>

                <button class="wishlistBtn">
                    ❤️ Wishlist
                </button>

                <button class="cartBtn">
                    🛒 Add to Cart
                </button>

                <button class="viewBtn">
                    View Details
                </button>

            </div>

        `;

        });

    }}

/* ===================================
   SAVE PRODUCTS TO WISHLIST
=================================== */

const productArea = document.getElementById("productsContainer");

if (productArea) {
    productArea.addEventListener("click", function (event) {

        const button = event.target.closest(".wishlistBtn");

        if (!button) return;

        const productCard = button.closest(".product-card");
        const productName = productCard.querySelector("h3").innerText;
        const product = products.find(item => item.name === productName);

        if (!product) return;

        let savedWishlist =
            JSON.parse(localStorage.getItem("wishlist")) || [];

        const alreadyAdded = savedWishlist.some(
            item => item.id === product.id
        );

        if (alreadyAdded) {
            alert("This product is already in your Wishlist ❤️");
            return;
        }

        savedWishlist.push(product);

        localStorage.setItem(
            "wishlist",
            JSON.stringify(savedWishlist)
        );

        button.innerText = "❤️ Added";
        alert(product.name + " added to Wishlist!");
    });
}

/* ===================================
   PRODUCT BUTTONS
=================================== */

const productArea = document.getElementById("productsContainer");

if (productArea) {
    productArea.addEventListener("click", function(event) {

        const button = event.target.closest("button");
        if (!button) return;

        const card = button.closest(".product-card");
        if (!card) return;

        const name = card.querySelector("h3").innerText;
        const product = products.find(item => item.name === name);

        if (!product) return;

        // WISHLIST BUTTON
        if (button.classList.contains("wishlistBtn")) {

            let wishlist =
                JSON.parse(localStorage.getItem("wishlist")) || [];

            if (wishlist.some(item => item.id === product.id)) {
                alert("Already added to Wishlist ❤️");
                return;
            }

            wishlist.push(product);

            localStorage.setItem("wishlist", JSON.stringify(wishlist));

            button.innerText = "❤️ Added";
            alert(name + " added to Wishlist!");
        }

        // CART BUTTON
        if (button.classList.contains("cartBtn")) {

            let cart =
                JSON.parse(localStorage.getItem("cart")) || [];

            cart.push(product);

            localStorage.setItem("cart", JSON.stringify(cart));

            button.innerText = "✔ Added";
            alert(name + " added to Cart!");
        }

        // VIEW DETAILS BUTTON
        if (button.classList.contains("viewBtn")) {
            alert(
                name + "\nPrice: " +
                card.querySelector(".product-price, p").innerText
            );
        }
    });
}