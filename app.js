// const app = require("express")()


// app.get("/", (req, res) => {
//     // res.send("Hello brother Welcome here I am from home page")
//     res.json({
//         nischal: "We are at / location.Welcome",
//         status: "i am a Student."
//     })
// })

// app.get("/contact", (req, res) => {
//     res.send("I am From Contact File.")
// })

// // API Examples
// //  http://localhost:/about
// //  http://localhost:/contact

// app.get("/about", (req, res) => {
//     // API Form
//     // res.send("<h1>I am From about File.</h1>")
//     res.json({
//         nischal: "I am from Denmark Page",
//         address: "Nepal",
//         birth: "India",
//         birth: "Jhapa"
//     })
// })

// app.listen(3000, (req, res) => {
//     console.log("NodeJS has started at port 3000");

// })

const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))



// database Connection
app.get("/", (req, res) => {
    res.json({
        status: 500,
        message: "You suceceed"
    })
})

// GET API  named as /stdDetails(All Details)
app.get("/details", async (req, res) => {
    const details = await Details.find()
    if (details.length == 0) {
        res.status(404).json({
            message: "Empty Blogs"
        })
    }
    else {
        res.status(200).json({
            message: "Blogs Feteched SuccessFully",
            data: details
        })
    }
})


// create garnne details haru
app.post("/createDetails", async (req, res) => {
    const title = req.bosy.title
    const subTitle = req.body.subTitle
    const description = req = req.body.description

    await Details.create({
        title: title,
        subTitle: subTitle,
        description: description
    })
    res.json({
        status: 500,
        message: "Detail Created Successfully."
    })
})
app.listen(2000, () => {
    console.log("NodeJS has startedin port 2000");
})