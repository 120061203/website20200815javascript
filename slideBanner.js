function openCity(cityName, elmnt, color) {
    var i, _tabcontent, _tablinks;
    _tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < _tabcontent.length; i++) {
        _tabcontent[i].style.display = "none";
    }
    _tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < _tablinks.length; i++) {
        _tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(cityName).style.display = "block";
    elmnt.style.backgroundColor = color;
}

// 触发 id="defaultOpen" click 事件
document.getElementById("defaultOpen").click();