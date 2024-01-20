const {User} = require('../models')

const  register = async (req, res) => {
    console.log(req.body)
    // console.log(req.body.email)
    // console.log(req.body.password)
    try {
        const user = await User.create(req.body)
        console.log("reach cuccess")
        res.status(200).send(user.toJSON())
    }
    catch(err){
        console.log(err)
        res.status(400).send("email already registered")
    }
}

module.exports = register