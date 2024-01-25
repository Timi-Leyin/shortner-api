import { Response } from "express";
import mainConfig from "../config/main";

export default (res:Response)=>{
    return res.status(mainConfig.status.serverError).json({
        msg:"Internal server error"
    })
}