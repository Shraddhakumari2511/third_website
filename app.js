
function animation(){
var elumc = document.querySelector("#elum-container");
var image = document.querySelector("#fixed-image");
elumc.addEventListener("mouseenter", function(){
    image.style.display = "block";
});
elumc.addEventListener("mouseleave", function(){
    image.style.display = "none";
})
var elems = document.querySelectorAll(".elum");
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var newimg = e.getAttribute("data-image");
        image.style.backgroundImage = `url(${newimg})`;
    })
    e.addEventListener("mouseleave",function(){
        image.style.backgroundImage = "none";
    })
})
}
function swipperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });
}

swipperAnimation();
animation();

var loader = document.querySelector("#loader");
setTimeout(function(){
    loader.style.top = "-100%"
},4000)