import React, { useRef } from 'react'
import lang from '../utils/langConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const searchText = useRef();
    const langKey = useSelector((store) => store.config.lang);

    //search movies in TMDB
    const searchMovieTMDB = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        return json.results;
    } 

    const handleGptSearchClick = async () => {
        // console.log(searchText.current.value);
        // Make An API call to GPT API and get the Movie Results

        const gptQuery = "Act as a Movie Recommendation System & suggest some movies for the query : " + searchText.current.value + " only give me names of 5 Movies, comma seperated like the example results given ahead. Examples: Gadar, DON, Sholay, Dunky, Jawan";

        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });
        {/** write an error handling here*/}
        if(!gptResults.choices) {
            {/** write an error handling here*/}
        }
        console.log(gptResults.choices?.[0].message?.content);
        // don, don2, DDLJ, YJHD, Jawan
        const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
        // this will return me 5 promises ==>> [promise, promise, promise, promise, promise];
        // Now to resolve these promises we need to use promise.all();
        const tmdbResults = Promise.all(promiseArray);
        // console.log(tmdbResults);
        dispatch(addGptMovieResult({movieNames:gptMovies,movieResults: tmdbResults}));
    };

    return (
        <div className='pt-[8%] flex justify-center'>
            <form className='w-1/2 grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
                <input ref={searchText} type='text' className='p-4 m-4 col-span-9' placeholder= {lang[langKey].gptSearchPlaceholder}/>
                <button onClick={handleGptSearchClick} className="px-4 py-2 m-4 text-white bg-[#C11119] rounded-md col-span-3">{lang[langKey].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar;