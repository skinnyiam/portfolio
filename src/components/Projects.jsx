import React from 'react'


const Projects = () => {
 
  return (
    <>
    
  <div className=' h-[91vh] sm:pt-[0px] w-full bg-black flex justify-center'>
    <div>
  <h1 className='text-emerald-400 sm:pt-[30px]  sm:text-3xl  font-bold flex justify-center'>PROJECTS</h1>
  <div data-aos="zoom-in-down" className= ' flex sm:mt-[20px] '>
    <div className='sm:inline hidden pr-[40px]'>
         <img src={require("../asset/movie.png")} alt="" className='w-[350px] h-[400px]'/>
    </div>
    <div>
    <h2 className='text-3xl text-rose-500 font-bold'>REACT APP</h2>
    <h3 className='text-2xl font-bold text-orange-600'>MOVIE RATING APP</h3>
   <p className='font-semibold text-gray-600 text-xl'>A platform where users can search for any movies and see their IMDB ratings and all the information related to it.</p>
   <div className='mt-[35px]'>
   <button className='w-[120px] h-[50px] text-black-400 font-bold text-2xl bg-green-700 m-8 rounded p-[3px] ' href="https://movies-search-karo.herokuapp.com/">WEBSITE</button> 
   <a className='w-[120px] h-[50px] text-white  text-2xl font-bold border-green-400 border-2 mt-[20px] rounded' href="https://github.com/skinnyiam/moviezone">GITHUB</a>
   </div>
   </div>
  </div>
  
  </div>
  
  </div>
  
  </>
  )
}

export default Projects