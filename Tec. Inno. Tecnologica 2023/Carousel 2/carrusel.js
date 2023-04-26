function activarMiCarousel(id, delay){
    let carrousel = document.getElementById(id);
    carrousel.getElementsByTagName("img")[0].style.display = "block";
    for(var i = 1; i < carrousel.getElementsByTagName("img").length; i++){
        var img = carrousel.getElementsByTagName("img")[i];
        img.style.display = "none";
    }
    setInterval(cambiarImagen,delay,id);
}

function cambiarImagen(id){
    let carrousel = document.getElementById(id);
    let length = carrousel.getElementsByTagName("img").length;
    for(var i = 0; i < length; i++){
        var img = carrousel.getElementsByTagName("img")[i];
        if(i > 0){
            var imgAnterior = carrousel.getElementsByTagName("img")[(i-1)];
        }else{
            var imgAnterior = carrousel.getElementsByTagName("img")[length-1];
        }
        if(imgAnterior.style.display == "block"){
            imgAnterior.style.display = "none";
            img.style.display = "block";
            break;
        }
    }
}