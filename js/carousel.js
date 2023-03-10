const caruselPrev = document.getElementById("caruselPrev");
const caruselNext = document.getElementById("caruselNext");
const caruselChangeContainer = document.querySelector(".caruselChange");
const carouselContainer = document.getElementById('carousel_container');
const baseurl = "https://camillahorneland.no/slime-care/wp-json/wp/v2/posts?_embed&per_page=6";
let slidesLength = 0;
let maxSlide = 0;

async function getCarusel() {
    try {
        const response = await fetch(baseurl);
        
        const result = await response.json ();

        console.log(result);
        console.log(url);
        
        
        const totalPosts = result.length;
        const carouselWidth = Math.ceil(totalPosts / 2)*100;
        carouselContainer.style.width = carouselWidth + "%";

        for(let i = 0; i < totalPosts; i++) {
            let namePost = result[i].title.rendered;
            let imagePost = result[i]._embedded["wp:featuredmedia"][0].source_url;
            let textPost = result[i].excerpt.rendered;
            if((i % 2) == 0) {
                carouselContainer.innerHTML += `<div class="carousel_holder" id="holder-${i}"></div>`;
                slidesLength++;
                maxSlide = slidesLength-1;
            }
            
            var carouselHolder = carouselContainer.lastChild;
            carouselHolder.innerHTML += 
            `<div class="carusel">
                <a href="blogspesific.html?id=${result[i].id}">
                  <div class="image"><img src='${imagePost}'alt='${result[i]["_embedded"]["wp:featuredmedia"][0]["alt_text"]}'></div>
                  <div class="namePost"><h4>${namePost}</h4></div>
                  <p>${textPost}</p>
                  <div class="go_post">
                    <p>Read more &#62;&#62;&#62;</p>
                  </div>
                </a>
            </div>`;
         }
         
     }catch(error) {
        console.log(error);
        carouselContainer.innerHTML = message("error", error);
    }
}

getCarusel();

let curSlide = 0;

        caruselNext.addEventListener("click", function () {
            

            if(curSlide != maxSlide)
                curSlide++;
            else
                curSlide = 0;

            carouselContainer.style.left = "-"+(curSlide*100)+"%";
        });

        caruselPrev.addEventListener("click", function () {
        
        if (curSlide === 0) {
            curSlide = maxSlide;
        } else {
            curSlide--;
        }
        carouselContainer.style.left = "-"+(curSlide*100)+"%";
        });

 

 


 
 

     
    


