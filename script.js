const images = [
    "https://picsum.photos/id/1015/400/300" ,
    "https://picsum.photos/id/1016/400/300" ,
    "https://picsum.photos/id/1018/400/300" ,
    "https://picsum.photos/id/1020/400/300" ,
    "https://picsum.photos/id/1024/400/300" ,
    "https://picsum.photos/id/1027/400/300" 
];
let currentIndex;
function openLightbox(index){
    currentIndex = index;
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = images[index];
}

function closeLightbox(){
    document.getElementById("lightbox").style.display = "none";
}
function changeImage(index){
    currentIndex = currentIndex + index;
    let len = images.length;
    if (currentIndex === -1) {
        currentIndex = len - 1;
    }
    else if (currentIndex === len) {
        currentIndex = 0;
    }
    document.getElementById("lightbox-img").src = images[currentIndex];
}
