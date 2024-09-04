import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useGetTrendGames = () => {
     {/*getting the data of trend games*/}
    const{data,isLoading,isError,error}=useQuery({
        queryKey:["trend"],
        queryFn:async()=>{
            const response=await axios.get('http://localhost:3000/trend')
            return response.data
        }
    })
    return {data,isError,isLoading,error} ;
}
 
export default useGetTrendGames;