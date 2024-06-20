import mongoose from 'mongoose';


const Schema = mongoose.Schema;

// Define the user schema
const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
},{timestamps:true}
);

// Create the User model
const User = mongoose.model('User', UserSchema);

export default User;
