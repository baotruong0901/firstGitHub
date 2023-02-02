function message(status){
    let temp=`<h3>
    <i class="fa-solid fa-check"></i>
    Successfully added to cart
    </h3>`
    switch (status) {
        case 'success-addtocart':
            temp=`
                    <i class="fa-solid fa-check"></i>
                    <p class="message">Successfully added to cart</p>
                    `
            break;
        case 'success-addwishlist':
            temp=`
                    <i class="fa-solid fa-check"></i>
                    <p class="message">Successfully added to wish-list</p>
                    `
            break;
    
        case 'present':
            temp=`
            <i class="fa-solid fa-triangle-exclamation"></i>
            <p class="message">Products already in the wish-list</p>`
            break;
        case 'success-remove':
            temp=`
            <i class="fa-solid fa-check"></i>
            <p class="message">Successfully remove product</p>`
            break;        

    }

    let toats=document.createElement("div")
    toats.classList.add('toast')
    toats.classList.add(status)
    toats.innerHTML=`${temp}`
    let toastList=document.getElementById('toasts')
    toastList.appendChild(toats)
    setTimeout(() => {
        toats.style.animation='slide-message-hide 1s ease forwards'
    }, 2000);
    setTimeout(() => {
        toats.remove()
    }, 3000);
}



// const addToCartBtn=document.querySelectorAll(".addtocart")
// addToCartBtn.forEach(val=>{
//     val.addEventListener("click",e=>{
//         message("success-addtocart")
        
// })
// })

