const thumbs = document.getElementById("img-thumbs");
const current_image = document.getElementById("current-image");

let previous_img = document.getElementById("previous_img");
let next_img = document.getElementById("next_img")

for (let i = 1; i <= 4; i++) {
    let thumb = document.createElement("img");
    thumb.src = "../../images/nadstresnice/" + i + ".jpg";
    thumb.alt = "Image " + i;
    thumb.classList.add("thumb");

    thumbs.appendChild(thumb);

    thumb.addEventListener(
        "click", function() {
            current_image.src = this.src;
            current_image.alt = this.alt;
            console.log(current_image.src)
        }
    );
}



previous_img.addEventListener("click", () =>{
    current_img_str = current_image.src;
    current_img_array = current_img_str.split(/(\d+)/)
    img_value = current_img_array[1];




    if(img_value < 2){
        img_value = 1;
        current_image.src = "../../images/nadstresnice/"+img_value+".jpg"
        current_image.alt = "Image"+img_value;
    }

    else {
        img_value--;
        current_image.src = "../../images/nadstresnice/"+img_value+".jpg"
        current_image.alt = "Image"+img_value;
    }
    console.log(current_img_str);
    console.log(current_img_array);
    console.log(img_value);
});

next_img.addEventListener("click", () =>{
    current_img_str = current_image.src;
    current_img_array = current_img_str.split(/(\d+)/)
    img_value = current_img_array[1];

    if(img_value > 3){
        img_value = 4;
        current_image.src = "../../images/nadstresnice/"+img_value+".jpg"
        current_image.alt = "Image"+img_value;
    }

    else {
        img_value++;
        current_image.src = "../../images/nadstresnice/"+img_value+".jpg"
        current_image.alt = "Image"+img_value;
    }
    console.log(current_img_str);
    console.log(current_img_array);
    console.log(img_value);
});

