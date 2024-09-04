import { Tdata } from "../../type/dataType";
import { useMyContext } from "../../context/context";
 {/*common btn among components ,when user click on this btn the game will be saved*/}
const BookMarkBtn = ({data}:{data:Tdata}) => {
      {/* my context state */}
    const {item,setItems}=useMyContext()
      {/*handle Remove the item function */}
  const handleSaveItem=(game:Tdata)=>{
    setItems([...item,game])
  }
    {/* prevent adding repetitious item */}
  const exist=item.find((game:Tdata)=>game.name ===data.name
  )
    return (
      <>
         {/*if the user wanted to sava the game that is already saved,show this alert*/}
        exist ? (
            <svg  onClick={()=>alert("this game is already saved")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-6 lg:size-8 bg-blue-500 rounded-md p-1 absolute top-2 right-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
            </svg>
        ):(
             {/*btn to save the selected game by the user*/}
            <svg  onClick={()=>handleSaveItem(data)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-6 lg:size-8 bg-white rounded-md p-1 absolute top-2 right-2 cursor-pointer active:bgblue">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
            </svg>
        )
        </>
     );
}
 
export default BookMarkBtn;