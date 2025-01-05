import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccesstoken();
    const refreshToken = user.generateRefreshtoken();
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (e) {
    throw new ApiError(
      500,
      "Something went wrong while generating refresh and access token."
    );
  }
};

const registerUser = asyncHandler(async (req, res) => {
  // req for input of name and all the details
  //validate that it is not empty
  //check if user already exists: username, email
  // check for images, check for avatar
  //upload them to cloudinary
  // create user object make enrty in database
  //remove password and refresh token from response
  // check for user creation
  //return res

  //  data from form and json then, form
  // data from url, then params
  const { username, email, password } = req.body;
  console.log(email);
  if ([username, email, password].some((field) => field.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }
  // console.log(req.body)
  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });
  //   console.log(existedUser)
  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists.");
  }
  // console.log(req.file)
  const profilePicLocalPath = req.file?.path;
  //if image not exists

  console.log(profilePicLocalPath);
  if (!profilePicLocalPath) {
    throw new ApiError(400, "Profile is required");
  }
  console.log(profilePicLocalPath);
  // uploading images on Cloudinary
  const profile = await uploadOnCloudinary(profilePicLocalPath);

  if (!profile) {
    throw new ApiError(400, "Profile Image is required is required");
  }

  const user = await User.create({
    username: username.toLowerCase(),
    profile_pic: profile.url,
    email,
    password,
  });
  // console.log(user)

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong registering the user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User created successfuly"));
});

const loginUser = asyncHandler(async (req, res) => {
  // take username or email from the user
  // check if it is their in the database
  // verify hashed password and password match
  //  if they match login else incorrect password
  //access token and refreah token
  //send cookies
  const { email, username, password } = req.body;

  if (!(username || email)) {
    throw new ApiError(400, "username or password is required");
  }

  const user = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    throw new ApiError(404, "User does not exist");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Incorrect password");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  // now only server can modify these cookies
  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user:loggedInUser,accessToken,refreshToken
        },
        "User logged in successfully"
      )
    )
});

const logoutUser=asyncHandler(async(req,res)=>{
  // remove access and refresh token
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set:{
        refreshToken:undefined
      }
    },{
      new:true
    }
  )
  const options={
    httpOnly:true,
    secure:true
  }
  return res
  .status(200)
  .clearCookie("accessToken",options)
  .clearCookie("refreshToken",options)
  .json(new ApiResponse(200,{},"User Logged out"))
  
})

export { registerUser, loginUser,logoutUser };
