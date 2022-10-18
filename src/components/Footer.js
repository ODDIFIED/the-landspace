import { FaDollarSign } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPaperclip } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
const Footer = () =>{
    return(
        <div className="section-three">
            <div  className="foot-con">
            <div className="foot-one" >
            
            <><h3> <span> <FaDollarSign size={16} color='green'  /> </span> Joe Landscaping </h3></>
           <div className="context">We're proud of your contribution towards building the future,ground up!    our landscaping company is ready to complete nay kind of project for any type of commercial and residential client!</div>
           <div className="rightholder"><p>@2022 0ddified-Ng.Copyright reserved.Privacy policy  </p></div>
         </div>

         <div className="foot-two">
             <div className="head-con">
                 <table>
                     <th>Contact</th>
                     <th>Social Media</th>
                     <th>Working Hours</th>
                     
                     <tr>  <td>< FaPhoneAlt size = {10}  color = 'gray' />   Yarmouth, MA 0234</td>
                           <td>Facebook</td>
                           <td> Mon - Sat </td>
                     </tr>
                     <tr>  <td>< FaPaperclip size = {10}  color = 'gray' />   contact@joes.com</td>
                           <td></td>
                           <td> Working Hour : 7AM - 6PM </td>
                     </tr>
                     <tr>  <td>< FaRegEnvelope size = {10}  color = 'gray' />  (503)234-803</td>
                           <td></td>
                           <td>  </td>
                     </tr>
                 </table>
                
             </div>
         </div>
            </div>
        </div> 
    )
}
export default Footer;