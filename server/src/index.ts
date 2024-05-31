import express from "express";
import cors from 'cors'
import route from "./routes/auth";
import hotel from './routes/hotel'
import cookieparser from 'cookie-parser'
const app = express();

app.use(cookieparser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
  origin:'http://localhost:5173',
  credentials:true
}))

app.get("/", (req, res) => {
  res.json("Ok");
});

app.use('/api/auth',route)
app.use('/api',hotel)

app.listen(3000);
