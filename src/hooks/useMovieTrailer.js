import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const useMovieTrailer = (movieid) => {
    const dispatch = useDispatch();
    const movieTrailer = useSelector(
        (store) => store.movies.trailerVideo
    );
    //fetch trailor video of perticulor movieid
    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieid+'/videos?language=en-US', API_OPTIONS);

        const json = await data.json();
        // console.log(json);
        const filterData = json.results.filter((video) => video.type === "Trailer");
        //filterData will have more than 1 trailor then among that select 1 video.
        const trailor = filterData.length ? filterData[0] : json.results[0];
        // console.log(trailor);
        dispatch(addTrailerVideo(trailor));
    };
    useEffect(() => {
       !movieTrailer && getMovieVideos();
    }, []);
};
export default useMovieTrailer;