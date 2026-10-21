/* ======================================
   PROFESSIONAL WARDROBE
   CART.JS
====================================== */

let quantityElements = document.querySelectorAll(".quantity");

let removeButtons = document.querySelectorAll(".remove-btn");

let totalPrice = 4897;

let totalText =
    document.querySelector(".cart-summary strong");

quantityElements.forEach(function(item){

    let minus=item.children[0];

    let number=item.children[1];

    let plus=item.children[2];

    plus.addEventListener("click",function(){

        let qty=parseInt(number.innerHTML);

        qty++;

        number.innerHTML=qty;

        totalPrice+=500;

        totalText.innerHTML="₹"+totalPrice;

    });

    minus.addEventListener("click",function(){

        let qty=parseInt(number.innerHTML);

        if(qty>1){

            qty--;

            number.innerHTML=qty;

            totalPrice-=500;

            totalText.innerHTML="₹"+totalPrice;

        }

    });

});

removeButtons.forEach(function(button){

    button.addEventListener("click",function(){

        button.parentElement.remove();

        alert("Item Removed from Cart");

    });

});

let checkout=document.querySelector(".checkout-btn");

checkout.addEventListener("click",function(){

    alert("🎉 Order Placed Successfully!");

});