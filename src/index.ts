import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  "http://localhost:3000", // local dev
  "https://hospital-frontend-system.vercel.app" // vercel frontend
];

// ✅ Use function form so multiple origins work
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
}));

// ✅ Example API route
app.get("/api/weather", (req, res) => {
  res.json({
    location: { name: "Manila" },
    current: { temp_c: 30 },
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
