import { Router } from "express";
import weatherRoute from "./weather";

const router = Router();

router.use("/weather", weatherRoute);

export default router;
