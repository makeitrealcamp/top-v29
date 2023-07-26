import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true,
  versionKey: false,
});

UserSchema.pre('save', async function (next) {
  const user = this;
  try {
    if (!user.isModified('password')) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;
  } catch (error) {
    next(error);
  }
});

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const user = this;

  return bcrypt.compare(candidatePassword, user.password);
};

UserSchema.virtual('profile').get(function () {
  const { name, username, _id } = this;

  return { name, username, _id };
});

const User = mongoose.model('User', UserSchema);

export default User;
