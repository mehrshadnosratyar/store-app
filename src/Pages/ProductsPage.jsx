import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import Searchbar from "../components/Searchbar";
import { useEffect, useState } from "react";
import {useSelector,useDispatch} from "react-redux";
import { categoryFilterProduct, createQueryHandler, serachProducts } from "../helper/helper";
import { useSearchParams } from "react-router-dom";
import { categories } from "../helper/list";
import { fetchProducts } from "../features/products/productsSlice";

function ProductsPage() {
    function categoryHandler(event){
        const category = event.target.innerText.toLowerCase()
        if (event.target.tagName!=="LI") return ; 
        setQuery(query => createQueryHandler(query,{category}));
    }
    function searchHandler(){
        setQuery(query => createQueryHandler(query,{search}))
    }
    const {products , loading} = useSelector((store) => store.product)
    const dispatch = useDispatch()
    const [search,setSearch] =useState()
    const [dsiplayed,setDisplayed] = useState([]);
    const [query,setQuery] = useState({})
    const [searchParams,setSearchParams]=useSearchParams()
    useEffect(() => {
        dispatch(fetchProducts())
    },[])
    useEffect(() => {
        setDisplayed(products)
    },[products])
    useEffect(()=>{
        setSearchParams(query)
        let finalProducts = serachProducts(products,query.search)
        finalProducts = categoryFilterProduct(finalProducts,query.category)
        setDisplayed(finalProducts)
    },[query])
    return (
        <>
        <section>
        <Searchbar search={search} setSearch={setSearch} searchHandler={searchHandler}/>
            <div className="flex gap-5">

            <div className="flex flex-wrap gap-3 w-full">
                {loading && <Loader />}
                {dsiplayed.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
            <div className="w-64 p-5 h-max bg-sky-200 rounded-xl">
                <h3 className="text-2xl mb-2 font-semibold">Categories</h3>
                <ul className="space-y-1">
                    {categories.map((category) => (<li key={category.id} onClick={categoryHandler} className={category.type.toLowerCase()==query.category ? "p-2 w-full hover:bg-sky-100 bg-sky-300 font-medium rounded-lg cursor-pointer mx-1 transition-all" : "p-2 w-full hover:bg-sky-100 font-medium rounded-lg cursor-pointer mx-1 transition-all"}>{category.type}</li>))}
                </ul>
            </div>
            </div>
        </section>
        </>
        
     )
}

export default ProductsPage;