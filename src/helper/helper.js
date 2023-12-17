function shortenText (text){
   const shortText = text.split(" ").slice(0,3)
   return shortText
}
function serachProducts(products,search){
   if(!search) return products;
   const serchedProducts = products.filter(product => product.title.toLowerCase().includes(search))
   return serchedProducts
}
function categoryFilterProduct(products,category){
   if(!category) return products;
   const categoryFiltered = products.filter(product => product.category.toLowerCase()==category)
   return categoryFiltered
}
function createQueryHandler(currentQuery,newQuery){
   if(newQuery.category=="all"){
      const {category , ...rest} = currentQuery
      return rest;
   }
   if(newQuery.search==""){
      const {search , ...rest} = currentQuery
      return rest;
   }
   return {...currentQuery,...newQuery}
}
export {shortenText , serachProducts,categoryFilterProduct,createQueryHandler};