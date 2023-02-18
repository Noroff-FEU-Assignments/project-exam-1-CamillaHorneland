const containerCategories = document.querySelector(".categoriesContainer");
const nameCategory = document.querySelector(".nameCategory");

// const url = "https://camillahorneland.no/slime-care/wp-json/wp/v2/posts/?_embed&per_page=100";

async function getPostsCategories () {
    let category = null;
    try {
        const response = await fetch(url);
        const result = await response.json ();

        const urlParams = new URLSearchParams(window.location.search);
        const categoryParam = urlParams.get("category");
        const category = categoryParam === null ? "all" : categoryParam;
        
        let filteredPosts;
        if(category === "all") {
            filteredPosts = result;

        } else {  
            filteredPosts = result.filter(post => {
            return post._embedded["wp:term"][0].some(term => term.slug === category);
        });
        }

        for(let i = 0; i < filteredPosts.length; i++) {
    
        if(category === "all") {
            document.title = "Slime-blog | All posts";
            nameCategory.innerHTML = "All Posts";
        }else {
         document.title = `Slime-blog |  ${filteredPosts[i]["_embedded"]["wp:term"][0][0]["name"]}`;
         nameCategory.innerHTML = `${filteredPosts[i]["_embedded"]["wp:term"][0][0]["name"]}`;
         }

       

          

        // nameCategory.innerHTML =  
        //   `${filteredPosts[i]["_embedded"]["wp:term"][0][0]["name"]}`;

      
         containerCategories.innerHTML +=
         `<div class="blog">
             <div class="blogcontent">
                 <div class="blogimage"><img src='${filteredPosts[i]["_embedded"]["wp:featuredmedia"][0]["source_url"]}'alt='${filteredPosts[i]["_embedded"]["wp:featuredmedia"][0]["alt_text"]}'/></div>
                 <div class="blogtext">
                 <h2 class="blogname">${filteredPosts[i].title.rendered}</h2>
                 <p>${filteredPosts[i].excerpt.rendered}</p>
                  <div class="go_post">
                      <a href="blogspesific.html?id=${filteredPosts[i].id}"><p>Read more >>></p></a>
                  </div>
             </div>
         </div>`;
      }

    }catch (error) {
  console.log(error);
 }

}

getPostsCategories()




