import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import { User } from "../models/user.model.js";

 
 const Loginuser=asyncHandler(async(req,res)=>{
    const {phoneNumber,otp}=req.body
     
    if(!phoneNumber) {
        throw new ApiError(400,"Phone Number Is Required")
    }

    if(!validatePhoneNumber(phoneNumber)){
        throw new ApiError(400,"Invalid Phone Number")
    }

    const user=await User.findOne({
        phoneNumber:phoneNumber
    })
    if(!user){
        throw new ApiError(404,"User Not Found")
        }


 })

 


