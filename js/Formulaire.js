window.addEventListener("load", function(){

    btnCritique = document.getElementById("BtnEnvoieCritique");
    var Pseudo = document.getElementById("PseudoPersonne");
    var Commentaire = document.getElementById("Commentaire");

    var inputPseudo = document.getElementsByTagName("input");
    var textarea = document.getElementsByTagName("textarea");

    
    btnCritique.addEventListener('click', function(){

       
        var saisie = verifierSaisi(inputPseudo, textarea);

        if(saisie)
        {
            Pseudo = Pseudo.value;
            Commentaire = Commentaire.value;

            var labelClient = document.getElementById("Pseudo");
            var commentClient = document.getElementById("Comment");

            labelClient.innerHTML = Pseudo + " : ";
            commentClient.innerHTML = Commentaire;
        }

        else{
            alert("Veuillez remplir tous les champs pour partager une critique.");
        }

    })


    function verifierSaisi(p_listeInput, p_textarea){
        saisie = true;
        for(input of p_listeInput){
            if(input.value == "" || input.value == " "){
                saisie = false;
            }
        }
        for(textarea of p_textarea){
            if(textarea.value == "" || textarea.value == " "){
                saisie = false;
            }
        } 
        return saisie;
    }

})