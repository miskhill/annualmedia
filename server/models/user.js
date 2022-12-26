import mongoose from 'mongoose';  
import uniqueValidator from 'mongoose-unique-validator';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "can't be blank"],
    unique: true,
    index: true,
    maxlength: 30,
  },  
  email: {
    type: String,
    required: [true, "can't be blank"],
    unique: true,
    match: [/\S+@\S+\.\S+/, 'is invalid'],
    index: true,
  },
  password: {
    type: String,
    required: [true, "can't be blank"],
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
}, { timestamps: true });

UserSchema.pre('validate', function (next) {
  if (!this.username) {
    this.username = this.email;
  }
  next();
});

UserSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
  next();
});

UserSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

UserSchema.plugin(uniqueValidator, { message: 'is already taken.' });

export default mongoose.model('User', UserSchema);