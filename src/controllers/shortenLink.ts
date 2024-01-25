import { Request, Response } from "express";
import errorHandler from "../utils/errorHandler";
import Link from "../models/Link";
import mainConfig from "../config/main";

export default async (req: Request, res: Response) => {
  try {
    const { url } = req.body;
    const { BACKEND_BASE_URL } = process.env;
    const link = await Link.create({
      url: url,
    });

    const link_id = link.get().uuid;
    // return response
    return res.status(mainConfig.status.created).json({
      id: link_id,
      shortUrl: `${BACKEND_BASE_URL}/${link_id}`,
      expireAt: link.get().expireAt,
    });
    // error response
  } catch (error) {
    return errorHandler(res);
  }
};
