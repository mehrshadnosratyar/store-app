import { Link, useParams } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import { fetchProducts } from "../features/products/productsSlice";
import { useEffect } from "react";
function ProductDetails() {
   const {id} = useParams()
   const dispatch = useDispatch()
   useEffect(() => {
    dispatch(fetchProducts())
    },[])
   const activeProduct = useSelector(store => store.product.products.find(item => item.id ==+id))
   const {image,title,description,price,rating,category} = activeProduct
   if(!activeProduct) return <Loader/>
    return ( 
        <>
        <section className="flex flex-col lg:flex-row p-12 justify-center gap-20 ">
            <div className=" p-5 border-2 bg-white border-sky-500 rounded-2xl">
                <img className=" rounded-xl" src={image} alt={title} />
            </div>
            <div className="space-y-6">
                <h3 className="text-3xl text-sky-700 font-semibold">{title}</h3>
                <p className="text-lg font-medium text-zinc-700">{description}</p>
                <div className="flex justify-between items-center">
                    <div>
                       <div className="flex text-sky-900 items-center text-xl gap-2">
                        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" dataSlot="icon" className="w-6 h-6">
                                         <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                                          <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z" clipRule="evenodd" />
                                          <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
                                        </svg>

                                </span> <span>${price}</span>
                        </div>
                        <div className="flex text-amber-500 items-center text-xl gap-2">
                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" dataSlot="icon" className="w-6 h-6">
                                         <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                        </svg>

                                </span> <span>{rating.rate}</span>
                        </div>
                        <div className="flex text-teal-600 items-center text-xl gap-2">
                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" dataSlot="icon" className="w-6 h-6">
                                 <path fillRule="evenodd" d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clipRule="evenodd" />
                                </svg>

                                </span> <span>{category}</span>
                        </div>
                    </div>
                    <Link to={"/products"}>
                    <button className="flex bg-teal-700 items-center h-10 text-white rounded-md p-3 gap-2">
                        <span>Back to products</span>
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                                </svg>
                        </span>
                    </button>
                    </Link>
                    
                </div>
            </div>
        </section>
        </>
    );
}

export default ProductDetails;