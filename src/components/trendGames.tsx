import Loading from "./loading/loading";
import useGetTrendGames from "../hooks/useGetTrendGames";
import BookMarkBtn from "./bookMark/bookMarkBtn";
import { Tdata } from "../type/dataType";
const TrendGames = () => {
    const {data,isLoading,isError,error}=useGetTrendGames()
     {/* handle error */}
  if (isError) return <div className="error">{error?.message}</div>
  return ( 
      <>
        {/*The title*/}
   <h1 className="title">Trend Games</h1>
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
                <img loading="lazy" className="image" src={d.image} alt="" />
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
 
export default TrendGames;