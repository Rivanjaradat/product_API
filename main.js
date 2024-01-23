 async function getproduct(){
    const response=  await fetch("https://dummyjson.com/products");
  const data= await response.json();
  const product= data.products;
  const result= product.map(function(ele){
        return `
        <div class= card>
        <h2>${ele.title}</h2>
       <img src="${ele.images[0]}" >
       <span> price:${ele.price}</span>
        </div>
       
        `

  });
  document.querySelector(".phone").innerHTML=result;
}
   
getproduct();