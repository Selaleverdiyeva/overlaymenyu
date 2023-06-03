const navbarIconu = document.querySelector(".fa-bars")
const baglamaqIconu = document.querySelector(".fa-xmark")
const overlayMenyuDivi = document.querySelector(".overlay")



console.log(navbarIconu,baglamaqIconu);



// navbarIconu.onclick = function(){
//     overlayMenyuDivi.style.width="100%"
// }
// baglamaqIconu.onclick = function(){
//    overlayMenyuDivi.style.width="0"
// }
navbarIconu.addEventListener("click",function(){
    overlayMenyuDivi.style.width="100%"
}
)
baglamaqIconu.addEventListener("click", function(){
    overlayMenyuDivi.style.width="0"
}
) 