export const LOGO_url = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const Background_url = "https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_small.jpg";
export const Profile_url = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_KEY,
    }
  };

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w400/";  
// https://image.tmdb.org/t/p/w500/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg

export const SUPPORTED_LANGUAGES = [{identifier: "en", name: "English"},{identifier: "hindi", name: "Hindi"},{identifier: "spanish", name: "Spanish"}]

// export const OPEN_AI_KEY = "sk-proj-aKNfJO8huTFocT3zwCj2T3BlbkFJU8ZdHQPwfWdl1lrv2Mfb";
export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY;