let open = document.querySelector(".open")
let  tanlash = false
let div = document.querySelector(".div")

function openClose(){
    tanlash = !tanlash
    if(tanlash){
       open.innerHTML = "close"
       div.style.display = "block"
    }
    else{
        open.innerHTML = "open"
        div.style.display = "none"
    }
  
}