const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

router.post('/register', function(req, res){
	var params = req.body
    turbo.createUser(params)
	.then(data => {
		req.vertexSession.user = {id: data.id} // set session with user ID
	    res.json({
	    	confirmation: 'success',
	    	user: data
	    })
	    res.redirect('/')//REDIRECT TO THE MAP AFER CREATE NEW USER
	})
	.catch(err => {
	    res.json({
            confirmation: 'fail',
            message: err.message
	    })
	})    
})

router.post('/login', function(req, res){
	var params = req.body
    turbo.login(params)
	.then(data => {
		req.vertexSession.user = {id: data.id} // set session with user ID
	    res.json({
	    	confirmation: 'success',
	    	user: data
	    })
	    res.redirect('/')//REDIRECT TO THE MAP AFER CREATE NEW USER
	})
	.catch(err => {
	    res.json({
            confirmation: 'fail',
            message: err.message
	    })
	})    
})

router.get('/logout', function(req, res){
	req.vertexSession.reset()
	res.redirect('/')
})

router.get('/currentuser', function(req, res){
	if (req.vertexSession == null){
		res.json({
			confirmation: 'success',
			user: null	
		})
		return		
	}

	if (req.vertexSession.user == null){
		res.json({
			confirmation: 'success',
			user: null	
		})	
		return	
	}

	// res.json({
	// 	confirmation: 'success',
	// 	user: req.vertexSession.user   //user: req.vertexSession.id 
	// })
    turbo.fetchOne('user', req.vertexSession.user.id)
    .then(data => {
    	res.json({
    		confirmation: 'success',
    		user: data
      	})
    })
    .catch(err => {
    	res.json({
    		confirmation: 'fail',
    		message: err.message 
    	})
    })
})

module.exports = router