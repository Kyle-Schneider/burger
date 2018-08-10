var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.create("burgers", [
      "burger_name", "devoured"
    ], [
      name, false
    ], cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("burgers", {
      devoured: true
    }, condition, cb);
  }
};

module.exports = burger;



var orm = require("../config/orm.js");

// var burgers = {

//     all: function (cb) {
//         orm.selectAll(function (res) {
//             cb(res);
//         });
//     },

//     create: function (burger_name, cb) {
//         orm.insertOne(burger_name, function (res) {
//             cb(res);
//         });
//     },
    
//     update: function (id, cb) {
//         orm.updateOne(id, function (res) {
//             cb(res);
//         });
//     }

// };