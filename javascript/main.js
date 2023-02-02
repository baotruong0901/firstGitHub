
const headerBottomMenu=document.querySelectorAll(".menu li a")

const item=document.querySelectorAll(".product-header span")
function filterBtn(x){
        x.forEach(value=>{
            value.addEventListener('click', function(){
                for (let i = 0; i < x.length; i++){
                x[i].classList.remove('active')
                }
                this.classList.add('active')
            })
        })
}
    

    item.forEach(btn=>{
        btn.addEventListener('click', e=>{
            // console.log(btn.dataset.filter);
            if(btn.dataset.filter=="popular"){
                renderPopular(listPopular)
                document.getElementById('listPopular').style.display='flex'
                document.getElementById('listSale').style.display='none'
                document.getElementById('listNew').style.display='none'
                addToCart()
                addWishList()

            }
            else if(btn.dataset.filter=="sale"){
                renderSale(listSale)
                document.getElementById('listSale').style.display='flex'
                document.getElementById('listPopular').style.display='none'
                document.getElementById('listNew').style.display='none'
                addToCart()
                addWishList()
            }
            else if(btn.dataset.filter=="new"){
                renderNew(listNew)
                document.getElementById('listNew').style.display='flex'
                document.getElementById('listPopular').style.display='none'
                document.getElementById('listSale').style.display='none'
                addToCart()
                addWishList()
            }
        })
    })




//--------------scrollTop--------------//
$(window).scroll(function(){
    if($(this).scrollTop()>="220"){
        $(".back-to-top").fadeIn();
        $(".header-bottom").addClass("fixed")
    }else{
        $(".back-to-top").fadeOut();
        $(".header-bottom").removeClass("fixed")
    }
})

$(".back-to-top").click(function(){
    $("html,body").animate({scrollTop:0},1000)
})
//-----------/-----------/-----------//


//-----------search-----------//


filterBtn(item)
// filterBtn(text-item)
filterBtn(headerBottomMenu)

//----------------//--------------//

