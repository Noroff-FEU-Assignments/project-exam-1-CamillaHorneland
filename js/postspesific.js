const postspesificContainer = document.querySelector(".postSpesific");
const title = document.querySelector("title");
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


        postspesificContainer.innerHTML = "";
         document.title += `${result["title"]["rendered"]}`;
          postspesificContainer.innerHTML += 
              
          `<div class="post">
              <div class="name"><h2>${result["title"]["rendered"]}</h2></div>
              <div class="getCatogory btn2">${result["_embedded"]["wp:term"][0][0]["name"]}</div>
                <div id="modalImage"><img src='${result["_embedded"]["wp:featuredmedia"][0]["source_url"]}'</></div>
                <div class="text"><p>${result["content"]["rendered"]}</p></div>
                <div class="date"><p>${result["date"]}</p></div>
              </div>
          </div>`;

       
          modalImage.onclick = function () {
            modalsContainer.innerHTML = "";
            modalsContainer.innerHTML += 
            `<div class="bigImage"> 
                <img src='${result["_embedded"]["wp:featuredmedia"][0]["source_url"]}'</>
            </div>`;
            modalsContainer.style.display = "flex";
          }
         
          window.onclick = function(event) {
        if (event.target == modalsContainer) {
          modalsContainer.style.display = "none";
        }}

         
    }catch (error) {
      console.log(error);
      postspesificContainer.innerHTML = message("error", error);
   }

}

fetchPost();
