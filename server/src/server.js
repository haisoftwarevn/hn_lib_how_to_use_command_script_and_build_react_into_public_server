import app from "./app.js";

import HN_CONFIG from "./utils/hn.config.utils.js";
import { loadPlanetsData } from "./models/planets.model.js";
import http from "http";

const server = http.createServer(app);

// async function startServer() {
//   await loadPlanetsData();

//   server.listen(HN_CONFIG.port, () => {
//     console.log(HN_CONFIG.message + " " + HN_CONFIG.port);
//   });
// }

const startServer = async () => {
  await loadPlanetsData();

  server.listen(HN_CONFIG.port, () => {
    console.log(HN_CONFIG.message + " " + HN_CONFIG.port);
  });
};

startServer();
