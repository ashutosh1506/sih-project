import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import { User } from "../models/user.model.js";

const generateAccessAndRefreshToken=async(userId)=> {
    try {
   const user= await User.findById(userId)
  
   const Accesstoken= user.generateAcessTokens()
  
   const RefeshToken= user.generateRefreshTokens()
  
   // reffresh token in db daalo
   user.refreshToken=RefeshToken
   await user.save({validateBeforeSave:false})
  
   return {Accesstoken,RefeshToken}
  
    } catch (error) {
      throw new ApiError(500,"something went wrong while generating refresh and access token")
    }
  } 

 const Loginuser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body
    if([email,password].some((field)=>field?.trim()==="")){
        throw new ApiError(400,"Please fill in all fields")
    }

  const user= await User.findOne({
    $or:[{email},{password}]
   })

   if(!user) {
    throw new ApiError(404, "user  Do Not Exsist")
   }

 const validPassword=  await user.ispasswordCorrect(password)
 if(!validPassword){
    throw new ApiError(401,"Invalid Password")
    }
 
 const {Accesstoken,RefeshToken}=generateAccessAndRefreshToken(user._id);

 const loggedinUser=await User.findById(user._id).select("-refreshToken -password")

 const options={
    https:true,
    secure:true,
 }

 return res
 .status(200)
 .cookie("accessToken",Accesstoken,options)
 .cookie("refreshToken",RefeshToken,options)
 .json(
    new ApiResponse(200,
        {
            user:loggedinUser,Accesstoken,RefeshToken
        },
        "User logged in successfully"
    )
 )

 })


 export {
    Loginuser,
 }




