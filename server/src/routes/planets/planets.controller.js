import { habitablePlanets } from "../../models/planets.model.js";
export const getAllPlanets = (req, res) => {
  console.log(habitablePlanets);
  return res.status(200).json(habitablePlanets);
  // res.setHeader("Content-Type", "application/json");
  // res.writeHead(200);
  // res.end(JSON.stringify(habitablePlanets, null, 3));
};
