import React from 'react'
import { BsLaptop } from "react-icons/bs";



const Skills = () => {

   

    const webskills = ["HTML", "CSS", "React", "Javascript", "Next js"]
    const uiskills = ["UI Design"]
  return (

    <section className=' px-1 md:px-14'>
        <h1 className='pb-14 gap md:text-2xl font-bold flex justify-center'>SKILLS</h1>
        <div className='flex justify-around'>

                <div>
                    <h2 className='font-bold underline md:text-lg'>Front end Development</h2>
                {webskills.map((skill, index) => (
                    <div key={index} className='flex gap-3 items-center py-3'>
                        
                        <BsLaptop/>
                        <h1>{skill}</h1>
                    
                    </div>
                ))}
                </div>
                
                <div>
                <h2 className='font-bold underline md:text-lg'>UI/UX Design</h2>
                    {uiskills.map((skill, index) => (
                            <div key={index} className='flex gap-3 items-center py-3 '>
                        
                            <BsLaptop/>
                            <h1>{skill}</h1>
                        
                        </div>
                    ))}
                </div>
        </div>
          
    </section>
    
  )
}

export default Skills