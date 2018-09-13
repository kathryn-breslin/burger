var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.put("/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("Condition", condition);
    burger.update(
        {
            devoured: req.body.devoured
        }, 
        condition, 
        function(results) {
            if (results.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    )
});


module.exports = router;