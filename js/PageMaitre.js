function Menu(accueil, film, saga, series, jeuxActuels, jeuxFutur, contact, image){
    document.write("<nav><ul>");
        document.write("<li><a href='" + accueil + "'>Accueil</a></li>");
        document.write("<li class='deroulant'><a href='#'>Film et saga ▼</a>");
            document.write("<ul class='sous'>");
                document.write("<li><a href='" + film + "'>Film</a></li>");
                document.write("<li><a href='" + saga + "'>Saga</a></li>");
            document.write("</ul></li>");
        document.write("<li><a href='" + series + "'>Séries</a></li>");
        document.write("<li class='deroulant'><a href='#'>Jeux-vidéo ▼</a>");
            document.write("<ul class='sous'>");
                document.write("<li><a href='" + jeuxActuels + "'>Jeux vidéo actuels</a></li>");
                document.write("<li><a href='" + jeuxFutur + "'>Jeux vidéo à venir</a></li>");
            document.write("</ul></li>");
        document.write("<li><a href='" + contact + "'>Contact</a></li>");
    document.write("</ul></nav>");

    document.write("<img id='logo' src='" + image + "' alt='logo'>");
}


function PiedDePage(logo){
    document.write("<div id='debutFooter'></div>");
    document.write("<img id='logo' src='" + logo + "' alt='logo'>");
    document.write("<p>Movies Advices</p>");
    document.write("<p>Cegep La Pocatière</p>");
    document.write("<p>123-456-7788</p>");

    document.write("<div id='copyright'>");
    document.write("<p>Copyright @Movies Advices</p>");
    document.write("</div>");
}