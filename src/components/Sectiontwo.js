import Infocard from "./Infocard";
import Infocardtwo from "./Infocardtwo";
import { FaCog } from "react-icons/fa";
import { FaToolbox } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaPeopleCarry } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { Contents, Holders } from "./Data";

const Sectiontwo =()=>{
    return (
        <div className="sectionTwo">
            <h3 className="point-one">What we specialize in</h3>
            <div className="card-con">
            {Contents.map((content)=>{
                return(
                <div>
                    < Infocard content={content} info1={ FaCog } info2={ FaDollarSign } info3={FaToolbox} />
                </div>
                )
            })}
            </div>
            <h3 className="point-one">Why work with us?</h3>
            <div className="container-one">
                <div className="cont-left">
                    {Holders.map((holder)=>{
                        return(
                            < Infocardtwo holder = {holder} info4 ={ FaFolderOpen } info5={ FaPeopleCarry }  info6 ={ FaPaintBrush }  />
                        )
                    })}
                </div>
                 <div className="cont-right">
                        <p>We service both commercial and residential customers,and are full service design,installation,landscape and maintanance company</p>
                        <ul id="list">
                            <li>Mulching/Bed Maintanance</li>
                            <li>Brush Cleaning/ Removal</li>
                            <li>Hardscaping</li>
                            <li>Landscaping design And Installation</li>
                            <li>Planting</li>
                            <li>Weed Wacking</li>
                        </ul>
                    </div>    
            </div>
                    <div className="last-con" >
                        <h2>Let's get Started.</h2>
                        <p>Get the quote from the service that you want and you expect to recieve between 1-2 Business days</p>
                        <button>Get a Quote</button>
                    </div>
        </div>
    )
}
export default Sectiontwo