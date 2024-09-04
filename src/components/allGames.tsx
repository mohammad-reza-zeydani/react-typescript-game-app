import Loading from "./loading/loading";
import { Tdata } from "../type/dataType";
import { useState } from "react";
import useGetGames from "../hooks/useGetGames";
import BookMarkBtn from "./bookMark/bookMarkBtn";
const AllGames = () => {
   {/* serach input state */}
    const [search,setSearch]=useState<string>("")
    const {data,isError,isLoading,error}=useGetGames(search)
     {/* handle error */}
    if (isError) return <div className="error">{error?.message}</div>
    return ( 
     <>
    <div className="flex justify-between items-center px-2 lg:px-7 my-8 lg:my-11 scrollbar">
      {/*The title*/}
     <h1>All Games</h1>
      {/* serach input */}
     <input className="outline-none rounded-lg border-2 border-blue-900 w-1/2 xl:w-1/4 text-center" onChange={(e=>setSearch(e.target.value))} type="search"  placeholder="search Game"/>
     </div>
       {/* handle no serach result */}
      {
        data && data.length ===0 && <h1 className="text-center text-xl lg:text-5xl">No Search Result</h1>
      }
       {/* handle loading state */}
     {
      isLoading ? (
        <Loading/>
      ):(
      <div className="overFlow" >
         {/* main data dev */}
       <div className="flex-box">
       {
          data && data.map((d:Tdata)=>{
            return (
          <>
               {/* styling data properties */}
               <div className="item-size">
                  <img className="image" src={d.image} alt="" />
                    {/* bookMark btn */}
                    <BookMarkBtn data={d}/>
                    {/*year&name of the item*/}
                  <div className="py-3 px-3">
                  <span>year : {d.year}</span>
                  <h2 className=" md:text-lg">{d.name}</h2>
                  </div>
                </div>
          </>
            )
          })
        }
       </div>
      </div>
      )
     }
     </>
     );
}
 
export default AllGames;