const postsContainer = document.querySelector(".posts");
const postmoreContainer = document.querySelector(".postmore");
const displayPosts = document.querySelector(".displayPosts");



const urlBase = "https://camillahorneland.no/slime-care/wp-json/wp/v2/posts";
const urlFirst = `${urlBase}?_embed&per_page=10`;
const urlRest = `${urlBase}?_embed&per_page=100`;


async function getPosts (url) {
    try {
        const response = await fetch(url);
        
        const result = await response.json ();

        console.log(result);
        console.log(url);

         postsContainer.innerHTML = "";

         for(let i = 0; i < result.length; i++) {

          
      
         postsContainer.innerHTML +=
         `<div class="blog">
             <div class="blogcontent">
                 <div class="blogimage"><img src='${result[i]["_embedded"]["wp:featuredmedia"][0]["source_url"]}'/></div>
                 <div class="blogtext">
                 <h2 class="blogname">${result[i].title.rendered}</h2>
                 <p>${result[i].excerpt.rendered}</p>
                  <div class="go_post">
                 <a href="blogspesific.html?id=${result[i].id}"><p>Read more >>></p></a>
             </div></div>
             </div>
          </div> 
            `;
      }

    }catch (error) {
console.log(error);
 }

}

getPosts(urlFirst)


displayPosts.addEventListener("click", () => {  
    getPosts(urlRest);
});

displayPosts.addEventListener("click", () => {  
    displayPosts.style.display ="none";
});










