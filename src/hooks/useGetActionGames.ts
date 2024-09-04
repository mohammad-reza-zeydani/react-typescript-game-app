import { useQuery } from "@tanstack/react-query";
import axios from "axios";
   {/*getting the data of games with action genre*/}
const useGetActionGames = () => {
    const{data,isLoading,isError,error}=useQuery({
        queryKey:["action"],
        queryFn:async()=>{
            const response=await axios.get('http://localhost:3000/action')
            return response.data
        }
    })
    return {data,isError,isLoading,error} ;
}
 
export default useGetActionGames;