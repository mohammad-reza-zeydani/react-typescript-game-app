import Skeleton from "./skleleton";
const Loading = () => {
    return ( 
        <div className=" grid grid-cols-4 gap-x-2">
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
        </div>
     );
}
 
export default Loading;