import { Router } from "express";
import axios from "axios";

const router = Router();

router.get("/", async (_req, res) => {
  try {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          q: "Alabang",
          appid: process.env.WEATHER_API_KEY,
          units: "metric"
        }
      }
    );

    const data = response.data;

    res.json({
      location: {
        name: data.name
      },
      current: {
        temp_c: data.main.temp
      }
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch weather" });
  }
});

export default router;
