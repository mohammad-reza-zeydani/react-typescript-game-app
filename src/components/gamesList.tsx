import AllGames from "./allGames";
import RecommendedGames from "./recommendedGames";
import TrendGames from "./trendGames";
const GamesList = () => { 
    return ( 
     <>
      {/* All Games */}
      <AllGames/>
      {/* Recommended Games */}
      <RecommendedGames/>
      {/* Trend Games */}
      <TrendGames/>
     </>
   
     );
}
 
export default GamesList;