//const menuToggle =document.querySelectorAll(".toggle")
//const navigation = document.querySelector(".nav")

//menuToggle.onclick=function(){
// menuToggle.classlist.toggle("active")
// navigation.classList.toggle("active")
//}

//const slides = document.querySelectorAll(".slides")
//const prev = document.querySelector(".prev")
//const next = document.querySelector(".next")

//1=0;

//function ActiveSlides(n){
// for(slide of slide)
// slide.classList.remove("active")
//slide(n).classList.add("'active")
//}

//next.addEventListener("click" ,function(){
// if(i == slides.lenth-1){
//   1=0;
//   ActiveSlides(i)
//}else{
//   i++;
//   ActiveSlides(i)
//  }
//})
//prev.addEventListener("click" ,function(){
// if(i == 0){
//   1=slides.length-1;
//    ActiveSlides(i)
// }else{
//    i--;
//     ActiveSlides(i)
// }
//})
const menutoggle = document.querySelector(".toggle");
const navigation = document.querySelector(".nav");
menutoggle.onclick = function () {
  menutoggle.classList.toggle("active");
  navigation.classList.toggle("active");
};

//slides
const slides = document.querySelectorAll(".slides");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

i = 0;

function ActiveSlide(n) {
  for (slide of slides) slide.classList.remove("active");
  slides[n].classList.add("active");
}

//next button function
next.addEventListener("click", function () {
  if (i == slides.length - 1) {
    i = 0;
    ActiveSlide(i);
  } else {
    i++;
    ActiveSlide(i);
  }
});
//prev button function
prev.addEventListener("click", function () {
  if (i == 0) {
    i = slides.length - 1;
    ActiveSlide(i);
  } else {
    i--;
    ActiveSlide(i);
  }
});
