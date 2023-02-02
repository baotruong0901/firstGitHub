function showSearch(){
    let searchInput=document.getElementById("search").value.trim().toUpperCase()
    let searchBox=document.querySelector('.search-box')
    let userSearch=[]
    if(searchInput.length!==0){
        searchBox.classList.remove("hide")
    }else{
        searchBox.classList.add("hide")

    }
    userSearch=listProductAll.filter(value=>{
        if(value.name.toUpperCase().includes(searchInput.toUpperCase())){
            return value.name.toUpperCase().includes(searchInput.toUpperCase())
        }
    })
    localStorage.setItem("arrResultSearch", JSON.stringify(userSearch))
    localStorage.setItem("userSearch", JSON.stringify(searchInput))
    showSearchItem(userSearch)
    enterSearch()
}

function enterSearch(){
    let searchBtn=document.querySelector("#search")
    searchBtn.addEventListener("keypress", function(e){
        if(e.code=="Enter"){
            window.location="/html/search.html"
        }
    })
}

function searchResutl(){
    let userSearch=localStorage.getItem("userSearch") ? JSON.parse(localStorage.getItem("userSearch")) : []
    document.getElementById('searchResult').innerText=`kết quả tìm kiếm cho "${userSearch}"`
}
function render(){
        let listSearch=localStorage.getItem("arrResultSearch") ? JSON.parse(localStorage.getItem("arrResultSearch")) : []
        let list=""
        if(listSearch.length==0){
            list+=`<span class="text">THE PRODUCT YOU ARE LOOKING FOR IS NOT AVAILABLE.</span>`
            document.getElementById("listSearch").innerHTML=list
        }else{
            listSearch.forEach(value=>{
            list+=`<div class="list-item" type=${value.type}>
                <img class="image" src="${value.image}" alt="">
                <div class="add-heart" onclick="addWishList()"><i class="fa-regular fa-heart"></i></div>
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
            })
            document.getElementById("listSearch").innerHTML=list
        }
}


function showSearchItem(arr){
    let product=``
    if(arr.length==0){
        product+=`<p>
        sorry! The product you are looking for is not available.
        </p>`
        document.getElementById("search-box").innerHTML=product
    }else{
        arr.forEach(val=>{
            product+=`
            <div class="item d-flex">
                                    <div class="image">
                                        <img src="${val.image}" alt="">
                                    </div>
                                    <div class="name">${val.name}</div>
                                    <div class="price">${val.price}</div>
                                </div>
            `
    
            document.getElementById("search-box").innerHTML=product
        })
    }
}

