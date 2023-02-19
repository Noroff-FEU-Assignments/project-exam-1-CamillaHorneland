const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchbtn");
const searchResults = document.getElementById("searchResults");

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const apiUrl = `https://camillahorneland.no/slime-care/wp-json/wp/v2/posts?_embed&per_page=100&search=${searchTerm}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(posts => {
      if (posts.length === 0) {
        searchResults.innerHTML = "<p>No matching posts were found</p>";
      } else {
        searchResults.innerHTML = "";
        posts.forEach(post => {
          const postTitle = post.title.rendered;
          const postExcerpt = post.excerpt.rendered;
          const image = post._embedded["wp:featuredmedia"][0].source_url;
          const altText = post._embedded["wp:featuredmedia"][0].alt_text;

          const resultItem = 
          `<div class="blog">
             <div class="blogcontent>
                <div class="blogimage"><img src='${image}'alt='${altText}'/></div>
                <div class="blogtext">
                   <h2 class="blogname">${postTitle}</h2>
                   <p>${postExcerpt}</p>
                   <div class="excerpt">${postExcerpt}</div>
                   <div class="go_post">
                      <a href="blogspesific.html?id=${post.id}"><p>Read more >>></p></a>
                   </div>
               </div>
            </div>`;
 
          searchResults.innerHTML += resultItem;
          searchInput.value ="";
        });
      }
    })
    .catch(error => {
      searchResults.innerHTML = `<p>Error: ${error.message}</p>`;
    });
});