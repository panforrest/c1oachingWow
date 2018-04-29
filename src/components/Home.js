import React, { Component } from 'react'
import { Map } from './presentation'

class Home extends Component {

	constructor(){
		super()
		this.state = {
			map: null
		}
	}

    render(){
    	return(
    		<div className="container"> 
        	    <div className="row">
        	        <div className="col-md-4">
        	            <div style={{height:960}}>
						    
						    <Map 
							    onMapReady={ (map) => {
							        if (this.state.map != null)
							            return

							        console.log('OnMapReady: '+JSON.stringify(map.getCenter()))
							        this.setState({
							            map: map
							        })
							    }}

							    zoom={14}
							    center={{lat:40.7224017, lng:-73.9896719}}
							    containerElement={<div style={{height:100+'%'}} />} 
							    mapElement={<div style={{height:100+'%'}} />} />

						</div> 
        	        </div>

        	        <div className="col-md-5">
        	            <div className="row">
		                    Item <br/> 
		                    Item <br/> 
		                    Item <br/> 
		                    Item <br/> 
		                </div>
        	        </div> 

        	        <div className="col-md-3">
        	            ACCOUNT
        	        </div>

        	    </div>
        	</div>  

    	)
    }

}

export default Home 