import { Navigate } from "react-router-dom";
import { shortenText } from "../helper/helper";
function CheckoutPage() {
    if(!state.itemsCounter){
       return( <Navigate to={"/products"} />)
    }
    return( 
        <section className="flex gap-5">
            {/* <div className="w-2/5 max-h-80 bg-sky-100 rounded-xl p-6 flex flex-col gap-8 justify-between">
                <h2 className="text-3xl text-sky-600 font-semibold">Your shopping cart</h2>
                <div className="w-full p-3 bg-sky-200 font-semibold flex justify-between rounded-lg">
                    <span>Itmes</span>
                    <span>{state.itemsCounter}</span>
                    </div>
                <div className="w-full p-3 bg-sky-200 font-semibold flex justify-between rounded-lg"><span>Total price</span>
                    <span>{state.total}</span></div>
                <button className="w-32 p-1 text-white rounded-md block mx-auto text-center bg-teal-700 hover:bg-teal-700 leading-7">checkout</button>
            </div>
            <div className="w-full flex flex-col gap-4">
                {state.selectedItems.map((item) =>(
                    <div className="bg-sky-100 flex justify-between px-16 py-3 rounded-lg items-center w-full" key={item.id}>
                        <div>
                            <img className="w-20 rounded-md" src={item.image} alt={item.title} />
                        </div>
                        <div>
                            {shortenText(item.title)}
                        </div>
                        <div>
                            {`$${item.price}`}
                        </div>
                    </div>
                ))}
            </div> */}
        </section>
    );}

export default CheckoutPage;