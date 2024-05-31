import { Request, Response, Router } from "express";
import upload from "../utils/multer";
import fs from "fs";
import uploadToS3 from "../utils/s3";

const route = Router();
route.post(
  "/add-hotel",
  upload.array("images", 5),
  async (req: Request, res: Response) => {
    try {
      const images = req.files as Express.Multer.File[];

      images?.map(async (image) => {
        const data = fs.readFileSync(image.path);

        const url = await uploadToS3(
          "booking.com01",
          `images/${image.originalname}`,
          image.mimetype,
          data
        );
        console.log(url);
        
      });
     
      res.json({
        status: "OK",
      });
    } catch (error) {}
  }
);

export default route;
