const holder =({holder})=>{
    return(
        <div className="sec-con">
            <div  className="card-info" >
              <div className="sec-icon">{holder.icon}</div>
              <h3 className="sec-desp" >{holder.description}</h3>
              <p>{holder.context}</p>
            </div>
        </div>
    )
}
export default holder