import express from "express"
import servicesRouter from "./routers/servicesRouter.js"

const app=express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/healthcare",servicesRouter)

export default app;