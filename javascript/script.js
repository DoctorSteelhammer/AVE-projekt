const carousel = document.querySelector(".carousel"),
    firstImg = carousel.querySelectorAll("img")[0],
    arrowIcons = document.querySelectorAll(".wrapper i");
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const current_image = document.getElementById("current-image");

let previous_img = document.getElementById("previous_img");
let next_img = document.getElementById("next_img")

const thumb = document.querySelectorAll("img")


const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft === 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft === scrollWidth ? "none" : "block";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id === "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}
const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);
document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);


thumb.forEach(img =>{
    img.addEventListener("click", function (){
        current_image.src = this.src;
    })

    if(thumb.src === current_image.src){
        thumb.style.opacity
    }
})
// main image changer (-)
previous_img.addEventListener("click", () =>{
    current_img_str = current_image.src;
    current_img_array = current_img_str.split(/(\d+)/)
    img_value = current_img_array[0];




    if(img_value < 2){
        img_value = 1;
        current_image.src = "../../images/"+img_value+".jpg"
        current_image.alt = "Image"+img_value;
    }

    else {
        img_value--;
        current_image.src = "../../images/"+img_value+".jpg"
        current_image.alt = "Image"+img_value;
    }
    console.log(current_img_str);
    console.log(current_img_array);
    console.log(img_value);
});

// main image changer (+)
next_img.addEventListener("click", () =>{
    current_img_str = current_image.src;
    current_img_array = current_img_str.split(/(\d+)/)
    img_value = current_img_array[0];

    if(img_value > 59){
        img_value = 60;
        current_image.src = "../../images/"+img_value+".jpg"
        current_image.alt = "Image"+img_value;
    }

    else {
        img_value++;
        current_image.src = "../../images/"+img_value+".jpg"
        current_image.alt = "Image"+img_value;
    }
    console.log(current_img_str);
    console.log(current_img_array);
    console.log(img_value);
});