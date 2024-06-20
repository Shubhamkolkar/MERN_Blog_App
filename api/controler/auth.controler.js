import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs';

export const singup = async(req,res)=>{
    const { username, email, password } = req.body;

  // Check if all fields are provided
  if (!username || !email || !password || username === " " || email === " " || password ===" ") {
    return res.status(400).json({ message: 'All fields are required' });
  }
  
  const hashedPassword = bcryptjs.hashSync(password,10)
  
  const newUser = new User({
    username,
    email,
    password:hashedPassword,
  });


  try{
      await newUser.save();
      res.json("signup sucessfull")
  }catch(err){
    res.status(500).json({message:err.message})
  }
}

export default singup;