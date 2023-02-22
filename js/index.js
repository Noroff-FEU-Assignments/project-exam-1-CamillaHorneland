const welcomeContainer = document.querySelector(".welcomeContainer");

const url = "https://camillahorneland.no/slime-care/wp-json/wp/v2/pages/81";

async function getWelcome() {
    try {
        const response = await fetch(url);
        
        const result = await response.json ();

        console.log(result); 

        welcomeContainer.innerHTML = ""; {
             
        welcomeContainer.innerHTML +=
         `<p>${result.content.rendered}</p>`;
        };
    }catch (error) {
        console.log(error);
        welcomeContainer.innerHTML = message("error", error);
    }
}

getWelcome();