renderPorduct(listPopular)
renderTrend(trendList)
renderBanner(bannerList)
renderPopular(listPopular)


function renderTrend(x){
    list=""
    x.forEach(value=>{ 
        list+=`<div class="item d-flex" type=${value.type}>
        <div class="content">
            <h3 class="text">${value.text}</h3>
            <h2 class="category">${value.category}</h2>
        </div>
        <div class="image"><img src=${value.img} alt=""></div>
    </div>`
    })

    document.getElementById("trend-list").innerHTML=list
    // document.getElementById("banner-list").innerHTML=list
}

function renderBanner(x){
    list=""
    x.forEach(value=>{ 
        list+=`<div class="item d-flex" type=${value.type}>
        <div class="content">
            <h3 class="text">${value.text}</h3>
            <h2 class="category">${value.category}</h2>
        </div>
        <div class="image"><img src=${value.img} alt=""></div>
    </div>`
    })
    document.getElementById("banner-list").innerHTML=list

    // document.getElementById("banner-list").innerHTML=list
}

function renderPorduct(listPopular){
    let list=""
    // console.log(list)
    listPopular.forEach(value=>{
        list+=`<div class="list-item" type=${value.type}>
        <img class="image" src="${value.image}" alt="">
        <div class="add-heart"><i class="fa-regular fa-heart"></i></div>
        <div class="content">
            <span class="name">${value.name}</span>
            <div class="price">${value.price}đ</div>
            <button class="addtocart">
                <span>thêm vào giỏ</span>
            </button>
        </div>
        <span class="sale">${value.sale}</span>
        <input type="number" value="${value.amount}" step="1" min="1" max="999">
    </div>`
    });
    document.getElementById("best-seller-list").innerHTML=list
}

function renderPopular(listPopular){
    let list=""
    // console.log(list)
    listPopular.forEach(value=>{
        list+=`<div class="list-item" type=${value.type}>
        <img class="image" src="${value.image}" alt="">
        <div class="add-heart"><i class="fa-regular fa-heart"></i></div>
        <div class="content">
            <span class="name">${value.name}</span>
            <div class="price">${value.price}đ</div>
            <button class="addtocart" >
                <span>thêm vào giỏ</span>
            </button>
        </div>
        <span class="sale">${value.sale}</span>
        <input type="number" value="${value.amount}" step="1" min="1" max="999">

    </div>`
    });
    document.getElementById("listPopular").innerHTML=list
}

function renderSale(listSale){
    let list=""
    // console.log(list)
    listSale.forEach(value=>{
        list+=`<div class="list-item" type=${value.type}>
        <img class="image" src="${value.image}" alt="">
        <div  class="add-heart"><i class="fa-regular fa-heart"></i></div>
        <div class="content">
            <span class="name">${value.name}</span>
            <div class="price">${value.price}đ</div>
            <button class="addtocart"  >
                <span>thêm vào giỏ</span>
            </button>
        </div>
        <span class="sale">${value.sale}</span>
        <input type="number" value="${value.amount}" step="1" min="1" max="999">
    </div>`
    });
    document.getElementById("listSale").innerHTML=list
}

function renderNew(listNew){
    let list=""
    // console.log(list)
    listNew.forEach(value=>{
        list+=`<div class="list-item" type=${value.type}>
        <img class="image" src="${value.image}" alt="">
        <div class="add-heart"><i class="fa-regular fa-heart"></i></div>
        <div class="content">
            <span class="name">${value.name}</span>
            <div class="price">${value.price}đ</div>
            <button class="addtocart">
                <span>thêm vào giỏ</span>
            </button>
        </div>
        <span class="sale">${value.sale}</span>
        <input type="number" value="${value.amount}" step="1" min="1" max="999">
    </div>`
    });
    document.getElementById("listNew").innerHTML=list
}


