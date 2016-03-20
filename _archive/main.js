"use strict";

var MainController = require('./controllers/MainController'),
	DataModel = require('./model/DataModel');

console.log("Main app called now");

$(function() {
	var data = DataModel.exercise1;

	var mainController = new MainController(data);
});
