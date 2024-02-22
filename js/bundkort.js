const params = new URLSearchParams(window.location.search);
const season = params.get("season");
console.log(season)
let endpoint
const url = "https://hvlgtuztakjwxqrwpwbm.supabase.co/rest/v1/test_product";

if(season){
  endpoint = url + "?seasons=eq." + season;
}else(endpoint = url);



fetch(endpoint, {
    method:"GET",
    headers: {
        apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2bGd0dXp0YWtqd3hxcndwd2JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4NTY2MTAsImV4cCI6MjAyMzQzMjYxMH0.hg7bA_euEged0Q_cE4NJq-E7zc7XELhRGXjj-RcAK8s"
    }
})
.then(res=>res.json())
.then(showproducts)


function showproducts(products){
    products.forEach(showproduct);
}
function showproduct(product){
    console.log(product)
    
    const template = document.querySelector("#Datawarp").content;
    const copy = template.cloneNode(true);

    copy.querySelector(".name").textContent=product.name;
    copy.querySelector(".catego").textContent=product.categories;
    copy.querySelector(".season").textContent=product.seasons;
    copy.querySelector(".click").href=product.recipe;
    copy.querySelector(".photo").src = product.photo;

    

    document.querySelector(".dataholder").appendChild(copy);
}


// {
//     "id": 1,
//     "created_at": "2024-02-13T21:21:24.522074+00:00",
//     "name": "Chanterelle",
//     "categories": "Mushrooms",
//     "image": "https://vildmadv2.vps.webdock.io/application/files/8916/2436/4262/Kantarel_ravarekort_app.png",
//     "recipe": "https://vildmad.dk/dk/opskrifter/kantareller-med-lardos",
//     "seasons": "Winter",
//     "Find": null
//   }
    