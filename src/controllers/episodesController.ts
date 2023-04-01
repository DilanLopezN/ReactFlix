import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { episodeService } from "../services/episodeService";

export const episodesController = {
  stream: async(req: Request, res: Response) => {
    const { videoUrl} = req.query
    try {
      if(typeof videoUrl !== "string") throw new Error("Param must be a string")
      const range = req.headers.range

      episodeService.streamEpisodeToResponse(res, videoUrl, range)
    } catch (error) {
      console.error('Erro Pipe Episode', error)
    }
  }
}