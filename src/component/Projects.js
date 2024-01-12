import React, {useState} from 'react'

import musicweb from '../assets/musicweb.png'

import { MdOutlineArrowOutward } from "react-icons/md";

const Projects = () => {

 
    const[activeproject, setactiveproject] = useState(null)

    

    const myprojects = [

        {id:"1",
        title: "Melodify",
         description: "this is a music stream website",
         url:musicweb},

         {id:"2",
        title: "Melodify",
         description: "this is a music stream website",
         url:musicweb},

         {id:"3",
         title: "Melodify",
         description: "this is a music stream website",
         url:musicweb},

         {id:"4",
        title: "Melodify",
        description: "this is a music stream website",
        url:musicweb},

        
        {id:"4",
        title: "Melodify",
        description: "this is a music stream website",
        url:musicweb},
       
    ]

    const handleMouseOver = (id) => {
        setactiveproject(id);
      };
    
      const handleMouseOut = () => {
        setactiveproject(null);
      };

  
  return (
        <article className='py-20' id = "project">

        <h1 className='flex justify-center gap-3 text-2xl   shadow-2xl' >My <span  className='text-amber-400 '> Projects</span></h1>
        <div  className="grid grid-cols-1 md:grid-cols-3 gap-8 p-14 ">
        {myprojects.map(({ id,title, description, url }, index) => (
                        <div key={id} 
                       
                        className={`border-2 border-orange-100 transition duration-500 ease-in-out ${activeproject === id ? 'scale-105 shadow-lg shadow-amber-400 ' : ''}`} 
                        onMouseOver={() => handleMouseOver(id)}
                       
                        onMouseOut = {handleMouseOut}
                        >

                            <img className='w-screen  py-1' src={url} alt={`Description of ${title}`} />
                            <h3 className='flex justify-center py-1 text-xl font-bold '>{title}</h3>
                            <p className='flex justify-around py-1 text-md '>{description}</p>
                            
                            <a href="" target="_blank" rel="noopener noreferrer" className='py-1 flex justify-center gap-2 font-bold '>
                                Preview Website <MdOutlineArrowOutward className='text-amber-400'/> 
                            </a>
                                  
                        </div>
                    ))}
    </div>
    </article>

  )
}

export default Projects