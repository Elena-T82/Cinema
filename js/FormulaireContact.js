window.addEventListener("load", function(){

btnContact = document.getElementById("btnEnvoyer");

btnContact.addEventListener("click", function(){

    var listeInput = document.getElementsByTagName("input");
    var contactPseudo = document.getElementById("PseudoPersonne").value;
    var contactCourriel = document.getElementById("Courriel").value;
    var contactSujet = document.getElementById("Sujet").value;
    var contactCommentaire = document.getElementsByTagName("Commentaire");

    var saisie = verifierSaisiContact(listeInput, contactCommentaire)

    if(saisie)
    {
        alert("Votre commentaire a bien été envoyé, merci !");
    }
    
    else{
        alert("Vous devez remplir tous les champs pour envoyer un commentaire.");
    }

})

function verifierSaisiContact(p_listeInput, p_textarea){
    var saisie = true;

    for(input of p_listeInput){
        if((input.type == "text" || input.type == "email") && (input.value == "" || input.value == " "))
        {
            saisie = false;
        }

    for(textarea of p_textarea){
        if(textarea.value == "" || textarea.value == " ")
        {
            saisie = false
        }
    }

        return saisie;
    }

}
})