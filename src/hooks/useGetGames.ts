import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useGetGames = (search:string) => {
     {/*getting the data of all games with any genre*/}
    const{data,isLoading,isError,error}=useQuery({
        queryKey:["games",search],
        queryFn:async({queryKey})=>{
            const searchResult=queryKey[1] as string
            const response=await axios.get(`http://localhost:3000/games?q=${searchResult}`)
            console.log(search,"test")
            return response.data
        }
    })
    return {data,isError,isLoading,error} ;
}
 
export default useGetGames;