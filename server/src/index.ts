import express from "express";
import cors from 'cors'
import route from "./routes/auth";
const app = express();

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

app.listen(3000);
