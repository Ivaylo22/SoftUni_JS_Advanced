function lockedProfile() {
    profiles = Array.from(document.getElementsByClassName('profile'));

    profiles.forEach(profil => {
        let radio1 = profil.getElementsByTagName('input')[0];

        let button = profil.getElementsByTagName('button')[0];

        button.addEventListener('click', function(event){
            if(radio1.checked){
                return;
            }
            else {
                if(event.target.textContent === "Hide it"){
                    profil.getElementsByTagName('div')[0].style.display = "none";   
                    event.target.textContent = "Show more" 

                }
                else {
                    profil.getElementsByTagName('div')[0].style.display = "block";    
                    event.target.textContent = "Hide it" ;

                }   
            }
        })
    });
}