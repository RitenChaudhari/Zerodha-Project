
const {userModel} = require("../models/UserModel");
const {createSecretToken} = require("../utils/SecretToken");

const bcrypt = require("bcrypt");
const validator = require("validator");


const UserSignup = async (req,res) =>{
    const {email,username,password} = req.body;

    try {
        const Existinguser = await userModel.findOne({email});

        if(Existinguser){
            return res.json({success:false,message:"User Already Exists"});
        }

        //validating email format and strong password

        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please Enter a Valid Email"});
        }
        if(password.length < 8){
            return res.json({success:false,message:"Password Should be greater than 8 letters"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new userModel({
            email:email,
            username:username,
            password:hashedPassword,
        })

        const user = await newUser.save();
        const token = createSecretToken(user._id);
        res.json({success:true,token})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Some Error Occured"});
    }
};

const UserLogin = async(req,res) =>{
    const {email,password} = req.body;

    try {
        const user = await userModel.findOne({email});

        if(!user){
            res.json({success:false,message:"User Does not exists"});
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.json({success:false,message:"Password is Wrong!"});
        }

        const token = createSecretToken(user._id);
        res.json({success:true,token});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Some Error Occured"});       
    }
};

module.exports = {UserSignup,UserLogin};
