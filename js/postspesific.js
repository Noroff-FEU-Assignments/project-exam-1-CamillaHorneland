const postspesificContainer = document.querySelector(".postSpesific");
const title = document.querySelector("title");
const namePostContainer = document.querySelector(".name");
const categoryPost = document.querySelector(".category");
const imageNormalPost = document.querySelector(".imageNormal");
const textPostContainer = document.querySelector(".text");
const datePost = document.querySelector(".date");
const modalsContainer = document.querySelector(".modal");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://camillahorneland.no/slime-care/wp-json/wp/v2/posts/" + id + "?_embed&";

console.log(id);
console.log(url);

const fetchPost = async() => {
    try {
        const response = await fetch(url);
        const result = await response.json ();
        console.log(result);


      
         document.title += `${result["title"]["rendered"]}`;
         

         let namePost = result["title"]["rendered"];
         let catPost = result["_embedded"]["wp:term"][0][0]["name"];
         let imagePost = result["_embedded"]["wp:featuredmedia"][0]["source_url"];
         let altText = result["_embedded"]["wp:featuredmedia"][0]["alt_text"];
         let textPost = result["content"]["rendered"];
         let date = result["date"];
        
        
         namePostContainer.innerHTML +=   
          `<h2>${namePost}</h2>`;

          categoryPost.innerHTML += 
          `<div class="btn2">${catPost}</div>`;

          imageNormalPost.innerHTML += 
          `<img src='${imagePost}'alt='${altText}'/>`;

          textPostContainer.innerHTML += 
          `<p>${textPost}</p>`;

          datePost.innerHTML += 
          `<p>${date}</p>`;

    // <div id="modalImage"><img src='${imagePost}'alt='${altText}'/></div>
              
       
          imageNormalPost.onclick = function () {
            modalsContainer.innerHTML = 
            `<img src='${imagePost}'alt='${altText}'/>`;
            modalsContainer.style.display = "flex";
           
          }
         
           window.onclick = function(event) {
        if (event.target == modalsContainer ) {
          modalsContainer.style.display = "none";
          
        }
    };

         
    }catch (error) {
      console.log(error);
      postspesificContainer.innerHTML = message("error", error);
   }

};

fetchPost();


 