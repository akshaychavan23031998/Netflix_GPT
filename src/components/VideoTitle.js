import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video bg-gradient-to-r from-black pt-[15%] px-12 absolute text-white'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/2'>{overview}</p>
        <div className='flex gap-2'>
            <button className='bg-white text-black px-10 py-2 rounded-lg text-xl hover:opacity-60'>▶ Play</button>
            <button className='bg-gray-600 text-black px-10 py-2 rounded-lg text-xl opacity-80'> ℹ More Info</button>
        </div>
    </div>
  )
  
}

export default VideoTitle