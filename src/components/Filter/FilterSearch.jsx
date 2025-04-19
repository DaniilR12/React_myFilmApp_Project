import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { filterMovies } from "../../Redux/slices/moviesSlice"

export default function FilterSearch(){

  const dispatch = useDispatch()

  const [searchTern,setSearchTern] = useState('')


  useEffect(()=>{
    const handler = setTimeout(()=>{
      dispatch(filterMovies(searchTern))
    },500)
    return ()=>clearTimeout(handler)
  },[searchTern,dispatch])

    return(
        <>
        <div className="filter__search">
          <input onChange={a=>setSearchTern(a.target.value)} value={searchTern} type="text" placeholder="Search..." />
          <button>
            <i className="fa fa-search"></i>
          </button>
        </div>
        </>
    )
}