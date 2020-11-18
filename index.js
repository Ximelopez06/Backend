const express = require("express")
const morgan = require("morgan")
const app = express();
const cors = require("cors");


//middlewares
app.use(morgan("dev"))
app.use(express.json())
app.use(cors({origin: '*'}));

//ROUTES
app.use("/api/", require ('./routes/estudiantes'))

app.get("/", (req,res) => {
  res.send("API CRUD")
})


app.set("puerto", 9001)

app.listen(app.get("puerto"), () => {
  console.log(`Servidor escucnado en el puerto ${app.get("puerto")}`)
})