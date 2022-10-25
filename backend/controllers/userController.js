// This is a controller that gets users from a website. 
// @Route   Get/api/user
// @access  Private
const getUser = (req, res) => {
    res.status(200).json({ message: 'Get User'})
}

// This is a controller that sets users in a website. 
// @Route   Post/api/user
// @access  Private
const setUser = (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    console.log(req.body)
    res.status(200).json({ message: 'Set User'})
}

// This is a controller that updates users from a website. 
// @Route   Update/api/user/id
// @access  Private
const updateUser = (req, res) => {
    res.status(200).json({ message: `Update user ${req.params.id}`})
}

// This is a controller that deletes users from a website. 
// @Route   Delete/api/user/id
// @access  Private
const deleteUser = (req, res) => {
    res.status(200).json({ message: `Delete user ${req.params.id}`})
}

module.exports = {
    getUser,
    setUser,
    updateUser,
    deleteUser,
}