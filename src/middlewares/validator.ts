import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import mainConfig from "../config/main";

const validationError = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    const error = errors.array()[0].msg;
    return res.status(mainConfig.status.notAcceptable).json({ msg: error });
  }
  return next();
};

const shortenLinkValidator = [
  body("url", "URL is required")
    .trim()
    .isString()
    .isURL()
    .withMessage("Invalid URL"),
];

export { validationError, shortenLinkValidator };
