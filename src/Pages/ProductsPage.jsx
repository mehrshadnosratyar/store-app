import { useProducts } from "../context/Context";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

function ProductsPage() {
    const productData = useProducts()
    
    return ( 
        <section className="w-4/5 container mx-auto flex">
            <div className="flex flex-wrap gap-5 w-full">
                {!productData.length && <Loader />}
                {productData.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
            <div className="w-60 p-5 h-60 bg-emerald-400">side bar</div>
        </section>
        
     )
}

export default ProductsPage;