//gallery Images Code
var allImg=document.images;
function allImgTags(){
    for(i=0;i<=allImg.length;i++){
        allImg[i].src=`../asset/images/${i}.jpg`
        allImg[i].style.width="200px";
        allImg[i].style.height="180px"
        allImg[i].addEventListener("click",function(){
            document.getElementById("bigImage").style.display="flex"
        })
    }
}
allImgTags()
var globalSrc;
function passSrc(urlOfimg){
    document.getElementById("bigimg").style.backgroundImage=`url(${urlOfimg})`
    globalSrc=urlOfimg;
}
//close window
function closewindow(){
    document.getElementById("bigImage").style.display="none";
    document.getElementById("galleryImageEdit").style.display="none"
}
function openEditWindow(){
    document.getElementById("galleryImageEdit").style.display="flex";
    document.getElementById("image").style.backgroundImage=`url(${globalSrc})`;
}
//image edit code
function imageEdit(){
    var blurValue=document.getElementById("blur").value;
    var brightnessValue=document.getElementById("brightness").value;
    var contrastValue=document.getElementById("contrast").value;
    var grayscaleValue=document.getElementById("grayscale").value;
    var hueValue=document.getElementById("hue").value;
    var invertValue=document.getElementById("invert").value;
    var opacityValue=document.getElementById("opacity").value;
    var saturateValue=document.getElementById("saturate").value;
    var sepiaValue=document.getElementById("sepia").value;
    //console.log(blurValue,brightnessValue,contrastValue,grayscaleValue,hueValue,invertValue,invertValue,opacityValue,opacityValue,sepiaValue)
    document.getElementById("image").style.filter=`blur(${blurValue}px) brightness(${brightnessValue}%) contrast(${contrastValue}%) grayscale(${grayscaleValue}%) hue-rotate(${hueValue}deg)invert(${invertValue}%)opacity(${opacityValue}%)saturate(${saturateValue}%)sepia(${sepiaValue}%)`
    //transform code
    var rotateX=document.getElementById("rotateX").value;
    var rotateY=document.getElementById("rotateY").value;
    var rotateZ=document.getElementById("rotateZ").value;
    var scaleX=document.getElementById("scalex").value;
    var scaleY=document.getElementById("scaley").value;
    var skewX=document.getElementById("skewx").value;
    var skewY=document.getElementById("skewy").value;
    var translateX=document.getElementById("translatex").value;
    var translateY=document.getElementById("translatey").value;
    document.getElementById("image").style.transform=`rotateZ(${rotateZ}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scalex(${scaleX})scaley(${scaleY}) skewx(${skewX}deg) skewy(${skewY}deg) translatex(${translateX}px) translatey(${translateY}px)`
}
