import GamesList from "./components/gamesList";
import BookMark from "./components/bookMark/bookMark";
import Action from "./components/gameGenre/actionGames";
import Adventure from "./components/gameGenre/adventureGames";
import NaBar from "./components/navBar";
import { Route , Routes } from "react-router-dom";
import MyContextProvider from "./context/context";
 {/* context */}
const App = () => {
  return (
  <MyContextProvider>
  <NaBar/>
    <Routes>
      <Route path="/" element={<GamesList/>}/>
      <Route path="/action" element={<Action/>}/>
      <Route path="/adventure" element={<Adventure/>}/>
      <Route path="/bookMark" element={<BookMark/>}/>
    </Routes>
  </MyContextProvider>
   )
}
export default App