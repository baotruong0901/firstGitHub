const signUpModel=document.querySelector(".signup-modal")
const close=document.querySelector('.signup-close')
const signUp=document.querySelector(".signup")
const btnSignUp=document.querySelectorAll(".btn-signup")
console.log(btnSignUp);
const inputEmail=document.querySelector("#email")
console.log(inputEmail);
function showModalSignUp(){
    signUp.addEventListener('click',e=>{
        signUpModel.classList.remove('hide')
        signUp.style.display="none"
    })
}

function closeSignUp() {
    console.log(close);
    close.addEventListener('click', e=>{
        signUpModel.classList.add('hide')
        signUp.style.display="block"
    })
}

document.addEventListener('keydown', function(e){
    if(e.keyCode==27){
        signUpModel.classList.add('hide')
        signUp.style.display="block"
    }
})

function showError(input, message){
    let parent=input.parentElement;
    let small=parent.querySelector("small");

    parent.classList.add("error")
    small.innerText=message
    small.style.color="red"
    inputEmail.style.border="1px solid red"


}

function showSuccess(input){
    let parent=input.parentElement;
    let small=parent.querySelector("small");
    parent.classList.remove("error")
    small.innerText=""
}

function checkEmailError(input){
    let regexEmail=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    input.value=input.value.trim();
    let isEmailError=!regexEmail.test(input.value)
    if(regexEmail.test(input.value)){
        showSuccess(input)
    }else{
        showError(input,`Email invalid`)
    }
}

// function checkLengthError(input,min,max){
//     input.value=input.value.trim();
//     if(!input.value){
//         showError(input,`Please enter your ${input.id}`)
//         return true
//     }else if(input.value.length<min){
//         showError(input, `Please enter at least ${min} characters`)
//         return true
//     }else if(input.value.length>max){   
//         showError(input,`Please don't enter more than ${max} characters`)
//         return true
//     }else{
//         showSuccess(input)
//     }

//     return false
// }


function Signup() { 
    btnSignUp.forEach(btn=>{
        btn.addEventListener('click',e=>{
            e.preventDefault()
            let isEmailError=checkEmailError(email) 
        })
        document.addEventListener('keypress', e=>{
            if(e.code=="Enter"){
            checkEmailError(email)
            }
        })
    }) 
}



Signup()
closeSignUp()
showModalSignUp()