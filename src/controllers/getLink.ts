import { Request, Response } from "express";
import Link from "../models/Link";
import mainConfig from "../config/main";

export default async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const link = await Link.findOne({
      where: {
        uuid: id,
      },
    });

    if(link){
      return res.redirect(link?.get().url);
    }
    return res.status(mainConfig.status.notFound).send("404 | Page not Found");
  } catch (error) {
    return res.status(mainConfig.status.serverError).send("503 | Service Unavailable");
  }
};
