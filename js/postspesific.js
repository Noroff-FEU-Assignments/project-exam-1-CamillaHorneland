const postspesificContainer = document.querySelector(".postSpesific");
const title = document.querySelector("title");

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
              <div class="date"><p>${result["date"]}</p></div>
              <div class="getCatogory">${result["_embedded"]["wp:term"][0][0]["name"]}</div>
              <div class="mainContent"><p>${result["content"]["rendered"]}</p></div>
          </div>`;
                
        //  ${result[i]._embedded["wp:featuredmedia"][0]["sizes:full"]["source_url"]}
    }
    
catch (error) {
      console.log(error);
      postspesificContainer.innerHTML = message("error", error);
   }

}

fetchPost();
