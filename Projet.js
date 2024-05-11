        const monbouton = document.getElementById('monbouton');
        
                monbouton.addEventListener('click', () => {
                    alert('Vous voulez les services de cette personne');
                    alert('Votre demande a était envoyé avec succès!');
                });
        
        
        const monBouton = document.getElementById('monBouton');
            
                    monBouton.addEventListener('click', () => {
                        alert('Vous voulez les services de cette personne');
                        alert('Cette Personne est indisponible');
                    });

        
        
        const monFormulaire = document.getElementById('monFormulaire');
      
          monFormulaire.addEventListener('click', (event) => {
              event.preventDefault();
      
              const nom = document.getElementById('nom').value.trim();
              const prenom = document.getElementById('prenom').value.trim();
              const niveau = document.getElementById('niveau').value.trim();
              const skills = document.getElementById('skills').value.trim();
              const motivation = document.getElementById('motivation').value.trim();
      
              if (nom === '' || prenom === '' || niveau === '' || skills === '' || motivation === '') {
                  alert('Veuillez remplir tous les champs du formulaire !');
                  return;
              }
              alert('Votre demande a était envoyé avec succès!');
          });