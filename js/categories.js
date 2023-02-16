const postsFromCategories = document.querySelector(".postsCategories");
const categoriesContainer = document.querySelector(".categories");

// const queryString = document.location.search;
// const params = new URLSearchParams(queryString);
// const id = params.get("id");

const url = "https://camillahorneland.no/slime-care/wp-json/wp/v2/categories/";


async function getPostsCategories () {
    try {
        const response = await fetch(url);
        
        const result = await response.json ();

        console.log(result);
        console.log(url);

         postsFromCategories.innerHTML = "";

         for(let i = 0; i < result.length; i++) {

        document.title += `${["_embedded"]["wp:term"][0][0]["name"]}`;
      
         postsFromCategories.innerHTML +=
         `<div class="blog">
             <div class="blogcontent">
                 <div class="blogimage"><img src='${result[i]["_embedded"]["wp:featuredmedia"][0]["source_url"]}'alt='${result[i]["_embedded"]["wp:featuredmedia"][0]["alt_text"]}'/></div>
                 <div class="blogtext">
                 <h2 class="blogname">${result[i].title.rendered}</h2>
                 <p>${result[i].excerpt.rendered}</p>
                  <div class="go_post">
                      <a href="blogspesific.html?id=${result[i].id}"><p>Read more >>></p></a>
                  </div>
             </div>
         </div>`;
      }

    }catch (error) {
console.log(error);
 }

}

getPostsCategories()




