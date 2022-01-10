var nav = document.getElementById('Navber');
window.onscroll = function(){
    var sc = window.scrollY;
if (sc >= 100) {
    nav.classList.add('addClass');  
}
else{
    nav.classList.remove('addClass');
}
}
