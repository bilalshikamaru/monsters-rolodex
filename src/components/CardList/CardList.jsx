import React from "react";
import { Card } from "../Card/Card";
import './CardList.css'





export const CardList = props => {
    return <div className="_cardlist">
                {
                    props.monsters.map( monster => <Card key = {monster.id} monster = {monster}/>)
                }        
            </div>
}