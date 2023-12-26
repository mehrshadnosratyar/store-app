import { Link } from "react-router-dom";
import { quantityHandler, shortenText } from "../helper/helper";
import { useCart } from "../context/cartContext";


function ProductCard({product}) {
    const {rating} = product
    const [state,dispatch] = useCart()
    const cardQuantity = quantityHandler(state,product.id)
    function clickHandler(type){
        dispatch({ type, payload: product})
    }
    return ( 
        <div className="flex flex-col gap-1 rounded-xl bg-white w-60 border border-double border-sky-300 p-5">
        <Link to={`/products/${product.id}`}>
        <img className=" w-56 h-52" src={product.image} alt={product.title} />
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
        <div className="flex justify-between items-center mt-5">
            {cardQuantity==1 &&  <button onClick={() => clickHandler("REMOVE_ITEM")} className="group w-10 h-10 bg-red-500 hover:bg-red-700 transition-all text-white rounded-lg flex items-center p-2">
            <span className="fon-medium text-sm"></span>
            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
            </span>
        </button>}
        {cardQuantity>1 && <button onClick={() => clickHandler("DECREASE")} className="group bg-red-500 hover:bg-red-700 transition-all text-white text-center items-center flex justify-center rounded-lg p-2 w-10 h-10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
</svg>

        </button>}
        {!!cardQuantity && <span className="leading-10">{cardQuantity}</span>}
            {cardQuantity==0 ? ( <button onClick={() => clickHandler("ADD_ITEM")} className="group bg-teal-700 hover:bg-teal-600 transition-all text-white rounded-lg flex items-center mx-auto p-2 gap-2">
            <span className="fon-medium text-md">Add to cart</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg></span>
        </button>) :(<button onClick={() => clickHandler("INCREASE")} className="group bg-teal-700 hover:bg-teal-600 transition-all text-white text-center items-center flex justify-center rounded-lg p-2 w-10 h-10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

        </button>) }
        </div>
    </div> );
}

export default ProductCard;