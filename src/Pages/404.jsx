import notFindBanner from "../assets/Lovepik_com-832506220-404 white cloud error page art word simple wind can be commercia.png"
function PageNotFound() {
    return ( <section className="w-full flex items-center  justify-center">
        <div className="w-full flex items-center justify-center flex-col">
            <img className="w-[35%]" src={notFindBanner} alt="Page not found" />
            <h4 className="text-4xl font-semibold">Page not found</h4>
        </div>
    </section> );
}

export default PageNotFound;