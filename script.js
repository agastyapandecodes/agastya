// script.js
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    var addCartButtons = document.getElementsByClassName('cartItemButton');
    for (var i = 0; i < addCartButtons.length; i++) {
        var button = addCartButtons[i];
        button.addEventListener('click', addCartClicked);
    }

    // Checkout Button
    document.getElementById('checkoutButton').addEventListener('click', function() {
        window.location.href = 'checkout.html';
    });
}

function addCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement;
    var getDressName = shopItem.getElementsByClassName('dressName')[0].innerText;
    var getpriceVal = shopItem.getElementsByClassName('priceVal')[0].innerText;
    var getImgSrc = shopItem.getElementsByClassName('imgName')[0].src;
    addItemToCart(getDressName, getpriceVal, getImgSrc);
}

function addItemToCart(getDressName, getpriceVal, getImgSrc) {
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    var cartItems = document.getElementsByClassName('cartSection')[0].getElementsByClassName('cartRows')[0];

    var cartRowContents = `<div class="cartItemCenter">
                                        <img class="cartImage" src="${getImgSrc}" style="width:100px; height:100px;">
                                        <span class="cartDressName">${getDressName}</span>
                                        <span class="cartPrice">${getpriceVal}</span>
                                        <button class="removebutton" type="button">REMOVE</button>
                                    </div>`;

    cartRow.innerHTML = cartRowContents;
    cartItems.prepend(cartRow);
    cartRow.getElementsByClassName('removebutton')[0].addEventListener('click', removeCartItem);
    updateCartTotal();
}

function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cartSection')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cartPrice')[0];
        var price = parseFloat(priceElement.innerText.replace('$', ''));
        total = total + price;
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('carttotalprice')[0].innerText = '$' + total;
}

document.addEventListener('DOMContentLoaded', function() {
    const translateButton = document.createElement('button');
    translateButton.id = 'translateButton';
    translateButton.textContent = 'IN';
    translateButton.style.position = 'absolute';
    translateButton.style.top = '10px';
    translateButton.style.right = '10px';
    translateButton.style.backgroundColor = '#008000';
    translateButton.style.color = 'white';
    translateButton.style.padding = '0.8rem 1.5rem';
    translateButton.style.border = 'none';
    translateButton.style.borderRadius = '5px';
    translateButton.style.cursor = 'pointer';
    translateButton.style.transition = 'background-color 0.3s ease';
    translateButton.style.zIndex = '1000';

    translateButton.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#006400';
    });

    translateButton.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#008000';
    });

    document.body.appendChild(translateButton);

    document.getElementById('translateButton').addEventListener('click', function() {
        translateToHindi();
    });

    function translateToHindi() {
        document.querySelector('h1').textContent = 'भारत के स्वाद';
        document.querySelector('.carttotaltitle').textContent = 'कुल';
        document.getElementById('translateButton').textContent = "EN";

        var foodItems = document.querySelectorAll('.shopItem .dressName');
        foodItems.forEach(function(item) {
            if (item.textContent.includes('Paper Dosa')) {
                item.textContent = 'पतला और कुरकुरा पेपर डोसा';
            } else if (item.textContent.includes('Hot Jalebi')) {
                item.textContent = 'गरम जलेबी';
            } else if (item.textContent.includes('Pani Puri.')) {
                item.textContent = 'अतिरिक्त बारीक सेव के साथ मसालेदार और तीखी पानी पुरी।';
            } else if (item.textContent.includes('Potato Samsosa')) {
                item.textContent = 'ताजा और गरम आलू समोसा';
            } else if (item.textContent.includes('Indian Salad')) {
                item.textContent = "भारतीय मसालों के साथ साइड सलाद।"
            } else if (item.textContent.includes('Gobi Manchurian')) {
                item.textContent = "गोबी मंचूरियन";
            } else if (item.textContent.includes('Paneer Makhani')) {
                item.textContent = "पनीर मखनी";
            } else if (item.textContent.includes('Garlic Naan')) {
                item.textContent = "लहसुन नान";
            }
        });

        var cartItemsHeading = document.getElementById('cartItemHeadingText');
        cartItemsHeading.children[0].textContent = "वस्तु";
        cartItemsHeading.children[1].textContent = "मूल्य";

        document.getElementById('translateButton').removeEventListener('click', translateToHindi);
        document.getElementById('translateButton').addEventListener('click', translateToEnglish);
    }

    function translateToEnglish(){
        document.querySelector('h1').textContent = 'Flavors of India';
        document.querySelector('.carttotaltitle').textContent = 'Total';
        document.getElementById('translateButton').textContent = "IN";

        var foodItems = document.querySelectorAll('.shopItem .dressName');
        foodItems.forEach(function(item) {
            if (item.textContent.includes('पतला और कुरकुरा पेपर डोसा')) {
                item.textContent = 'Paper Dosa';
            } else if (item.textContent.includes('गरम जलेबी')) {
                item.textContent = 'Hot Jalebi';
            } else if (item.textContent.includes('अतिरिक्त बारीक सेव के साथ मसालेदार और तीखी पानी पुरी।')) {
                item.textContent = 'Pani Puri.';
            } else if (item.textContent.includes('ताजा और गरम आलू समोसा')) {
                item.textContent = 'Potato Samsosa';
            } else if (item.textContent.includes('भारतीय मसालों के साथ साइड सलाद।')) {
                item.textContent = "Indian Salad";
            } else if (item.textContent.includes('गोबी मंचूरियन')) {
                item.textContent = "Gobi Manchurian";
            } else if (item.textContent.includes('पनीर मखनी')) {
                item.textContent = "Paneer Makhani";
            } else if (item.textContent.includes('लहसुन नान')) {
                item.textContent = "Garlic Naan";
            }
        });
        var cartItemsHeading = document.getElementById('cartItemHeadingText');
        cartItemsHeading.children[0].textContent = "ITEM";
        cartItemsHeading.children[1].textContent = "PRICE";

        document.getElementById('translateButton').removeEventListener('click', translateToEnglish);
        document.getElementById('translateButton').addEventListener('click', translateToHindi);
    }
});