const capitalFirtLetter = (str) => {
    let result = str.slice()
    return result[0].toUpperCase() + result.slice(1);
}

$(document).ready(function () {

    // Quand le final-submint est cliqué : imprimme les variables dans le modèle adéquat
    $('#final-submit').on('mouseenter', function () {
        //-----------------------------
        // Variables issues du formulaire
        //-----------------------------

        //###############
        //Informations personelles
        //###############

        //Nom
        let variableNom = $('#nom').val();
        //Prénom
        let inputPrenom = $('#prenom').val();
        let variablePrenom = capitalFirtLetter(inputPrenom);
        //Tel
        let inputTelephone = $('#telephone').val();
        //Email
        let inputEmail = $('#email').val();
        //Adresse
        let inputAdresse = $('#adresse').val();

        //Partie 2
        let inputEntreprise = $('#nom-entreprise').val();
        let inputRecruteur = $('#nom-recrut').val();
        let variableRecruteur = capitalFirtLetter(inputRecruteur);

        //Date : 
        let n = new Date();
        let y = n.getFullYear();
        let m = n.getMonth();
        let d = n.getDate();
        const mois = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
        $.ajax({
            url: "https://geolocation-db.com/jsonp",
            jsonpCallback: "callback",
            dataType: "jsonp",
            success: function (location) {
                $('#city').html(location.city + ', ');
            }
        });

        //Radio monsieur ou madame :
        let radioMonsMad = $("input[name='monsieur-madame']:checked").val();

        //cursus 
        let inputCursus = $('#cursus').val();
        //titre du poste 
        let inputTitre = $('#titre-poste').val();
        //type de poste 
        let inputType = $('#type-poste').val();
        //durée du stage
        let inputDuree = $('#duree').val();
        //disponibilités
        let inputDispo = $('#dispo').val();
        //matière importante
        let inputMat = $('#matiere').val();

        //informations sur l'experience préalable : 
        let inputMatiereExp = $('#exp-matiere').val();
        let inputExpEntreprise = $('#exp-entreprise-ip').val();
        let inputExpMission = $('#exp-mission').val();

        // completez ces informations : 
        let inputJeune = $('#jeune').val();
        let inputToujours = $('#toujours').val();
        let inputOrienter = $('#orientation').val();
        let inputReconnue = $('#reconnue').val();
        //-----------------------------
        //Assignation des variables au texte
        //-----------------------------

        //Informations personelles

        //Nom
        $('.pin-nom').text(variableNom.toUpperCase());
        //Prénom
        $('.pin-prenom').text(variablePrenom);
        //Tel
        $('#pin-tel').text(inputTelephone);
        //Email
        $('#personal-info-email').text(inputEmail);
        //Adresse
        $('#personal-info-adresse').text(inputAdresse);

        //nom de l'entreprise
        $('#entrep-nom').text(inputEntreprise.toUpperCase());
        //Nom du recrut
        $('.entrep-recrut').text(variableRecruteur);

        //Date et localisation
        $('#date').text("le " + d + " " + mois[m] + ' ' + y);

        //Radio monsieur ou madame 
        $('.mons-mad').text(radioMonsMad);

        //informations sur le poste recherché :
        $('#mon-cursus').text(inputCursus);
        $('#ma-duree').text(inputDuree);
        $('#mes-dispo').text(inputDispo);

        //experience : info entreprise d'acceuil : 
        $('#mon-option').text(inputMat);
        $('#matiereimp').text(inputMatiereExp);
        $('#mes-missions').text(inputExpMission);
        $('#exp-entreprise').text(inputExpEntreprise);

        //compeltez ces phrases : 
        $('#out-jeune').text(inputJeune);
        $('#out-toujours').text(inputToujours);
        $('#out-orienter').text(inputOrienter);
        $('#out-votre-entreprise').text(inputEntreprise);
        $('#out-reconnue').text(inputReconnue);
        $('.out-metier').text(inputTitre);

    })
    //-----------------------------
    //Interaction entre les parties du formulaire // changer avec .parent ... optimisation
    //----------------------------
    //step 1 : 
    /*$('#btn-stage').click(function () {
        $('#vos-informations-personnelles').toggleClass('caché');
        $('#type-de-lettre').toggleClass('caché');
    })

    $('#btn-suiv-2').click(function () {
        $('#informations-sur-lentreprise').toggleClass('caché');
        $('#vos-informations-personnelles').toggleClass('caché');
    })

    $('#btn-suiv-3').click(function () {
        $('#information-poste').toggleClass('caché');
        $('#informations-sur-lentreprise').toggleClass('caché');
    })

    $('#btn-suiv-4').click(function () {
        $('.premiere-exp').toggleClass('caché');
        $('#information-poste').toggleClass('caché');
    })

    $('.btn-suiv-5').click(function () {
        $('.affirmations').toggleClass('caché');
        $('.yolo').addClass('caché');
        $('.premiere-exp').toggleClass('caché');
        $('.premiere-exp-yes').toggleClass('caché');
    })
*/
    //Partie : experience 
    $('#btn-exp-oui').click(function () {
        $('#radio-exp').toggleClass('caché');
        $('#info-exp').toggleClass('caché');
        $('#exp-autre-parag').toggleClass('caché');
        $('#btn-exp-non').toggleClass('caché');
    });

    $('#btn-exp-non').click(function () {
        $('#matiere-groupe').toggleClass('caché');
        $('#exp-stage-parag').toggleClass('caché');
        $('#btn-exp-oui').toggleClass('caché');
    })
})





