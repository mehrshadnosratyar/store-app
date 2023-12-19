import { Link } from "react-router-dom";
import { quantityHandler, shortenText } from "../helper/helper";
import { useCart } from "../context/cartContext";


function ProductCard({product}) {
    const {rating} = product
    const [state,dispatch] = useCart()
    const cardQuantity = quantityHandler(state,product.id)
    console.log(cardQuantity);
    function clickHandler(type){
        dispatch({ type, payload: product})
    }
    return ( 
        <div className="flex flex-col gap-1 rounded-xl bg-neutral-100 w-60 border-2 p-5">
        <Link to={`/products/${product.id}`}>
        <img className="w-56 h-48" src={product.image} alt={product.title} />
        <h4 className="text-lg text-sky-800 font-bold h-16 line-clamp-1">{shortenText(product.title)}</h4>
        </Link>
        <div className="flex justify-between items-center">
            <span className=" font-semibold text-zinc-700">${product.price}</span>
            <div className="flex gap-[2px] text-amber-500">
                <span>{rating.rate}</span>
                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
</svg>
</span>
                </div>
        </div>
        <div>
            {cardQuantity==1 &&  <button onClick={() => clickHandler("REMOVE_ITEM")} className="group bg-sky-900 hover:bg-slate-700 transition-all text-amber-50 rounded-lg flex items-center mx-auto mt-4 p-2 gap-2">
            <span className="fon-medium text-sm">Add to shoping cart</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg></span>
        </button>}
        {cardQuantity<1 && <button onClick={() => clickHandler("DECREASE")} className="group bg-sky-900 hover:bg-slate-700 transition-all text-amber-50 rounded-lg flex items-center mx-auto mt-4 p-2 gap-2">
            <span className="fon-medium text-sm">Add to shoping cart</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg></span>
        </button>}
            {cardQuantity==0 ? ( <button onClick={() => clickHandler("ADD_ITEM")} className="group bg-sky-900 hover:bg-slate-700 transition-all text-amber-50 rounded-lg flex items-center mx-auto mt-4 p-2 gap-2">
            <span className="fon-medium text-sm">Add to shoping cart</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg></span>
        </button>) :(<button onClick={() => clickHandler("INCREASE")} className="group bg-sky-900 hover:bg-slate-700 transition-all text-amber-50 rounded-lg flex items-center mx-auto mt-4 p-2 gap-2">
            +
        </button>) }
       
       
        
        
        </div>
    </div> );
}

export default ProductCard;