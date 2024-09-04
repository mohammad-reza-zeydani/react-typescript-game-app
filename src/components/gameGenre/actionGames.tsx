import useGetActionGames from "../../hooks/useGetActionGames";
import Genre from "./genre";
const Action = () => {
    const {data,isLoading,isError,error}=useGetActionGames()
    return <Genre data={data} loading={isLoading} isError={isError} error={error}/>;
}
 
export default Action;