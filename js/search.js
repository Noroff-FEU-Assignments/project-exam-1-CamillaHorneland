const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchbtn");
const searchResults = document.getElementById("searchResults");
const menuButton = document.querySelector(".close");
const menu = document.getElementById("#hamburger-menu");

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
             <div class="blogcontent">
                <h2 class="blogname">${postTitle}</h2>
                <div class="blogimage"><img src='${image}'alt='${altText}'></div>
                <p>${postExcerpt}</p>
                <div class="go_post">
                      <a href="blogspesific.html?id=${post.id}"><p>Read more &#62;&#62;&#62;</p><a>
              </div>
            </div>`;
 
          searchResults.innerHTML += resultItem;
          console.log("Clearing search input");
          searchInput.value = "";
        });

        const closeButton = document.createElement("button");
        closeButton.id = "closeSearch";
        closeButton.className = "btn";
        closeButton.textContent = "Close search result";
        searchResults.appendChild(closeButton);
        closeButton.addEventListener("click", () => {
          searchResults.innerHTML = "";
          closeButton.style.display = "none";
        });
        
      if (window.matchMedia("(max-width: 800px)").matches) {
          const hamburgerMenu = document.getElementById("hamburger-menu");
          if (hamburgerMenu.checked) {
            hamburgerMenu.checked = false;
          }
        }
      }
    })
    .catch(error => {
      searchResults.innerHTML = `<p>Error: ${error.message}</p>`;
    });
});
