require("dotenv").config(); // Pastikan ini ada di baris pertama
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const responseHandler = require("./middleware/responseHandler");
const globalErrorHandler = require("./middleware/errorHandler");

const PORT = process.env.PORT || 3000;

// Daftar origin yang diizinkan (Frontend URL)
const allowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  ...(process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(",") : [])
];

const corsOptions = {
  origin: function (origin, callback) {
    // Izinkan jika origin ada di daftar allowedOrigins atau jika tidak ada origin (spt Postman/Server-to-Server)
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.error("CORS Blocked Origin:", origin); // Log untuk debugging
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // Wajib true agar cookie/token bisa dikirim/diterima
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Middleware
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(cors(corsOptions)); // Terapkan CORS sebelum route lain
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(responseHandler);

// Import Router Utama
const mainRouter = require("./routes/index");

// Daftarkan Router Utama
app.use("/api/v1", mainRouter);

// Root endpoint
app.get("/", (req, res) => {
  res.send("API Exaque v1.0 is running...");
});

// Error Handler Terakhir
app.use(globalErrorHandler);

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});