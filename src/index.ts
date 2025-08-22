import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL, // your frontend domain
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Backend running with CORS enabled 🚀");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running...");
});
