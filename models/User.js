import { Schema, model, models } from "mongoose";

const UserChema = new Schema(
  {
    email: {
      type: String,
      unique: [true, "Email already exsist"],
      required: [true, "Email is required"],
    },
    username: {
      type: String,
      required: [true, "Username is required"],
    },
    image: {
      type: String,
    },
    bookmarks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Property",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = models.User || model("User", UserChema);

export default UserChema;
