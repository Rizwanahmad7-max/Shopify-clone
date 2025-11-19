import React from 'react'
import "./Item.css"
const Item = (props) => {
  return ( 
    <div>
        <div className="item">
<img src={props.image} alt="" />
            <p>{props.name}</p>
 
            <div className="item-prises">
                <div className="item-prise-new">  {props.new-prise}</div>
                            </div>
                            <div className="item-prise-old">{props.old.prise}  </div>
         </div> 
    </div>
  )
}

export default Item