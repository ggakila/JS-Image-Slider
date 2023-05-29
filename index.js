const right = document.querySelector(".right")
const left = document.querySelector(".left")
const images = document.querySelector(".images")
const imgs = document.querySelectorAll(".image")

let imgNum = 1;
const imgLength = imgs.length

const nextImage = () => {
    images.style.transform = `translateX(-${imgNum * 800}px)`
    imgNum++;
}

const prevImage = () => {
    images.style.transform = `translateX(${-(imgNum-2)* 800}px)`
    imgNum--;
}

const firstImage = () => {
    images.style.transform = `translateX(-0px)`
    imgNum = 1;
}

const lastImage = () => {
    images.style.transform = `translateX(-${(imgLength-1)*800}px)`
    imgNum = imgLength;
}

left.addEventListener('click', ()=>{

    // Better alternative if else statement would be: imgNum > 1 ? prevImage : lastImage
    if(imgNum > 1){
        prevImage()
    }else {
        lastImage()
    }
})

right.addEventListener('click', ()=>{
    // Better alternative if else statement would be: imgNum < imgLength ? nextImage : lastImage
    if(imgNum < imgLength){
        nextImage()
    }else{
        firstImage()
    }
    
})