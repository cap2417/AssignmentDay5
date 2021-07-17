import React from 'react'

const Card = (props) => {
   return(
    <div className="col-4">
      <div className="card-body"  >
      <div className="card" style={{width: "18 rem"}}>
          <img src={props.chosenimg} alt=""/>
        <h5 className="card-title">{props.cardTitle}</h5>
        <p className="card-text">
         {props.cardDescription}
        </p>
        <a href="#" className="btn btn-success" style={{width:"7 rem"}}>{props.buttonText}</a>
      </div>
    </div>
  </div>
 
   )
}



export default Card 