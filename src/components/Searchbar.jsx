
function Searchbar({search,setSearch,searchHandler}) {   
    return ( 
        <div className="flex items-center gap-4">
            <input className="my-7 ml-2 h-9 w-64 rounded-lg p-3 border-2 border-blue-400" type="text" value={search} placeholder="search.." onChange={e => setSearch(e.target.value.toLowerCase())} />
            <button onClick={searchHandler} className="w-10 h-10 flex justify-center items-center rounded-lg bg-sky-400"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
</button>
        </div>
     );
}

export default Searchbar;