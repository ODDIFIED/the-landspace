import tree from '../images/tree.png'
const Content = () =>{
    return(
    <div className='container'>
     <div className='left-side'>
       <h1>Offering Quality work at a fair price to the Cape Cod area.</h1>
       <p>Our expert craftmen can transform your outdoor  space into a 'wow'space.We have the experience and know-how to design and build the perfect outdoor   landscape.
       </p>
       <button id='workbtn'>Work with us</button>
     </div> 
     <div className='right-side'>
        <img src={tree} alt="tree" />
     </div>
    </div> 
    )
   
  }
  export default Content;