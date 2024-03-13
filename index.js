import express from "express"
import axios from "axios"
// import bootstrap from "bootstrap"

const app = express()
const port = 3000 
const API_URL = "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1"

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get(API_URL)
        res.render("index.ejs", {
            type: result.data.type,
            text: result.data.text
        })
    } catch (error) {
        console.log(error.response.data)
        res.status(500)
    }
})

app.listen(port, () => {
    console.log("Server running on port: " + port)
})
