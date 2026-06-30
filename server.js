import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import itemsRouter from "./routes/items.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(join(__dirname, "public")));

// Serve uploaded images as static files
app.use("/uploads", express.static(join(__dirname, "uploads")));

// API routes
app.use("/api/items", itemsRouter);

// Fallback to index.html
app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`\n🔍 Lost & Found running at http://localhost:${PORT}\n`);
});
