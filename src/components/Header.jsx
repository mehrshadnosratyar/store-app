import { Link } from "react-router-dom";

function Header() {
    return ( <header className="w-full mt-6 mb-12">
        <div className="w-full bg-sky-500 rounded-lg px-12 h-16 flex items-center justify-between">
            <Link to={"/products"}><h1 className="text-4xl font-semibold">Digi Store</h1></Link>
            <div className=" relative">
                <Link to={"/checkout"}>
            <button className="bg-sky-300 p-2 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
</svg>
</button>
                </Link>
                {/* {!!state.itemsCounter && <span className="absolute bg-teal-900 text-white left-7 -top-2 rounded-full py-1 px-2 text-xs">{state.itemsCounter}</span>} */}
            </div>
        </div>
    </header> );
}

export default Header;