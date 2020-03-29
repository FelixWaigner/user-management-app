import React from "react"

import "./card.style.css"

export const Card = props => (
    <div className="card">
       <p className="name"> {props.user.name} </p> 
       <p> {props.user.email} </p>
       <p> {props.user.address.city} </p>
       <p> {props.user.phone} </p>
    </div>
)