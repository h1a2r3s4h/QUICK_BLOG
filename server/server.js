import express from 'express';
import 'dotenv/config'; 
import cors from 'cors';
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

const app = express();
console.log("Starting server...");
connectDB();

// ✅ Configure CORS for both local & production
const allowedOrigins = [
  "http://localhost:5173",                   // local Vite
  "https://quick-blog-kappa-six.vercel.app" , // deployed frontend
  "https://quick-blog-oqb1w5rsg-h1a2r3s4hs-projects.vercel.app" 
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps, curl, etc.)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.use(express.json());

// Routes
app.get('/', (req, res) => res.send("API is working"));
app.use('/api/admin', adminRouter);
app.use('/api/blog', blogRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('server is running on port ' + PORT);
});

export default app;
