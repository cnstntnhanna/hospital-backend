import { Router } from "express";
import weatherRoute from "./weather.js";

const router = Router();

router.use("/weather", weatherRoute);

export default router;
