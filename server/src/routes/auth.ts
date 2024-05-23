import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";
import { singInSchema, singUpSchema } from "../../ZodValidation/authSchema";
import verifyToken from "../Middleware/verifyToken";

const prisma = new PrismaClient();
const route = Router();

//Register_User
route.post("/signup", async (req: Request, res: Response) => {
  try {
    const validateBody = await singInSchema.safeParse(req.body);

    if (!validateBody.success) {
      return res.status(403).json({
        success: validateBody.success,
        message: validateBody.error.errors[0].message,
      });
    }

    const { email, username, password } = req.body;

    let user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (user) {
      return res.status(400).json({
        success: false,
        message: "user already exists",
        data: user,
      });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email: email,
        username: username,
        password: encryptedPassword,
      },
      select: {
        id: true,
        username: true,
        email: true,
      },
    });

    res.json({
      success: true,
      message: "Created successfully",
      data: newUser,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
});

route.post("/signin", async (req: Request, res: Response) => {
  try {
    const validateBody = await singInSchema.safeParse(req.body);

    if (!validateBody.success) {
      return res.status(403).json({
        success: validateBody.success,
        message: validateBody.error.errors[0].message,
      });
    }

    const { email, password } = validateBody.data;

    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Invalid user",
        data: null,
      });
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return res.status(400).json({
        success: false,
        message: "incorrect password",
        data: null,
      });
    }

    const userCookie = await jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET as string
    );

    res.cookie("Auth", userCookie, {
      httpOnly: true,
      secure: true,
    });

    return res.status(200).json({
      success: true,
      message: "logged in success",
      data: null,
    });
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
});

route.get("/validate-token", verifyToken, (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Success",
    data: { userID: req.userID },
  });
});

route.get("/signout", (req: Request, res: Response) => {
  res.clearCookie("Auth");
  res.status(200).json({
    success: true,
    message: "Sucessfully signout...",
    data: null,
  });
});

export default route;
