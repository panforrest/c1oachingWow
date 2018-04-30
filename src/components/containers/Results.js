import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'
import { Item } from '../presentation'
import { Modal } from 'react-bootstrap'

class Results extends Component {
    constructor(){
    	super()
    	this.state = {
            showModal: false,
            item: {
                // position:{lat:40.70224017, lng:-73.9796719}
            }
    	}
    }

    componentDidMount(){
        
        console.log('componentDidMount: ')
        this.props.fetchItems()
    }

    onPurchase(item, event){
        event.preventDefault()
        this.setState({
            showModal:true
        })
        console.log('onPurchase: ' + JSON.stringify(item))
    }

    render(){

        const items = this.props.item.all || []

    	return(
            <div className="container-fluid">
                <div className="row">

                    { items.map((item, i) => {
                    	return <Item key={item.id} onPurchase={this.onPurchase.bind(this, item)} item={item} />

                      })

                    }
                </div>
                <Modal bsSize="sm" show={this.state.showModal} onHide={ () => {this.setState({showModal:false})} }>
                    <Modal.Body style={localStyle.modal}>
                        <h2>Purchase Item</h2>
                        <textarea placeholder="Enter Message Here" className="form-control"></textarea>
                        <button className="btn btn-success btn-fill">Sign up class!</button>
                    </Modal.Body>
                </Modal>                	                
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
