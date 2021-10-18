import user from '../model/user.schema.js';
import User from '../model/user.schema.js';

export const getUser = async (req, res)=>{
    // res.status(200).json("get route from user.controller");
    try {
        let user = await User.find();
        // console.log(user);
        res.json(user);
    } catch (error) {
        res.json({message : error.message});
    }
}

export const addUser = async (req, res)=>{
    // res.send("add route from user.controller");
    // console.log("add user enterd");
    const user = req.body;
    const newUser = new User(user);

    try {
        await newUser.save();
        res.json(newUser);
    } catch (error) {
        res.json({message : error.message});
    }


}

export const getUserById = async (req, res)=>{
    const id = req.params.id;
    try {
        const user = await User.findById(id);
        res.json(user); 
    } catch (error) {
        res.json({message : error.message});
    }
}

export const editUser = async (req, res)=>{
    const user = req.body;
    // console.log(user);
    const editUser = new User(user);
    try {
        await User.updateOne({_id: req.params.id}, editUser);
        res.json(editUser);
    } catch (error) {
        res.json({message : error.message});
    }
}

export const deleteUser = async (req, res)=>{
    try {
        await User.deleteOne({_id:req.params.id});
        res.json("user deleted successfully");
    } catch (error) {
        res.json({message : error.message});
    }
}




