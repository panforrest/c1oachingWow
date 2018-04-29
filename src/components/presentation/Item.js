import React, { Component } from 'react'

export default (props) => {

  const item = props.item

  return (
    <div className="row">
      <div id="reservations">
        <div class="reservation">
            <h3>{item.label}</h3> 
            
            <span class="reservation-date">${item.price} </span>
        </div>    
      </div>
    </div>
  )
}