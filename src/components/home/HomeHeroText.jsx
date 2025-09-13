import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] pt-2 text-center flex flex-col items-center space-y-2'>
      <div className='text-[9.5vw] uppercase leading-[8vw] flex justify-center items-center'>
        The spark for
      </div>

      <div className='text-[9.5vw] uppercase leading-[8vw] flex justify-center items-center'>
        all 
        <div className='h-[8vw] w-[16vw] rounded-full overflow-hidden -mt-5 ml-2 mr-2'>
          <Video />
        </div>
        things
      </div>
  
      <div className='text-[9.5vw] uppercase leading-[8vw] flex justify-center items-center'>
        creative
      </div>
    </div>

  )
}

export default HomeHeroText