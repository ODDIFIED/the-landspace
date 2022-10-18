import { FaDollarSign } from "react-icons/fa";

const Head = () =>{
    return(
      <div className='nav-items'>
      <FaDollarSign size={16} color='green' className='circle' />
      <h5>Job Landscaping</h5>
  
      <div className='links'>
      <button>Home</button>
      <button>About</button>
      <button>Services</button>
      <button>Contact Us</button>
      </div>
    
      <button className='lastbtn'>Get a Quote</button>
    </div>
    )
    
  }

  export default Head ;