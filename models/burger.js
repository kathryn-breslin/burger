var orm = require("../config/orm.js");

var burgers = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
            //console.log(res);
        });
    },
    insertOne: function(cols, vals, cb) { //check this...in the example the cols, vals are arrays..?
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
            
        })
    }, 
    updateOne: function(objColVals, condition, cb) { //check this as well, this needs to refelct the orm file, with coordinating values that will be updated along with the burgers, etc
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burgers;