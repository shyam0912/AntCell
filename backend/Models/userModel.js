import mongoose from "mongoose";

const UserScheme = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    profileImage: String,
    coverImage: String,
    email: String,
    about: String,
    livesIn: String,
    worksAt: String,
    state: String,
    country: String,
    relationship: String,
    followers: [],
    following: [],
  },
  { timestamps: true }
);

const UserModel = mongoose.model("Users", UserScheme);
export default UserModel;
