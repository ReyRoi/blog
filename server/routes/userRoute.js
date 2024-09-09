const express = require('express')
const user = require('../models/User')
const router = express.Router()



router.get('/all', async (req, res) => {
    try{
        const allUsers = await user.find({})
        res.status(201).json(allUsers)
    }catch(error){
        res.status(400).json({error:error.message})

    }
   
})

router.post('/create', async (req, res) => {
    const { name, email, age } = req.body
    try {
        const newUser = await user.create({
            name, email, age
        })
        res.status(201).json(newUser)

    }catch(error){
        console.log(error)
        res.status(400).json({error:error.message})
    }
})

router.delete('/:id',async(req,res)=>{
    const {id}= req.params;
    try{
        const singleUser = await user.findByIdAndDelete({_id: id});
        res.status(201).json(singleUser)
    }catch(error){
        console.log(error)
        res.status(400).json({error:error.message})
    }
})
router.get('/:id',async(req,res)=>{
    const {id}= req.params;
    try{
        const singleUser = await user.findById({_id:id});
        res.status(201).json(singleUser)
    }catch(error){
        console.log(error)
        res.status(400).json({error:error.message})
    }
})
router.patch('/:id',async(req,res)=>{
    const {id}= req.params;
    try{
        const singleUser = await user.findByIdAndUpdate(id,req.body);
        res.status(201).json(singleUser)
    }catch(error){
        console.log(error)
        res.status(400).json({error:error.message})
    }
})


module.exports = router