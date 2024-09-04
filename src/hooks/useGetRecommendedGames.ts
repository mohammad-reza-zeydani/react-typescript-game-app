import { useQuery } from "@tanstack/react-query"
import axios from "axios"
const useGetRecommendedGames = () => {
    const{data,isLoading,isError,error}=useQuery({
        queryKey:["recommended"],
        queryFn:async()=>{
            const response=await axios.get('http://localhost:3000/recommended')
            return response.data
        }
    })
    return {data,isError,isLoading,error} ;
}
 
export default useGetRecommendedGames;