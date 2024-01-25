import { record } from "@logdrop/node";
import cors from "cors";
import express, { Request, Response } from "express";
import helmet from "helmet";
import path from "path";
import morgan from "morgan";
import mainConfig from "./config/main";
import errors from "./middlewares/errors";
import getLink from "./controllers/getLink";
import shortenLink from "./controllers/shortenLink";
import { shortenLinkValidator, validationError } from "./middlewares/validator";

// main code logic
const app = express();

const logDrop = record(process.env.LOGDROP_API_KEY as string);

// middlewares
app.disable("x-powered-by");
app.use(express.static(path.join(__dirname, "../public")));
app.use(helmet());
app.use(cors({ origin: mainConfig.origin }));
app.use(
  express.urlencoded({
    extended: true,
    limit: mainConfig.limit,
    parameterLimit: mainConfig.parameterLimit,
  })
);
app.use(express.json({ limit: mainConfig.limit }));
process.env.NODE_ENV == "production" &&
  process.env.LOGDROP_API_KEY &&
  app.use(logDrop);
app.use(morgan("dev"));

app.post(
  mainConfig.routes.shorten,
  shortenLinkValidator,
  validationError,
  shortenLink
);

app.get(mainConfig.routes.getLink, getLink);

// error rotes
app.use(errors);
export default app;
