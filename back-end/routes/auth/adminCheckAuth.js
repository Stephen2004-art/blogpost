import jwt from 'jsonwebtoken'
import adminModel from '../../models/adminModel.js';

const adminCheckAuth = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization){
        res.send('You must be logged in!')
    }
    
    const adminToken = authorization.replace('Bearer ', '')
    console.log(adminToken)
    jwt.verify(adminToken, 'MY_SECRET_KEY', async (err, data)=>{
        if(err){
            res.send('you must be logged in')
        }
        const admin = await adminModel.findOne({_id: data.adminId})
        req.admin = admin
        next()
    })
}

export default adminCheckAuth 