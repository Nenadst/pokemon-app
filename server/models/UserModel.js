const { default: mongoose } = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  lastName: {
    type: String,
    default: 'lastName',
  },
  phoneNumber: String,
  userInfo: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  urlImage: String,
  avatarPublicId: String,
});

UserSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

module.exports = mongoose.model('User', UserSchema);
