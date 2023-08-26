import { useEffect, useState } from "react";

import CollectionCard from "./moviecard.jsx";


//144ba809
//75ea07fc935e3b512210d71898bb19dd

const App = () => {

    let [search, setsearch] = useState("superman");
    let [multi, setMulti] = useState([]);

    useEffect(() => {
        fetcher('shinchan');
    }, []);

    const fetcher = async (term) => {
        const response = await fetch(`https://api.themoviedb.org/3/search/multi?query=${term.replace(" ", "+")}&api_key=75ea07fc935e3b512210d71898bb19dd`)
        const data = await response.json();
        
        //console.log(data.results);
        setMulti(data.results);
    }
    //results[0].original_title

    return (
        <div className="App container mx-auto text-center text-blue-gray-50">
            <div className="Head text-6xl mt-3 font-semibold ">
                <h1>Movie Lister</h1>
            </div>
            <div className="Search mt-3">
                <input id="search-value" className="outline-none border-2 border-indigo-600 rounded-md m-2 py-1 px-4 text-indigo-700 w-4/6 box-border" value={search} onChange={(e)=>{setsearch(e.target.value)}}/>
                <button className="m-2 border-2 border-indigo-600 py-1 px-4 rounded-sm active:bg-indigo-600 active:text-slate-50" onClick={async () => {
                        await fetcher(search);
                    }
                }>GO</button>
            </div>
            <div className="collection grid gap-20 mt-10 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-2 border-black p-10">
                {multi.map((col) => {
                    return col.poster_path != null ? <CollectionCard col={col}/> : null;
                })}
            </div>
        </div>
    );
}

export default App;