import express from "express";

let router = express.Router();

router.get("/", (req, res) => {
    res.render("home/home");
});

//router.get("/contact", (req, res) => {
//    res.redirect("/");
//});

//router.get("/events", (req, res) => {
//    res.redirect("/");
//});

//router.get("/events/*", (req, res) => {
//    res.redirect("/");
//});

export default router
