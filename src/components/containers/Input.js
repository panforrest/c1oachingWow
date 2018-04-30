import React, { Component } from 'react'
// import { Item } from '../presentation'
import { connect } from 'react-redux'
import actions from '../../actions'
import Dropzone from 'react-dropzone'
import turbo from 'turbo360'

class Input extends Component {
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
        if (this.props.account.currentUser == null) {
            alert('Please log in or register to sell items')
            return
        }

        const currentUser = this.props.account.currentUser
        let updated = Object.assign({}, this.state.item)
        updated['position'] = this.props.map.currentLocation
        updated['seller'] = {
            id: currentUser.id,
            username: currentUser.username,
            image: currentUser.image || ''
        }

        console.log('ADD ITEM: ' + JSON.stringify(updated))
        this.props.addItem(updated)
        .then(data => {
            console.log('ITEM ADDED: ' + JSON.stringify(data))
        })
        .catch(err => {
            console.log('ERR: ' + err.message)
        })
    }

    uploadImage(files){
        const image = files[0]
        console.log('uploadImage: ' + image.name)
        const turboClient = turbo({
            site_id: '5ae5315e0d44f900146683d0'
        })

        turboClient.uploadFile(image)
        .then(data => {
            // console.log('FILE UPLOADED: ' + JSON.stringify(data))
            // console.log('FILE UPLOADED: ' + data.result.url)
            let updated = Object.assign({}, this.state.item)
            updated['image'] = data.result.url
            this.setState({
                item: updated
            })
        })
        .catch(err => {
            console.log('UPLOAD ERROR: ' + err.message)
        })
    }
    
    render(){

    	return(
            <div className="container-fluid">
                
                <hr />
                <input onChange={this.updateItem.bind(this, 'name')} className="formControl" type="text" placeholder="Class Name" /><br /><br />	
                <input onChange={this.updateItem.bind(this, 'price')} className="formControl" type="text" placeholder="Price" /><br /><br />    
                { (this.state.item.image == null) ? null: <img src={this.state.item.image+'=s120-c'} />

                }
                <hr />

                <div>
                    <Dropzone onDrop={this.uploadImage.bind(this)} className="btn btn-info btn-fill" style={{marginRight:16}}>Add Image</Dropzone>
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
        addItem: (item) => dispatch(actions.addItem(item)),
        fetchItems: (params) => dispatch(actions.fetchItems(params))
    }
}

export default connect(stateToProps, dispatchToProps)(Input)
