import { createContext,useContext,useState,useEffect } from "react"
import { Tdata } from "../type/dataType"
const MyContext=createContext<any>(null)
export const useMyContext=()=>{return useContext(MyContext)}
const MyContextProvider = ({children}:{children:React.ReactNode}) => {
{/*storing context in localStorage */}
  const getInitialState = () => {
    const item = localStorage.getItem("item");
    return item?.length ? JSON.parse(item) : [];
  };
  const [item,setItems]=useState<Tdata[]>(getInitialState)
  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(item));
  }, [item]);
  {/*Remove Item From Context */}
  const handleRemove=(gameName:string)=>{
    const filter=item.filter((item:Tdata)=>item.name !==gameName)
    setItems(filter)
  }
    return (
        <MyContext.Provider value={{item,setItems,handleRemove}}>
            {children}
        </MyContext.Provider>
      );
}
 
export default MyContextProvider;