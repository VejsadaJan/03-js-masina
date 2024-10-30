


  function zjistitTridyPriKliknuti() {
    // vybereme všechny elementy s třídami mitch nebo vasho
    const elementy = document.querySelectorAll('.mitch, .vasho');
  
    // Pro každý nalezený element přidáme event listener pro kliknutí
    elementy.forEach(element => {
      element.addEventListener('click', () => {
     
        //   console.log(`Bylo kliknuto na element s třídou: ${element.className}`);
        if (element.classList.contains('mitch')) {
         
         
          
          // Kód, který se spustí při kliknutí na Mitch
          // console.log('Bylo kliknuto na Mitch. ', element.textContent);
            
            // Zde vložte další akce pro Mitch


            let scorePlus = element.textContent;
            scorePlus++;
            
            element.innerHTML = `
                  <img src="./images/mitch.jpg" alt="mitch">
                  <p class="score">${scorePlus}</p>
                  `;
                         

          } else if (element.classList.contains('vasho')) {
            
            // Kód, který se spustí při kliknutí na Vasho
            // console.log('Bylo kliknuto na Vasho. ');
            
            // Zde vložte další akce pro Vasho

              let scorePlus = element.textContent;
              scorePlus++;
              
              element.innerHTML = `
                    <img src="./images/vasho.jpg" alt="vasho">
                    <p class="score">${scorePlus}</p>
                    `;
                          

          }

      });
    });
  }




// -------------------------
// hlavni kod
// ---------------------------


zjistitTridyPriKliknuti();
