import Skeleton from "./skleleton";
const Loading = () => {
     {/*add our skeletons to create our loading design*/}
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