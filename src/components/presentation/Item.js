import React, { Component } from 'react'

export default (props) => {

  const item = props.item

  return (
    <div className="row">
      <div id="reservations">
        <div class="reservation">

            
            <div style={localStyle.itemImage}>
                <img style={localStyle.itemImage} src={item.image} />
            </div>
            <h2>{item.name}</h2> 
            <span class="reservation-date">${item.price} </span>
            <img style={localStyle.icon} src={item.seller.image} />
        </div>    
      </div>
    </div>
  )
}

const localStyle = {
    icon: {
        width:28, 
        borderRadius:14, 
        float:'right'
    },
    itemImage: {
        width:100+'%',
        padding:3,
        // border:'1px solid #ddd',
        background:'#ffffa' 
    }
}