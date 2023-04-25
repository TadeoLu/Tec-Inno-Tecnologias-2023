function activarMiCarousel(id, delay){
    let carrousel = document.getElementById(id);
    for(var i = 1; i < carrousel.getElementsByTagName("img").length; i++){
        var img = carrousel.getElementsByTagName("img")[i];
        img.style.display = "none";
    }
    setInterval(cambiarImagen(id),3000);
}

function cambiarImagen(id){
    console.log("Tamo ruleta");
    let carrousel = document.getElementById(id);
    let lenght = carrousel.getElementsByTagName("img").length;
    for(var i = 0; i < length; i++){
        var img = carrousel.getElementsByTagName("img")[i];
        if(i > 0){
            var imgAnterior = carrousel.getElementsByTagName("img")[i-1];
        }else{
            var imgAnterior = carrousel.getElementsByTagName("img")[length-1];
        }
        if(imgAnterior.style.display == "block"){
            imgAnterior.style.display = "none";
            img.style.display = "block";
        }
    }
}