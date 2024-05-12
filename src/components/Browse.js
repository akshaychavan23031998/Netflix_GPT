import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
    
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    return (
        <div>
            <h1> 
                <Header />
                {showGptSearch ? (<GptSearch/>) : 
                (<>
                    <MainContainer />
                    <SecondaryContainer />
                </>)
            }
                
                
                {
                    // Main Container
                    //     - Background Video
                    //     - Heading
                    // Secondary Container
                    //     - MovieList * n
                    //     - cards * n 
                }

            </h1>
        </div>
    )
}
export default Browse;