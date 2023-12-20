import { Navigate, Route, Routes } from "react-router-dom"
import ProductsPage from "./Pages/ProductsPage";
import ProductDetails from "./Pages/ProductDetails";
import CheckoutPage from "./Pages/CheckoutPage";
import PageNotFound from "./Pages/404";
import Layout from "./layouts/Layout";


function App() {
  return(
    <Layout>  
    <Routes>
    <Route index element={<Navigate to="/products" replace />}/>
    <Route path="/products" element={<ProductsPage />} />
    <Route path="/products/:id" element={<ProductDetails />} />
    <Route path="/checkout" element={<CheckoutPage />} />
    <Route path="*" element={<PageNotFound />} />
    </Routes>
    </Layout>
  )
}

export default App;
