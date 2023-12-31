import React, {useState, useEffect} from 'react'
import profileImage from '../assets/Profile.png';


const Main = () => {
  
  const roles = ["Front end Developer", "UI/UX Designer"]
  const [roleindex, setroleindex] = useState(0)
  const [displayedRole, setdisplayedRole] = useState("")

  useEffect(() => {

    if (displayedRole.length < roles[roleindex].length){

      const timeout = setTimeout(() => {
        setdisplayedRole((prev) => prev + roles[roleindex][prev.length])
        
      }, 200);

      return ()=> clearTimeout(timeout)
    }
    
  
    const intervalid = setInterval(() => {
      setdisplayedRole("")
      setroleindex((previdx) => (previdx + 1) % roles.length)
      
    }, 2000);

    return () => clearInterval(intervalid);

  },[displayedRole, roleindex])

  return (

    <section>
    
    <div className="flex flex-col  px-20  md:flex-row md:gap-4 my-14 pt-12 w-full  ">
      <div >
        <h1 className='font-bold pt-3 text-2xl md:text-4xl '>Hi there, <br/>I'm <span className='text-amber-400 md:text-6xl text-4xl'>MIEDAN BIZUAYEHU</span></h1>
        <h1 className=' pt-14   font-bold text-2xl md:text-4xl '>{displayedRole}</h1>
        {/* <button className=' bg-amber-400 rounded-md px-1 '>Download CV</button> */}
      </div>

      <div >
        <img className='w-full h-full pt-14'  src= {profileImage} alt="person's image1o1" />
      </div>
    </div>

    
    </section>
 
   
  )
}

export default Main