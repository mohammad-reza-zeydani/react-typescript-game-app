import { Link } from "react-router-dom";
import { useMyContext } from "../context/context";
const NaBar = () => {
  const {item}=useMyContext()
    return ( 
   <>
        {/* navigation */}
        <nav className="w-full py-4 px-1 sm:px-3 bg-blue-900 text-base sm:text-xl ">
        {/* nav main content */}
        <div className="w-[90%] mx-auto flex justify-between items-center">
          {/* Home link & svg */}
       <Link to={'/'}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" size-8 sm:size-12 active-link text-white">
                  <path d="M19.006 3.705a.75.75 0 1 0-.512-1.41L6 6.838V3a.75.75 0 0 0-.75-.75h-1.5A.75.75 0 0 0 3 3v4.93l-1.006.365a.75.75 0 0 0 .512 1.41l16.5-6Z" />
         <        path fillRule="evenodd" d="M3.019 11.114 18 5.667v3.421l4.006 1.457a.75.75 0 1 1-.512 1.41l-.494-.18v8.475h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3v-9.129l.019-.007ZM18 20.25v-9.566l1.5.546v9.02H18Zm-9-6a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75H9Z" clipRule="evenodd" />
            </svg>
       </Link>
        {/* navigation right side content */}
       <div className="flex items-center gap-x-6 sm:gap-x-7">
         {/* action & adventure links */}
         <div className="space-x-3 sm:space-x-7 text-white child:border-b border-white">
            <Link className="active-link" to={'/action'}>Action</Link>
            <Link className="active-link" to={'/adventure'}>Adventure</Link>
        </div>
         {/* bookMark svg */}
    <div className="flex items-center gap-x-1">
    <Link to={'/bookMark'}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 sm:size-8 active-link text-white">
           <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
         </svg>
       </Link>
       <div className="text-white">
        {item.length}
       </div>
    </div>
       </div>
        </div>
        </nav>
   </>
     );
}
 
export default NaBar;