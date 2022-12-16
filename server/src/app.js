import express from "express";
import cors from "cors";

///////////////dirname///////////////
import path from "path";
import { fileURLToPath } from "url";
// fix __dirname trong es6;
const __filename = fileURLToPath(import.meta.url);
// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);
//////////////////////////////////
import HN_CONFIG from "./utils/hn.config.utils.js";
import planetsRouter from "./routes/planets/planets.router.js";
//////////////////////////////////
const app = express();

app.use(cors({ origin: HN_CONFIG.origin }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
///// phải fix lại dirname
app.use(express.static(path.join(__dirname, "..", "public")));
/////////////////
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
app.use("/planets", planetsRouter);
export default app;
