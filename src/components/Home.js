import React, { Component } from 'react'
import { Search, Results, Nav } from './containers'
import { Account } from './containers'

class Home extends Component {

	constructor(){
		super()
		this.state = {
			map: null
		}
	}

    render(){
        // const markers = [
        //     {id:1,key:'1', defaultAnimation:2,label:"Nike Jordan", position:{lat:40.7224017, lng:-73.9896719}},
        //     {id:2,key:'2', defaultAnimation:2,label:"Nike Jordan", position:{lat:40.7024017, lng:-73.9896719}}
        // ] 

    	return(
    		<div className="container"> 
        	    <div className="row">
        	        <div className="col-md-4">
        	            <Search /> 
        	        </div>

        	        <div className="col-md-5">
                        <Nav />
                        <Results />
        	        </div> 

        	        <div className="col-md-3">
        	            <Account /> 
        	        </div>

        	    </div>
        	</div>  

    	)
    }

}

export default Home 