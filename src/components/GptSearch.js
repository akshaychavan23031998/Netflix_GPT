import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { Background_url } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={Background_url} alt="logo"/>
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch;