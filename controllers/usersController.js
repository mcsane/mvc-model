const users = require('../models/users');
const uuid = require('uuid');

const getAllUsers = (req, res) => {
    res.json(users);
};

const getUserById = (req, res) => {
    const user = users.find((user) => user.id === req.params.id);
    res.json(user);
};

const createUser = (req, res) => {
    const newUser = { id: uuid.v4(), ...req.body };
    users.push(newUser);
    res.json(newUser);
};

const updateUser = (req, res) => {
    const user = users.find((user) => user.id === parseInt(req.params.id));
    if (user){
        users.forEach((user , i) => {
            if (user.id === parseInt(req.params.id)){
                users[i] = {...user, ...req.body};
                res.json({msg: 'User updated', user: users[i]});
            }
        });  
    }else{
        res.status(404).json({msg: `User not found with id ${req.params.id}`});
    }
};

const deleteUser = (req, res) => {
    const found = users.some((user) => user.id === parseInt(req.params.id));
    if (found){
        const updatedUsers = users.filter((user) => user.id !== parseInt(req.params.id));
        res.json({msg: 'User deleted', users: updatedUsers});
        }else{
            res.status(404).json({msg: `User not found with id ${req.params.id}`});
        }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
 