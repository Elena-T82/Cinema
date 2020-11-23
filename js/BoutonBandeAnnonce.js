function ouvrirBandeAnnonce(){
    document.getElementById("LaBandeAnnonce").style.display= "block";
    document.body.style.backgroundColor= "rgb(39, 39, 39)";
    document.getElementById("fond").style.opacity = 0.2;
    document.getElementById("BtnFermerBA").style.display= "block"
}

function fermerBandeAnnonce(){
    var source = document.getElementById("LaBandeAnnonce").getAttribute("src");
    document.getElementById("LaBandeAnnonce").setAttribute("src", source);
    
    document.getElementById("LaBandeAnnonce").style.display= "none";
    document.getElementById("BtnFermerBA").style.display= "none";
    
    document.body.style.backgroundColor= "white";
    document.getElementById("fond").style.opacity = 1;
}