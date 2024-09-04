import Loading from "./loading/loading";
import { Tdata } from "../type/dataType";
import useGetRecommendedGames from "../hooks/useGetRecommendedGames";
import BookMarkBtn from "./bookMark/bookMarkBtn";
const RecommendedGames = () => {
    const {data,isError,isLoading,error}=useGetRecommendedGames()
  {/* handle error */}
  if (isError) return <div className="error">{error?.message}</div>
    return ( 
        <>
          {/*The title*/}
     <h1 className="title">Recommended Games</h1>
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
 
export default RecommendedGames;