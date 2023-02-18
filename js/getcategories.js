const categoriesButtons = document.querySelector(".categories div");
const spesificCategories = document.querySelector(".postsCategories");


const url = "https://camillahorneland.no/slime-care/wp-json/wp/v2/posts/?_embed&per_page=100";

async function getRightCategories() {
    try {
        const response = await fetch(url);
        
        const result = await response.json();

    
        result.forEach(post => {
            const categories = post._embedded["wp:term"][0];
            // console.log(categories);
        });

        const categoryMap = {
           "all": document.querySelector(".category1"),
           "product": document.querySelector(".category2"),
           "qa": document.querySelector(".category3"),
           "other": document.querySelector(".category4")
        };

        result.forEach(post => {
            post._embedded["wp:term"][0].forEach(category => {
                const button = categoryMap[category.slug];
                if(button) {
                    button.addEventListener("click", () => {
                        // console.log(`Button for category ${category.slug} was clicked`);
                        window.location.href = `categories.html?category=${category.slug}`;
                    });
                }

            });
        });
 
    }catch (error) {
console.log(error);
 }

}

getRightCategories();

