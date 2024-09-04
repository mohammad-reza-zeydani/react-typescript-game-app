import Genre from "./genre";
import useGetAdventure from "../../hooks/useGetAdventureGames";
const Adventure = () => {
    const {data,isLoading,isError,error}=useGetAdventure()
    return <Genre data={data} loading={isLoading} isError={isError} error={error}/>;
}
 
export default Adventure;