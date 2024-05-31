import { Request, Response, Router } from "express";
import upload from "../utils/multer";
import fs from "fs";
import uploadToS3 from "../utils/s3";
import { promises } from "dns";

const route = Router();
route.post(
  "/add-hotel",
  upload.array("images", 5),
  async (req: Request, res: Response) => {
    try {
      const images = req.files as Express.Multer.File[];

      const uploadImages = images?.map(async (image) => {
        const data = fs.readFileSync(image.path);

        const url = await uploadToS3(
          "booking.com01",
          `images/${image.originalname}`,
          image.mimetype,
          data
        );
        return url;
      });

      const imageURL: string[] = await Promise.all(uploadImages);


      



      res.json({
        status: "OK",
      });
    } catch (error) {}
  }
);

export default route;
