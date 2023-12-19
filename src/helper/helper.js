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


function quantityHandler(state,id){
   const index = state.selectedItems.findIndex((item) => item.id=== id)
   if(index==-1){
      return 0;
   }
   return state.selectedItems[index].quantity
}


function sumProducts(products){
   const itemsCounter = products.reduce((acc , cur)=> acc + cur.quantity,0)
   const total = products.reduce((acc,cur)=> acc + cur.price * cur.quantity,0).toFixed(2)

   return{itemsCounter,total}
}
export {shortenText,quantityHandler , serachProducts,categoryFilterProduct,createQueryHandler,sumProducts};