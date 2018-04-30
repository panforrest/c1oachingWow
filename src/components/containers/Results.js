import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'
import { Item } from '../presentation'
// import { Input } from '../containers'

class Results extends Component {
    constructor(){
    	super()
    	this.state = {
            item: {
                // position:{lat:40.70224017, lng:-73.9796719}
            }
    	}
    }

    componentDidMount(){
        
        console.log('componentDidMount: ')
        this.props.fetchItems()
    }

    render(){

        const items = this.props.item.all || []

    	return(
            <div className="container-fluid">
                <div className="row">

                    { items.map((item, i) => {
                    	return <Item key={item.id} item={item} />
                      })

                    }
			                    
                </div>
                	                
            </div>


    	)
    }
}

const stateToProps = (state) => {
    return {
        item: state.item,
        map: state.map,
        // account: state.account
    }
}

const dispatchToProps = (dispatch) => {
    return {
        // addItem: (item) => dispatch(actions.addItem(item)),
        fetchItems: (params) => dispatch(actions.fetchItems(params))
    }
}

export default connect(stateToProps, dispatchToProps)(Results)
