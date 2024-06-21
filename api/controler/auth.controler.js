import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs';
import errorHandeler from '../utils.js/error.js';

export const singup = async(req,res,next)=>{
    const { username, email, password } = req.body;

  // Check if all fields are provided
  if (!username || !email || !password || username === " " || email === " " || password ===" ") {
    next(errorHandeler(400,'All Fields Are Required'))
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
   next(err)
  }
}

export default singup;