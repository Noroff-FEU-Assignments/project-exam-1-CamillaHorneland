const categoriesContainer = document.querySelector(".categories");
const categories = [];

const url = "https://camillahorneland.no/slime-care/wp-json/wp/v2/categories/";


async function getRightCategories() {
    try {
        const response = await fetch(url);
        
        const result = await response.json ();

        for (let i = 0; i < result.length; i++) {
          categories.push({id: result[i].id});
        }
       console.log(categories);

          categoriesContainer.innerHTML = "";

         for(let i = 0; i < result.length; i++) {

        categoriesContainer.innerHTML = 
            `<a href="categories.html" id="" class="btn2"  title="All posts">All</a>
            <a href="categories.html" id="5" class="btn2"  title="product posts">Products</a>
            <a href="categories.html" id="3" class="btn2" title="q&a posts">Q&A</a>
            <a href="categories.html" id="4" class="btn2" title="other posts">Other</a>`; 
        }

    }catch (error) {
console.log(error);
 }

}

getRightCategories();

    