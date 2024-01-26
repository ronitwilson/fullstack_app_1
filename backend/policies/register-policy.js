const Joi = require('joi')

module.exports = {
     check_validity (req, res, next) {
        // console.log("in middleware !!")
        const schema = Joi.object({
            email: Joi.string().email(),
            password: Joi.string()
        })
        const {error, value} = schema.validate(req.body)
        if(error) {
            switch (error.details[0].context.key){
                case 'email':
                    res.status(406).json({"msg": "not valid email"})
                    break
                case 'password':
                    res.status(406).json({"msg": "not valid password"})
                    break
                default:
                    res.status(406).json({"msg": "not valid input"})
                    break
            }
        }
     next()   
    }
}