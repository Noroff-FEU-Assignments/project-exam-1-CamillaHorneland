const postspesificContainer = document.querySelector(".postSpesific");
const title = document.querySelector("title");
const modalImage = document.getElementById("modalImage");
const modalsContainer = document.querySelector(".modal");
const imageContainer = document.querySelector(".blogImage");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://camillahorneland.no/slime-care/wp-json/wp/v2/posts/" + id + "?_embed";

console.log(id);
console.log(url);

const fetchPost = async() => {
    try {
        const response = await fetch(url);
        const result = await response.json ();
        console.log(result);

        
        postspesificContainer.innerHTML = "";
 
         
        
          postspesificContainer.innerHTML += 
              
          `<div class="post">
              <div class="name"><h2>${result["title"]["rendered"]}</h2></div>
              <div class="getCatogory btn2">${result["_embedded"]["wp:term"][0][0]["name"]}</div>
                <div id="modalImage"class="blogImage"><img src='${result["_embedded"]["wp:featuredmedia"][0]["source_url"]}'</><a class="modal"></a></div>
                <div class="text"><p>${result["content"]["rendered"]}</p></div>
                <div class="date"><p>${result["date"]}</p></div>
              </div>
          </div>`;
          document.title += `${result["title"]["rendered"]}`;

        //  imageContainer.onclick = function (){
        // modalsContainer.innerHTML += `${result["_embedded"]["wp:featuredmedia"][0]["source_url"]}`;
        // console.log("clicked")
        //  }
         
}catch (error) {
      console.log(error);
      postspesificContainer.innerHTML = message("error", error);
   }

}

fetchPost();
