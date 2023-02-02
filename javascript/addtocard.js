


function getListProductToCartFromLocalStorage(){
    return localStorage.getItem("list-product") ? JSON.parse(localStorage.getItem("list-product")) : []
}
function getListProductToWhishFromLocalStorage(){
    return localStorage.getItem("list-wish") ? JSON.parse(localStorage.getItem("list-wish")) : []
}


function amountWishList(){
    let amoutWishList=getListProductToWhishFromLocalStorage()
    document.getElementById("wishlist-items").innerText=amoutWishList.length
}

function amoutCart(){
    let amoutCart=getListProductToCartFromLocalStorage()
    document.getElementById("cart-items").innerText=amoutCart.length
}

function showWishList(){
    let listProduct=getListProductToWhishFromLocalStorage()
    if(listProduct.length==0){
        product1=`<tr><td colspan="6" class="no-product">
            No products were added to the wishlist
        </td>
        </tr>`
        document.getElementById('showWishList').innerHTML=product1
        amountWishList()
    }else{
        product=""
        listProduct.forEach((value,index)=>{
        product+=`
        <tr>
            <td class="product-remove">
                <div class="remove" onclick="remove(${index})">
                    <span>×</span>
                </div>
            </td>
            <td class="product-image"><img src="${value.image}" alt=""></td>
            <td class="product-name">${value.name}</td>
            <td class="product-price">${value.price}</td>
            <td class="product-status">in-card</td>
            <td class="product-add-to-cart">
                <button class="addtocart">
                    <span>thêm vào giỏ</span>
                </button>
            </td>
        </tr>
    `
    // onclick="addToCartInWishList()"
    document.getElementById('showWishList').innerHTML=product
    })
    amountWishList()
}
}


const arrWishList=new Array()

function addWishList(){
    let addWishList=document.querySelectorAll(".add-heart")
    addWishList.forEach(btn=>{
        btn.addEventListener('click', e=>{
            let image=btn.parentElement.children[0].src
            let name=btn.parentElement.children[2].children[0].innerText
            let price=btn.parentElement.children[2].children[1].innerText
            let arrWishList=getListProductToWhishFromLocalStorage()
            let check=0;
            for (let index = 0; index < arrWishList.length; index++) {
                if(arrWishList[index].name==name){
                    check=1
                    message("present")
                }
            }
            if(check==0){
                arrWishList.push({image,name,price})
                message("success-addwishlist")
            }
            localStorage.setItem("list-wish", JSON.stringify(arrWishList))
            amountWishList()
        })
    })
}


const arrCart=new Array();
function addToCart(){
    let addToCart=document.querySelectorAll(".addtocart");
    addToCart.forEach(btn=>{
    btn.addEventListener('click', e=>{
        let  image=btn.parentElement.parentElement.children[0].src;
        let name=btn.parentElement.children[0].innerText;
        let price=btn.parentElement.children[1].innerText;
        let amount=parseInt(btn.parentElement.parentElement.children[4].value);
        let arrCart=getListProductToCartFromLocalStorage();
        let check=0;
        for (let index = 0; index < arrCart.length; index++) {
            if(arrCart[index].name==name){
                check=1
                amount+=parseInt(arrCart[index].amount);
                arrCart[index].amount=amount;
                break;
            }
            
        }
        if(check==0){
            arrCart.push({image,name,price,amount})
        }
        localStorage.setItem("list-product", JSON.stringify(arrCart))
        amoutCart()
        renderProductMiniCart()
        message("success-addtocart")
    })
})
}
function remove(index){
    let listProduct=getListProductToWhishFromLocalStorage()
    listProduct.splice((index),1);
    localStorage.setItem("list-wish", JSON.stringify(listProduct))
    showWishList()
    message('success-remove')
}

function removeAll() {
    let listProduct=getListProductToWhishFromLocalStorage()
    listProduct=[]
    localStorage.setItem("list-wish", JSON.stringify(listProduct))
    showWishList()
    if(list-wish.length!=0){
        message('success-remove')
    }
}

function removeProductCart(index){
    let listProduct=getListProductToCartFromLocalStorage()
    listProduct.splice((index),1);
    localStorage.setItem("list-product", JSON.stringify(listProduct))
    showCartItem()
    message('success-remove')
}
function removeProductMiniCart(index){
    let listProduct=getListProductToCartFromLocalStorage()
    listProduct.splice((index),1);
    localStorage.setItem("list-product", JSON.stringify(listProduct))
    renderProductMiniCart()
    message('success-remove')

}

function removeAllCart(){
    let listProduct=getListProductToCartFromLocalStorage()
    listProduct=[]
    localStorage.setItem("list-product",JSON.stringify(listProduct))
    showCartItem()
    if(list-product.length!=0){
        message('success-remove')
    }
}

//-----showminicart----------/

function renderProductMiniCart() {
    let listProduct=getListProductToCartFromLocalStorage();
    if((listProduct.length)!=0){
        let product=""
        let sum=0;
        listProduct.forEach((val,index)=>{
            sum +=parseInt(val.price)*parseInt(val.amount);
            product+=`
                
                    <ul class="item d-flex">
                        <div class="image"><img src="${val.image}" atl=""></div>
                        <ul class="content">
                            <li class="name">${val.name}</li>
                            <ul class="price flex">
                                <li>${val.amount}</li>
                                <li>x</li>
                                <li>${val.price}</li>
                            </ul>
                        </ul>
                        <li class="remove" onclick="removeProductMiniCart(${index})"><span>×</span></li>
                    </ul>
                `
            document.getElementById("list").innerHTML=product

            })
            document.getElementById("contact").style.display="block"
            let contact=`<div class="sum">
                        <strong>Tổng Cộng: <span>${sum}đ</span></strong>
                    </div>
                    <button class="btn-cart"><a href="/html/cart.html">xem giỏ hàng</a></button>
                    <button class="btn-pay"><a href="#">thanh toán</a></button>`
             document.getElementById("contact").innerHTML=contact

    }
    else{
        document.getElementById("contact").style.display="none"
        let noItem=`<div class="no-item">
        <img src="/image/no-item.png" alt="">
        <p>There are no products in the cart.</p>
        </div>`
        document.getElementById("list").innerHTML=noItem   
    }
    amoutCart()
}


function showCartItem(){
    let listProduct=getListProductToCartFromLocalStorage()

    if(listProduct.length==0){
        let noProduct=`<div class="no-product">
        <p>There are no products in the cart.</p>
        <a href="/html/index.html"><button class="button-back-home"><span>Quay lại cửa hàng.</span></button></a>
    </div>`
    document.getElementById("clear").innerHTML=noProduct
    }else{
        product=""
        let sum=0;
        listProduct.forEach((val,index)=>{
        sum +=parseInt(val.price)*parseInt(val.amount);
        product+=`<tr>
                        <td class="product-remove">
                            <div class="remove" onclick="removeProductCart(${index})">
                                <span>×</span>
                            </div>
                        </td>
                        <td class="product-image"><img src="${val.image}" alt=""></td>
                        <td class="product-name">${val.name}</td>
                        <td class="product-price">${val.price}</td>
                        <td class="product-status">
                            <input class="minus btn" type="button" value="-">
                            <input class="amount" type="number" value="${val.amount}" step="1" min="1" max="999">
                            <input class="plus btn" type="button" value="+">
                        </td>
                        <td class="product-total">
                            <span>${sum}</span>
                        </td>
                    </tr>`

         document.getElementById("showCart").innerHTML=product
    })
    }
    amoutCart()
}


addToCart()
addWishList()
amountWishList()
amoutCart()
