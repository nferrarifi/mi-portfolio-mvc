const express = require ("express")
const path = require ("path")

const mainControllers = {
home: (req,res) => {
    res.sendFile (path.resolve("./views/home.html")) 
},
about: (req,res) => {
    res.sendFile (path.resolve("./views/about.html")) 
}}

module.exports = mainControllers