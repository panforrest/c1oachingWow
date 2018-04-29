import React, { Component } from 'react'
import { Item } from '../presentation'
import { connect } from 'react-redux'
import actions from '../../actions'

class Results extends Component {
    constructor(){
    	super()
    	this.state = {
            item: {
                // position:{lat:40.70224017, lng:-73.9796719}
            }
    	}
    }

    updateItem(attr, event){
        event.preventDefault()
        console.log(attr + ' == ' + event.target.value)
        let updated = Object.assign({}, this.state.item)
        updated[attr] = event.target.value
        this.setState({
            item: updated
        })
    }

    addItem(){
        // console.log('ADD ITEM: ' + JSON.stringify(this.state.item))
        let newItem = Object.assign({}, this.state.item)
        const len = this.props.item.all.length+1
        newItem['id'] = len.toString()
        // newItem['id'] = 100
        // newItem['key'] = '100'
        // newItem['defaultAnimation'] = 2
        newItem['position'] = this.props.map.currentLocation
        this.props.addItem(newItem)
    }
    
    render(){

        // const items = [
        //     {id:1, key:'1', price:'10', defaultAnimation:2, label:'Nike Jordans', position:{lat:40.7224017, lng:-73.9896719}},
        //     {id:2, key:'2', price:'20', defaultAnimation:2, label:'Sofa', position:{lat:40.7124017, lng:-73.9896719}},
        //     {id:2, key:'2', price:'20', defaultAnimation:2, label:'Sofa', position:{lat:40.7124017, lng:-73.9896719}}
        // ]

        const items = this.props.item.all || []

    	return(
            <div className="container-fluid">
                <div className="row">

                    { items.map((item, i) => {
                    	return <Item key={item.id} item={item} />
                      })

                    }
			                    
                </div>
                <hr />
                <input onChange={this.updateItem.bind(this, 'label')} className="formControl" type="text" placeholder="Item" /><br /><br />	
                <input onChange={this.updateItem.bind(this, 'price')} className="formControl" type="text" placeholder="Price" /><br /><br />    
                
                <div>
                    <button onClick={this.addItem.bind(this)} className="btn btn-success">Add Item</button>	
                </div>	                
            </div>


    	)
    }
}

const localStyle = {
    input: {
        border: '1px solid #ddd',
        marginBottom: 12
    }
}

const stateToProps = (state) => {
    return {
        item: state.item,
        map: state.map,
        account: state.account
    }
}

const dispatchToProps = (dispatch) => {
    return {
        addItem: (item) => dispatch(actions.addItem(item))
    }
}

export default connect(stateToProps, dispatchToProps)(Results)
