function scrollleft() {
    document.getElementById('sub-imgs').scrollLeft -= 100;
};

function scrollright() {
    document.getElementById('sub-imgs').scrollLeft += 100;
};

function showimg(i) {
    document.getElementById('main-img').src = "img/gallery/img" + i + ".png";
}