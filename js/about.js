const aboutContainer = document.querySelector(".about_info");

const url = "https://camillahorneland.no/slime-care/wp-json/wp/v2/pages/79";

async function getAbout() {
    try {
        const response = await fetch(url);
        
        const result = await response.json ();

        console.log(result); 

        aboutContainer.innerHTML = ""; {
             
        aboutContainer.innerHTML +=
         `<p>${result.content.rendered}</p>`;
 } ;

}catch (error) {
console.log(error);
aboutContainer.innerHTML = message("error", error);
 }

}

getAbout();