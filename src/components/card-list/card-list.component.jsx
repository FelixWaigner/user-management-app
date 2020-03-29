import React from "react";

import { Card } from "../card/card.component"

import "./card-list.style.css";

export const CardList = props => {
    return(
        <div className="cardList">
            <div className="sections">
                <p>Name</p>
                <p>Email</p>
                <p>City</p>
                <p>Phone</p>
            </div>
            {props.users.map(user => (
                <Card key={user.id} user={user}/>
            ))} 
        </div>
    )
}