
const Infocard = ({content}) => {
   return(
      <div className="card">
        <div className="card-info">
           < div className="circle-icon" >{content.icon }</div>
           <h3 className="circle-desp">{content.description}</h3>
           <p>{content.context}</p>
        </div>
    </div>
   )
}
export default Infocard