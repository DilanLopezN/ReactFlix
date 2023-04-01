import { Request } from "express";
import path from "path";

export const episodesController = {
  stream: async(req: Request, res: Response) => {
    const { videoUrl} = req.query
    try {
      if(typeof videoUrl !== "string") throw new Error("Param must be a string")

      const filePath = path.join(__dirname, '..', '..','uploads', videoUrl)
    } catch (error) {
      
    }
  }
}