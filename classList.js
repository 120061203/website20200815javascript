function scale() {
    const _box = document.getElementsByClassName("box");

    for (var i = 0; i < _box.length; i++) {
        // _box[i].style.display = "none";
        _box[i].classList.toggle("scale");
    }



}

const box = document.getElementsByClassName("box");
for (var i = 0; i < box.length; i++) { //讓兩個box都有事件監聽反應
    box[i].addEventListener("mouseover", scale);
    box[i].addEventListener("mouseleave", scale);
}