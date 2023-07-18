const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, 'Email must be unique'],
    trim: true,
  },
  password: String,
  age: {
    type: Number,
    min: 18,
    max: 65,
  },
  role: {
    type: String,
    enum: ['ADMIN', 'USER'],
    default: 'USER',
  },
  isActive: {
    type: Boolean,
    default: false,
  }
}, {
  versionKey: false,
  timestamps: true,
});

// trigger
// UserSchema.pre('save', function (next) {
//   const user = this;

//   try {
//     if (!this.isModified('password')) {
//       next();
//     }

//     // if (user.password) {
//     //   const salt = await bcrypt.genSalt(10);
//     //   const hash = await bcrypt.hash(user.password, salt);

//     //   user.password = hash;
//     // }
//   } catch (error) {

//   }

// });

// Virtuals
UserSchema.virtual('profile').get(function () {
  const user = this;

  return {
    name: user.name,
    email: user.email,
    role: user.role,
  }
});

// Methods
// UserSchema.methods.comparePaassword = function () {}


const User = mongoose.model('User', UserSchema); // users

module.exports = User;
