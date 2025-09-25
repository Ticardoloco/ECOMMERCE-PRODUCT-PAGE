document.getElementById('menu-icon').addEventListener('click', ()=>{
    document.getElementById('nav-links').classList.add('nav-show')
     document.querySelector("#overlay").classList.add('mobi-show');
});
document.getElementById('close-menu').addEventListener('click', ()=>{
    document.getElementById('nav-links').classList.remove('nav-show')
     document.querySelector("#overlay").classList.remove('mobi-show');
});





const cartNum = document.getElementById('num-cart');
const imageCollection = [
    "img/image-product-1.jpg",
    "img/image-product-2.jpg",
    "img/image-product-3.jpg",
    "img/image-product-4.jpg",
];
let imageNum = 0;
function imageClick(number) {
    document.getElementById('image-switch').src = imageCollection[number];
    document.getElementById('image-switch2').src = imageCollection[number];
    imageNum = number;
}

document.getElementById('image-switch').addEventListener('click', () => {
    document.querySelector('.light-box').classList.add("desktop-show")
    document.querySelector("#overlay").classList.add('show')
});
document.getElementById('close-icon').addEventListener('click', () => {
    document.querySelector('.light-box').classList.remove("desktop-show")
    document.querySelector("#overlay").classList.remove('show')
});
document.getElementById('previous-arrow').addEventListener('click', () => {
    imageNum--
    if (imageNum < 0) {
        imageNum = 3
    }


    imageClick(imageNum)
})
document.getElementById('next-arrow').addEventListener('click', () => {

    imageNum++
    if (imageNum > 3) {
        imageNum = 0;
    }
    imageClick(imageNum)
})
document.getElementById('previous-arrow2').addEventListener('click', () => {
    imageNum--
    if (imageNum < 0) {
        imageNum = 3
    }


    imageClick(imageNum)
})
document.getElementById('next-arrow2').addEventListener('click', () => {

    imageNum++
    if (imageNum > 3) {
        imageNum = 0;
    }
    imageClick(imageNum)
})

function minusCart() {
    cartNum.innerText = Math.max(cartNum.innerText - 1, 0)
}
function addCart() {
    cartNum.innerText++
}

function addToCart() {
    document.querySelector('.cart-sum').classList.add('cart-shown')
    const beforeSum = parseInt(document.getElementById('cart-sum').innerText);
    const add = parseInt(cartNum.innerText);
    document.getElementById('cart-sum').innerText = beforeSum + add;

    const totalOrders = parseInt(document.getElementById('cart-sum').innerText);
    document.getElementById('total-num').innerHTML = totalOrders;

    const price = parseInt(document.getElementById('price').innerText);

    document.getElementById('total-price').innerHTML = (price * totalOrders).toFixed(2);

}

document.getElementById('add-to-cart').addEventListener('click', () => {
    const totalOrders = parseInt(document.getElementById('cart-sum').innerHTML);

    if (totalOrders > 0) {
        document.getElementById('cart').classList.toggle('cart-drop');
    }

})

document.getElementById('trash').addEventListener('click', () => {
    document.getElementById('cart').classList.remove('cart-drop');

    document.getElementById('cart-sum').innerText = 0;
    cartNum.innerText = 0;
     document.querySelector('.cart-sum').classList.remove('cart-shown')
    
})