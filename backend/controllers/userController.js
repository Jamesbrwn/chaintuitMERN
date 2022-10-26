const asyncHandler = require('express-async-handler')
const { db } = require('../models/userModel')
const User = require('../models/userModel')

// This is a controller that gets users from a website. 
// @Route   Get/api/user
// @access  Private
const getUser = asyncHandler(async (req, res) => {
    const users = await User.find()
    res.status(200).json(users)
})

// This is a controller that sets users in a website. 
// @Route   Post/api/user
// @access  Private
const setUser = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    const user = await User.create({
        text: req.body.text,
    })
    res.status(200).json(user)
})

// This is a controller that updates users from a website. 
// @Route   Update/api/user/id
// @access  Private
const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if(!user){
        res.status(400)
        throw new Error('User not found!')
    }
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    } )
    res.status(200).json(updatedUser)
})

// This is a controller that deletes users from a website. 
// @Route   Delete/api/user/id
// @access  Private
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if(!user){
        res.status(400)
        throw new Error('User not found!')
    }
    await user.remove()
    res.status(200).json({id: req.params.id})
})

module.exports = {
    getUser,
    setUser,
    updateUser,
    deleteUser,
}