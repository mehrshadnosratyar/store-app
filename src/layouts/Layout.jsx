import Header from "../components/Header";

function Layout({children}) {
    return ( 
        <div className="w-5/6 container mx-auto">  
        <Header/>
        {children}
        </div>
        
     );
}

export default Layout;