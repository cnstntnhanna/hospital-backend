import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Allow frontend (Vercel) to call backend
app.use(cors({
  origin: process.env.FRONTEND_URL,
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
