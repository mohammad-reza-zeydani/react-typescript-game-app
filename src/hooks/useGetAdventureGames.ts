import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useGetAdventure = () => {
    const{data,isLoading,isError,error}=useQuery({
        queryKey:["adventure"],
        queryFn:async()=>{
            const response=await axios.get('http://localhost:3000/adventure')
            return response.data
        }
    })
    return {data,isError,isLoading,error} ;
}
 
export default useGetAdventure;