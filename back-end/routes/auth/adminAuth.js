import express from 'express'
import adminModel from '../../models/adminModel.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import adminCheckAuth from './AdminCheckAuth.js'

const router = express.Router()
const saltRound = 10

router.get('/admins', adminCheckAuth, async (req, res)=> {
    console.log(req.user)
    res.send(`Hello ${req.admin.firstName} ${req.admin.lastName}. You are logged in!`)
})
router.post('/signin', async (req, res)=> {
    if(!req.body.email || !req.body.password){
        res.send('You Must provide Email and Password to Log In')
    }
    const admin = await adminModel.findOne({email: req.body.email})
    bcrypt.compare(req.body.password, admin.password, (err, response)=> {
        if(err){
            res.send(err)
        }else if(response === true){
            const token = jwt.sign({adminId: admin._id}, 'MY_SECRET_KEY')
            res.send({
                token: token,
                message: 'Admin Authenticated'
            })
        }else{
            res.send('Invalid Password or Email!')
        }
    })
})

router.post('/signup', (req, res)=>{
    bcrypt.hash(req.body.password, saltRound, async (err, hash)=> {
        if(err){
            res.send(err)
        }
        try {
            const newAdmin = new adminModel({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                phoneNumber: req.body.phoneNumber,
                password: hash
            })
            let result = await newAdmin.save()
            console.log(result)
            const token = jwt.sign({adminId: result._id}, 'MY_SECRET_KEY')
            res.send({
                data: result,
                token: token,
                message: 'Created an Admin Account Successfully!'
            })
        } catch(error) {
            console.log(error)
        }
    })
})

export default router