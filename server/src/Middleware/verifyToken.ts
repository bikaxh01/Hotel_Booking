import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

declare global{
    namespace Express{
        interface Request{
            userID:string
        }
    }
}

export default function verifyToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const cookie = req.cookies["Auth"];

    if (!cookie) {
      return res.status(404).json({
        success: false,
        message: "Invalid user",
        data: null,
      });
    }

    const verify =  jwt.verify(cookie, process.env.JWT_SECRET as string);
    
    req.userID = (verify as JwtPayload).userId
    next();
  } catch (error: any) {
    return res.status(404).json({
      success: false,
      message: "Invalid Token",
      data: null,
    });
  }
}
