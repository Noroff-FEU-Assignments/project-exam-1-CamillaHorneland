const postsContainer = document.querySelector(".posts");
const postmoreContainer = document.querySelector(".postmore");

var page = 2;

const url = "https://camillahorneland.no/slime-care/wp-json/wp/v2/posts?per_page=20&_embed&page=" + "1";



async function getPosts () {
    try {
        const response = await fetch(url);
        
        const result = await response.json ();

        console.log(result); 
        console.log(url);
    

        postsContainer.innerHTML = "";
       

        for(let i = 0; i <result.length; i++) {
         
            number = result.length;
            getPosts(10);

            function onclick => getPosts(11++);
            
        postsContainer.innerHTML +=
         `<div class="blog">
             <div class="blogcontent">
                 <div class="blogimage"><img src='${result[i]._embedded["wp:featuredmedia"][0]["source_url"]}'</></div> 
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
postsContainer.innerHTML = message("error", error);
 }

}

getPosts();


















        //  for(let i = 0; i <result.length; i++) 

        //     for (let i = 10; i <20; i++) 

  