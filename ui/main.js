console.log('Loaded!');
var element=document.getElementById('main-text');

var image=document.getElementById('madi');
marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft+5;
    image.style.marginLeft=marginLeft+'px';
}
image.onclick=function(){
    var interval=setInterval(moveRight,50);
}