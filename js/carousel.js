const caruselContainer = document.querySelector(".caruselContainer");
const caruselWrapperContainer = document.querySelector(".caruselWrapper");
const caruselPrev = document.getElementById("caruselPrev");
const caruselNext = document.getElementById("caruselNext");
const caruselChangeContainer = document.querySelector(".caruselChange");
const caruselMobil = document.querySelector(".caruselMobil");
const caruselContainer2 = document.querySelector(".caruselContainer2");

const baseurl = "https://camillahorneland.no/slime-care/wp-json/wp/v2/posts?_embed&per_page=8";

async function getCarusel () {
    try {
        const response = await fetch(baseurl);
        
        const result = await response.json ();

        console.log(result);
        console.log(url);
       
         for(let i = 0; i < result.length; i++) {

        let namePost = result[i].title.rendered;
        let imagePost = result[i]._embedded["wp:featuredmedia"][0].source_url;
        let textPost = result[i].excerpt.rendered;

        
            if(i===0 || i === 1 || i === 2 || i === 3) {
               caruselContainer.innerHTML +=
                `<div class="carusel">
                 <div class="image"><img src='${imagePost}'alt='${result[i]["_embedded"]["wp:featuredmedia"][0]["alt_text"]}'/></div>
                 <h4>${namePost}</h4>
                 <p>${textPost}</p>
                 <div class="go_post">
                     <a href="blogspesific.html?id=${result[i].id}"><p>Read more >>></p></a>
                 </div> 
          </div>`;


            } if(i===4 || i === 5 || i === 6 || i === 7) {   
                caruselContainer2.innerHTML +=
                 `<div class="carusel">
                 <div class="image"><img src='${imagePost}'alt='${result[i]["_embedded"]["wp:featuredmedia"][0]["alt_text"]}'/></div>
                 <h4>${namePost}</h4>
                 <p>${textPost}</p>
                 <div class="go_post">
                     <a href="blogspesific.html?id=${result[i].id}"><p>Read more >>></p></a>
                 </div> 
          </div>`;
            
      }

      if (i === 3) {
        break;
      }
    }


}catch (error) {
console.log(error);
 }


};  


getCarusel();


caruselNext.addEventListener("click", () => {
    const slideWith = caruselContainer.clientWidth;
    caruselContainer.scrollLeft +=slideWith;
 });



 
// caruselPrev.addEventListener("click", () => {
//     const slideWith = caruselContainer2.clientWidth;
//     caruselContainer2.scrollLeft -=slideWith;
// });  

        //        caruselContainer2.innerHTML +=
        //  `<div class="carusel">
        //          <h4 class="blogname">${result[i].title.rendered}</h4>
        //          <div class="image"><img src='${result[i]["_embedded"]["wp:featuredmedia"][0]["source_url"]}'alt='${result[i]["_embedded"]["wp:featuredmedia"][0]["alt_text"]}'/></div>
        //           <p>${result[i].excerpt.rendered}</p>
        //          <div class="go_post">
        //              <a href="blogspesific.html?id=${result[i].id}"><p>Read more >>></p></a>
        //          </div>
        //   </div>`;
    


