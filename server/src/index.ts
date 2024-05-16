import express from "express";
import cors from 'cors'
import route from "./routes/auth";
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/", (req, res) => {
  res.json("Ok");
});

app.use('/api/auth',route)

app.listen(3000);
