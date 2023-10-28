import React from "react"
function  Search({search,setSearch}){
    return(
        <div className="search">
            <input value={search} type="text" id="search" placeholder="Type name to search..." onChange={(e)=> setSearch(e.target.value)}/>
        </div>
    )
}
 export default Search